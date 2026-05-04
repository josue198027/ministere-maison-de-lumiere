import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const Sermons = () => {
  const sermons = [
    {
      title: "La Lumière du Monde",
      date: "26 Avril 2026",
      preacher: "Bishop Josué Joachim",
      verse: "Jean 8:12",
      description: "Découvrez comment Jésus est la lumière qui éclaire nos ténèbres et transforme nos vies.",
    },
    {
      title: "La Puissance de la Prière",
      date: "19 Avril 2026",
      preacher: "Bishop Josué Joachim",
      verse: "Jacques 5:16",
      description: "La prière du juste a une grande efficacité. Apprenons à prier avec foi et persévérance.",
    },
    {
      title: "Marcher dans la Foi",
      date: "12 Avril 2026",
      preacher: "Bishop Josué Joachim",
      verse: "Hébreux 11:1",
      description: "La foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.",
    },
  ];

  const categories = [
    "Tous",
    "Foi et Confiance",
    "Prière et Intercession",
    "Vie Chrétienne",
    "Famille",
    "Jeunesse",
    "Prophétie",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-accent flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Prédications</h1>
          <p className="text-xl md:text-2xl">Nourrissez votre foi avec nos enseignements bibliques</p>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-primary hover:bg-primary/90" : "border-primary text-primary hover:bg-primary hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des prédications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">Dernières Prédications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sermons.map((sermon, index) => (
                <Card key={index} className="border-2 border-primary/20 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">{sermon.title}</h3>
                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{sermon.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{sermon.preacher}</span>
                      </div>
                      <p className="font-semibold text-primary">{sermon.verse}</p>
                    </div>
                    <p className="text-foreground mb-4 line-clamp-3">{sermon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Chaîne YouTube */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Abonnez-vous à Notre Chaîne YouTube</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ne manquez aucune prédication ! Abonnez-vous pour recevoir les notifications de nos nouveaux messages.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <a
              href="https://www.youtube.com/@MINISTÈREMAISONDELUMIÈRE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visiter notre chaîne YouTube
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sermons;
