import { Link } from "react-router-dom";
import { Calendar, BookOpen, Heart, Users, ArrowRight, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { asset } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const upcomingEvents = [
    {
      day: "Dimanche",
      title: "École dominicale & Culte d'adoration",
      time: "10:00 AM - 12:00 PM",
      icon: Church,
    },
    {
      day: "Mercredi",
      title: "Étude biblique",
      time: "8:00 PM - 9:00 PM",
      icon: BookOpen,
    },
    {
      day: "Vendredi",
      title: "Service de prière",
      time: "9:00 PM - Minuit",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 30, 60, 0.65), rgba(15, 30, 60, 0.65)), url('${asset("images/culte-hero.png")}')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bienvenue au Ministère Maison de Lumière
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Une famille spirituelle authentique et accueillante
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link to="/about">Découvrir notre vision</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/schedule">Nous visiter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Verset du jour */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary">Verset du jour</h2>
              <blockquote className="text-lg md:text-xl italic text-foreground mb-4">
                « Jésus leur parla de nouveau, et dit : Je suis la lumière du monde. 
                Celui qui me suit ne marchera pas dans les ténèbres, mais il aura la lumière de la vie. »
              </blockquote>
              <p className="text-muted-foreground font-semibold">Jean 8:12</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Événements à venir */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Nos Activités</h2>
            <p className="text-lg text-muted-foreground">Rejoignez-nous pour nos cultes et activités hebdomadaires</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{event.day}</h3>
                    <p className="text-foreground font-semibold mb-2">{event.title}</p>
                    <p className="text-muted-foreground">{event.time}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prédications */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-primary">Prédications & Enseignements</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez nos messages inspirants et enseignements bibliques pour nourrir votre foi
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/sermons">
                Voir les prédications <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-primary">Témoignages</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez comment Dieu transforme des vies dans notre communauté
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link to="/testimonies">
                Lire les témoignages <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez Notre Famille Spirituelle</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Que vous soyez nouveau ou que vous cherchiez une église, vous êtes le bienvenu chez nous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/donate">Faire un don</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
