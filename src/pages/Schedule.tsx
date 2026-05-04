import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Calendar } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "Dimanche",
      activities: [
        {
          name: "École dominicale et Culte d'adoration",
          time: "10:00 AM - 12:00 PM",
          description: "Enseignement biblique pour tous les âges suivi du culte d'adoration",
        },
      ],
    },
    {
      day: "Mercredi",
      activities: [
        {
          name: "Étude biblique",
          time: "8:00 PM - 9:00 PM",
          description: "Approfondissement de la Parole de Dieu et partage en groupe",
        },
      ],
    },
    {
      day: "Vendredi",
      activities: [
        {
          name: "Service de prière",
          time: "9:00 PM - Minuit",
          description: "Temps de prière intense, intercession et recherche de la présence de Dieu",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-accent flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Culte & Horaires</h1>
          <p className="text-xl md:text-2xl">Rejoignez-nous pour nos activités hebdomadaires</p>
        </div>
      </section>

      {/* Programme des activités */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">Programme Hebdomadaire</h2>
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <Card key={index} className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary mb-4">{item.day}</h3>
                        {item.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="mb-4 last:mb-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <Clock className="w-5 h-5 text-accent" />
                              <span className="font-semibold text-lg text-foreground">{activity.name}</span>
                            </div>
                            <p className="text-primary font-medium mb-2">{activity.time}</p>
                            <p className="text-muted-foreground">{activity.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adresse et Carte */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Nous Trouver</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Informations */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold text-primary">Adresse</h3>
                    </div>
                    <p className="text-lg text-foreground">
                      83 haxby pvt K1T 3C1<br />
                      Ottawa, Ontario<br />
                      Canada
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-lg text-primary mb-3">Informations Pratiques</h4>
                    <ul className="space-y-2 text-foreground">
                      <li>✓ Stationnement disponible</li>
                      <li>✓ Accessible aux personnes à mobilité réduite</li>
                      <li>✓ École du dimanche pour les enfants</li>
                      <li>✓ Traduction disponible (Français, Créole, Anglais)</li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-lg text-primary mb-3">Première Visite ?</h4>
                    <p className="text-muted-foreground">
                      N'hésitez pas à arriver 15 minutes avant le début du culte. 
                      Notre équipe d'accueil sera ravie de vous rencontrer et de vous guider.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carte Google Maps */}
            <Card className="border-2 border-primary/20 overflow-hidden">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.123456789!2d-75.6903!3d45.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI1JzE3LjQiTiA3NcKwNDEnMjUuMSJX!5e0!3m2!1sfr!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
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

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-accent text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Vous Êtes les Bienvenus !</h2>
              <p className="text-lg mb-6">
                Que vous soyez de passage ou à la recherche d'une église, 
                nous serions honorés de vous accueillir dans notre famille spirituelle.
              </p>
              <p className="text-xl font-semibold">
                « Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. » - Matthieu 11:28
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
