import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Quote, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
const Testimonies = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    testimony: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const testimonies = [{
    name: "Marie D.",
    date: "Décembre 2024",
    content: "Dieu m'a délivrée de la dépression et m'a donné une nouvelle vie. Grâce aux prières de cette église, j'ai retrouvé la joie et l'espérance. Gloire à Dieu !"
  }, {
    name: "Jean-Paul M.",
    date: "Novembre 2024",
    content: "J'étais perdu dans l'alcool et les mauvaises habitudes. Le Seigneur m'a transformé complètement. Aujourd'hui, je suis un homme nouveau et je sers Dieu avec joie."
  }, {
    name: "Sophie L.",
    date: "Octobre 2024",
    content: "Dieu a guéri mon mariage qui était au bord du divorce. Grâce aux enseignements bibliques et aux prières, mon époux et moi sommes plus unis que jamais."
  }];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('save_and_send_message', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.testimony,
          type: 'testimony'
        }
      });

      if (error) throw error;

      toast({
        title: "Témoignage envoyé !",
        description: "Merci de partager votre témoignage. Il sera examiné avant publication."
      });
      setFormData({
        name: "",
        email: "",
        testimony: ""
      });
    } catch (error) {
      console.error('Error sending testimony:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-accent flex items-center bg-[rgb(177,191,164)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Témoignages</h1>
          <p className="text-xl md:text-2xl">Découvrez comment Dieu transforme des vies</p>
        </div>
      </section>





      {/* Formulaire de témoignage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Send className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-4">Partagez Votre Témoignage</h2>
              <p className="text-lg text-muted-foreground">
                Votre histoire peut encourager et inspirer d'autres personnes
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Nom complet *</Label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="mt-2" placeholder="Votre nom" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-2" placeholder="votre.email@exemple.com" />
                  </div>

                  <div>
                    <Label htmlFor="testimony" className="text-foreground">Votre témoignage *</Label>
                    <Textarea id="testimony" name="testimony" required value={formData.testimony} onChange={handleChange} className="mt-2 min-h-[200px]" placeholder="Partagez comment Dieu a agi dans votre vie..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer mon témoignage"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Votre témoignage sera examiné avant d'être publié sur le site.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Verset d'encouragement */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <Quote className="w-16 h-16 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl mx-auto">
            « Ils l'ont vaincu à cause du sang de l'Agneau et à cause de la parole de leur témoignage »
          </blockquote>
          <p className="text-xl">Apocalypse 12:11</p>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Testimonies;