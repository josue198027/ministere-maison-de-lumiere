import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Prayer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('save_and_send_message', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          type: 'prayer'
        }
      });

      if (error) throw error;

      toast({
        title: "Demande de prière envoyée !",
        description: "Notre équipe d'intercession priera pour vous.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error sending prayer request:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-accent flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Demande de Prière</h1>
          <p className="text-xl md:text-2xl">Partagez vos besoins, nous prierons pour vous</p>
        </div>
      </section>

      {/* Formulaire de demande de prière */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-4">Nous Prions Pour Vous</h2>
              <p className="text-lg text-muted-foreground">
                Notre équipe d'intercession est prête à porter vos besoins devant Dieu
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="343-XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Votre demande de prière *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[200px]"
                      placeholder="Partagez vos besoins de prière..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Vos informations resteront confidentielles et seront utilisées uniquement pour la prière.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Verset d'encouragement */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl italic text-foreground mb-4">
                « La prière fervente du juste a une grande efficacité. »
              </blockquote>
              <p className="text-muted-foreground font-semibold">Jacques 5:16</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Promesses bibliques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Les Promesses de Dieu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Matthieu 7:7</h3>
                  <p className="text-foreground italic">
                    « Demandez, et l'on vous donnera ; cherchez, et vous trouverez ; frappez, et l'on vous ouvrira. »
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Philippiens 4:6-7</h3>
                  <p className="text-foreground italic">
                    « Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. »
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">1 Jean 5:14</h3>
                  <p className="text-foreground italic">
                    « Nous avons auprès de lui cette assurance, que si nous demandons quelque chose selon sa volonté, il nous écoute. »
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Psaume 34:17</h3>
                  <p className="text-foreground italic">
                    « Quand les justes crient, l'Éternel entend, et il les délivre de toutes leurs détresses. »
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prayer;
