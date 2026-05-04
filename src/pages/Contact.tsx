import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
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
          type: 'contact'
        }
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "343-596-6936",
      link: "tel:3435966936",
    },
    {
      icon: Mail,
      title: "Email",
      content: "eglisededieu_maisondelumiere@aol.com",
      link: "mailto:eglisededieu_maisondelumiere@aol.com",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "83 haxby pvt K1T 3C1, Ottawa, Canada",
      link: "https://maps.google.com/?q=83+haxby+pvt+K1T+3C1+Ottawa",
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com/profile.php?id=61585361853207",
      color: "hover:bg-blue-600",
    },
    {
      icon: Youtube,
      name: "YouTube",
      link: "https://www.youtube.com/@MINISTÈREMAISONDELUMIÈRE",
      color: "hover:bg-red-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://instagram.com",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-accent flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl md:text-2xl">Nous sommes là pour vous écouter et vous accompagner</p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">Nos Coordonnées</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors break-all"
                      >
                        {info.content}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-4">Envoyez-nous un Message</h2>
              <p className="text-lg text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
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
                      <Label htmlFor="phone" className="text-foreground">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
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
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[200px]"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demande de prière */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-white to-secondary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Besoin de Prière ?</h2>
                <p className="text-lg text-foreground mb-6">
                  Notre équipe d'intercession est prête à prier pour vos besoins. 
                  N'hésitez pas à nous partager vos requêtes de prière.
                </p>
                <p className="text-muted-foreground mb-6">
                  « La prière fervente du juste a une grande efficacité. » - Jacques 5:16
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/prayer">Demander une prière</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                    <a href="tel:3435966936">Appeler maintenant</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Réseaux sociaux */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Suivez-nous sur les Réseaux Sociaux</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Restez connectés et ne manquez aucune de nos activités
            </p>
            <div className="flex justify-center space-x-6">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center text-primary ${social.color} hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110`}
                  >
                    <Icon className="w-8 h-8" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-primary text-center">Localisation</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.123456789!2d-75.6903!3d45.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI1JzE3LjQiTiA3NcKwNDEnMjUuMSJX!5e0!3m2!1sfr!2sca!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de l'église"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
