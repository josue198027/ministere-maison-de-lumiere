import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Heart, MessageCircle, Calendar, User, Phone, Trash2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  created_at: string;
  type: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string;
  notes: string | null;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('messages_2025_12_26')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('messages_2025_12_26')
        .update({ status: 'read' })
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Marqué comme lu",
        description: "Le message a été marqué comme lu",
      });
      
      fetchMessages();
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) return;

    try {
      const { error } = await supabase
        .from('messages_2025_12_26')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Message supprimé",
        description: "Le message a été supprimé avec succès",
      });
      
      fetchMessages();
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'contact':
        return <Mail className="w-5 h-5" />;
      case 'testimony':
        return <Heart className="w-5 h-5" />;
      case 'prayer':
        return <MessageCircle className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'contact':
        return 'Contact';
      case 'testimony':
        return 'Témoignage';
      case 'prayer':
        return 'Prière';
      default:
        return type;
    }
  };

  const filteredMessages = messages.filter(msg => {
    if (activeTab === 'all') return true;
    return msg.type === activeTab;
  });

  const stats = {
    total: messages.length,
    contact: messages.filter(m => m.type === 'contact').length,
    testimony: messages.filter(m => m.type === 'testimony').length,
    prayer: messages.filter(m => m.type === 'prayer').length,
    new: messages.filter(m => m.status === 'new').length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary to-accent flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Tableau de Bord</h1>
          <p className="text-xl md:text-2xl">Gestion des messages et témoignages</p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">{stats.contact}</p>
                <p className="text-sm text-muted-foreground">Contact</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-pink-600">{stats.testimony}</p>
                <p className="text-sm text-muted-foreground">Témoignages</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-purple-600">{stats.prayer}</p>
                <p className="text-sm text-muted-foreground">Prières</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-green-600">{stats.new}</p>
                <p className="text-sm text-muted-foreground">Nouveaux</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Messages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">Tous ({stats.total})</TabsTrigger>
                <TabsTrigger value="contact">Contact ({stats.contact})</TabsTrigger>
                <TabsTrigger value="testimony">Témoignages ({stats.testimony})</TabsTrigger>
                <TabsTrigger value="prayer">Prières ({stats.prayer})</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                {loading ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Chargement...</p>
                  </div>
                ) : filteredMessages.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Aucun message pour le moment</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredMessages.map((msg) => (
                      <Card key={msg.id} className={`border-2 ${msg.status === 'new' ? 'border-primary/40 bg-primary/5' : 'border-primary/20'}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
                                {getTypeIcon(msg.type)}
                              </div>
                              <div>
                                <CardTitle className="text-lg">{msg.name}</CardTitle>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge variant={msg.status === 'new' ? 'default' : 'secondary'}>
                                    {msg.status === 'new' ? 'Nouveau' : 'Lu'}
                                  </Badge>
                                  <Badge variant="outline">{getTypeLabel(msg.type)}</Badge>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              {msg.status === 'new' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => markAsRead(msg.id)}
                                  className="text-green-600 hover:text-green-700"
                                >
                                  <Check className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => deleteMessage(msg.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(msg.created_at).toLocaleString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <User className="w-4 h-4 text-muted-foreground" />
                              <a href={`mailto:${msg.email}`} className="text-primary hover:underline">
                                {msg.email}
                              </a>
                            </div>
                            {msg.phone && (
                              <div className="flex items-center space-x-2 text-sm">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <a href={`tel:${msg.phone}`} className="text-primary hover:underline">
                                  {msg.phone}
                                </a>
                              </div>
                            )}
                            <div className="pt-3 border-t border-border">
                              <p className="text-foreground whitespace-pre-wrap">{msg.message}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
