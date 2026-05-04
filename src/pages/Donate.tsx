import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Building2, Shield, BookOpen } from "lucide-react";

const Donate = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      name: "PayPal",
      description: "Paiement sécurisé par carte bancaire ou compte PayPal",
      action: "Donner via PayPal",
      link: "https://www.paypal.com",
    },
    {
      icon: Building2,
      name: "Interac (Canada)",
      description: "Virement Interac",
      email: "josuejoachim@aol.com",
      action: "Copier l'email",
    },
    {
      icon: Building2,
      name: "Virement Bancaire",
      description: "Contactez-nous pour les coordonnées bancaires",
      action: "Nous contacter",
      link: "/contact",
    },
  ];

  const biblicalReasons = [
    {
      verse: "Malachie 3:10",
      text: "« Apportez à la maison du trésor toutes les dîmes, afin qu'il y ait de la nourriture dans ma maison ; mettez-moi de la sorte à l'épreuve, dit l'Éternel des armées. Et vous verrez si je n'ouvre pas pour vous les écluses des cieux, si je ne répands pas sur vous la bénédiction en abondance. »",
    },
    {
      verse: "2 Corinthiens 9:7",
      text: "« Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte ; car Dieu aime celui qui donne avec joie. »",
    },
    {
      verse: "Luc 6:38",
      text: "« Donnez, et il vous sera donné : on versera dans votre sein une bonne mesure, serrée, secouée et qui déborde ; car on vous mesurera avec la mesure dont vous vous serez servis. »",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Email copié : ${text}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-accent flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Dîmes & Offrandes</h1>
          <p className="text-xl md:text-2xl">Participez à l'œuvre de Dieu par vos dons</p>
        </div>
      </section>

      {/* Enseignement biblique */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-4">Pourquoi Donner ?</h2>
              <p className="text-lg text-foreground">
                La Bible nous enseigne que donner est un acte d'adoration et de foi. 
                Vos dons permettent de soutenir l'œuvre de Dieu et de bénir la communauté.
              </p>
            </div>

            <div className="space-y-6">
              {biblicalReasons.map((reason, index) => (
                <Card key={index} className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{reason.verse}</h3>
                    <p className="text-foreground italic leading-relaxed">"{reason.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Méthodes de paiement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">Comment Donner ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {paymentMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{method.name}</h3>
                      <p className="text-muted-foreground mb-6">{method.description}</p>
                      {method.email && (
                        <p className="text-foreground font-semibold mb-4 break-all">{method.email}</p>
                      )}
                      {method.link ? (
                        <Button
                          className="w-full bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a href={method.link} target="_blank" rel="noopener noreferrer">
                            {method.action}
                          </a>
                        </Button>
                      ) : (
                        <Button
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={() => method.email && copyToClipboard(method.email)}
                        >
                          {method.action}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Utilisation des dons */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">À Quoi Servent Vos Dons ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Ministère et Évangélisation</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>✓ Soutien des activités d'évangélisation</li>
                    <li>✓ Formation des leaders</li>
                    <li>✓ Missions et projets communautaires</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Infrastructure et Équipement</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>✓ Entretien du lieu de culte</li>
                    <li>✓ Équipement audiovisuel</li>
                    <li>✓ Matériel pour les ministères</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Aide et Assistance</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>✓ Soutien aux familles dans le besoin</li>
                    <li>✓ Aide aux nouveaux arrivants</li>
                    <li>✓ Programmes d'assistance sociale</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Enseignement et Formation</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>✓ École du dimanche</li>
                    <li>✓ Séminaires et conférences</li>
                    <li>✓ Ressources pédagogiques</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-white to-secondary">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-primary mb-4">Sécurité et Transparence</h2>
                <p className="text-lg text-foreground mb-4">
                  Tous nos paiements en ligne sont sécurisés avec un certificat SSL. 
                  Vos informations personnelles et financières sont protégées.
                </p>
                <p className="text-muted-foreground">
                  Nous nous engageons à utiliser vos dons de manière responsable et transparente 
                  pour l'avancement du Royaume de Dieu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Merci pour Votre Générosité</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Chaque don, quelle que soit sa taille, fait une différence. 
            Que Dieu vous bénisse abondamment pour votre fidélité et votre générosité.
          </p>
          <blockquote className="text-2xl italic mb-4">
            « Dieu aime celui qui donne avec joie »
          </blockquote>
          <p className="text-lg">2 Corinthiens 9:7</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
