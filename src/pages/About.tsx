import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, TrendingUp, Book } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "L'amour authentique",
      description: "Nous croyons en un amour inconditionnel qui reflète celui de Christ pour tous.",
    },
    {
      icon: Target,
      title: "La croissance continue",
      description: "Nous sommes dédiés à la croissance spirituelle personnelle et collective.",
    },
    {
      icon: TrendingUp,
      title: "L'excellence",
      description: "Nous aspirons à l'excellence dans tout ce que nous faisons pour la gloire de Dieu.",
    },
    {
      icon: Book,
      title: "La Parole de Dieu",
      description: "La Bible est notre fondement et notre guide dans tous les aspects de la vie.",
    },
  ];

  const beliefs = [
    {
      title: "1. La Sainte Bible",
      content: "Nous croyons en l'inspiration verbale de la Bible. La Bible est la seule règle infaillible et faisant autorité pour la foi et la conduite.",
    },
    {
      title: "2. Dieu (La Trinité)",
      content: "Il y a un seul vrai Dieu, qui existe éternellement en trois personnes : le Père, le Fils (Jésus-Christ) et le Saint-Esprit.",
    },
    {
      title: "3. Jésus-Christ",
      content: "Nous croyons en la divinité de notre Seigneur Jésus-Christ, à sa naissance virginale, à sa vie sans péché, à ses miracles, à sa mort rédemptrice sur la croix, à sa résurrection corporelle, à son ascension à la droite du Père et à son retour personnel sur terre en puissance et en gloire.",
    },
    {
      title: "4. Le Salut",
      content: "Le salut de l'homme pécheur est possible uniquement par la grâce de Dieu, à travers la foi en l'œuvre rédemptrice de Jésus-Christ. La régénération par le Saint-Esprit est absolument essentielle.",
    },
    {
      title: "5. La Sanctification",
      content: "Nous croyons en la sanctification, qui est un acte de séparation de ce qui est mal et de consécration à Dieu. Elle est considérée comme une expérience après la nouvelle naissance (salut).",
    },
    {
      title: "6. Le Baptême du Saint-Esprit",
      content: "Nous croyons que le baptême du Saint-Esprit est une expérience accordée aux croyants pour les revêtir de puissance pour la vie et le service. Le signe initial de cette expérience est le parler en d'autres langues (glossolalie), comme l'Esprit le donne.",
    },
    {
      title: "7. La Guérison Divine",
      content: "Nous croyons que la guérison divine est une partie intégrante de l'Évangile. La délivrance de la maladie est pourvue dans l'expiation et est le privilège de tous les croyants.",
    },
    {
      title: "8. L'Église",
      content: "La mission de l'Église est d'adorer Dieu, d'évangéliser le monde, d'édifier les croyants et de servir les autres.",
    },
    {
      title: "9. Les Événements Futurs (Eschatologie)",
      content: "Nous croyons à la résurrection des sauvés et des perdus ; les premiers pour la vie éternelle et les seconds pour le jugement et la damnation éternelle. Nous croyons également au retour imminent de Christ (la Seconde Venue).",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-accent flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">À Propos de Nous</h1>
          <p className="text-xl md:text-2xl">Découvrez notre vision, mission et valeurs</p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary text-center">Notre Vision</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Nous aspirons à être une famille spirituelle authentique et accueillante où chaque personne, 
                  peu importe son histoire ou son parcours, peut trouver sa place, grandir dans sa relation avec 
                  Dieu et tisser des liens fraternels solides.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary text-center">Notre Mission</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Notre mission est d'aimer Dieu de tout notre cœur, de toute notre âme et de tout notre esprit, 
                  et d'aimer notre prochain comme nous-mêmes. Nous accomplissons cela à travers l'adoration, 
                  la prière et le service concret envers ceux qui nous entourent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-primary/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Équipe Pastorale */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Notre Équipe Pastorale</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl text-white font-bold">BJ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Bishop Josué Joachim</h3>
                  <p className="text-lg text-muted-foreground mb-4">Pasteur Principal & Fondateur</p>
                </div>
                <div className="space-y-4 text-foreground">
                  <p>
                    Bishop Josué Joachim est un serviteur de Dieu engagé, enseignant, ingénieur en électronique, 
                    étudiant en sciences des données au Canada, et pasteur appelé au ministère pour l'édification 
                    de l'Église et la transformation des vies par la Parole de Dieu.
                  </p>
                  <p>
                    Il est bishop au sein de l'Église de Dieu, enregistrée à Cleveland, et a exercé le ministère 
                    pastoral comme pasteur sortant de l'Église de Dieu Petite Place Cazeau, où il a fidèlement 
                    servi dans la prédication, l'enseignement biblique.
                  </p>
                  <p>
                    Il est également fondateur du Ministère Maison de Lumière au Canada, un ministère axé sur 
                    la prière, l'enseignement biblique, la restauration des vies et la proclamation de l'Évangile 
                    dans la puissance du Saint-Esprit.
                  </p>
                  <p>
                    Doté d'une solide formation académique et d'un esprit analytique, Bishop Josué Joachim met 
                    ses compétences en éducation, en ingénierie et en sciences des données au service de la 
                    mission chrétienne, avec une vision tournée vers l'innovation, la formation des disciples 
                    et l'impact communautaire.
                  </p>
                  <p>
                    Sur le plan personnel, il est marié à son épouse, Scheba Judelie M. Joachim, pasteure, 
                    et est père de quatre enfants, qu'il considère comme un don précieux de Dieu et une 
                    responsabilité sacrée.
                  </p>
                  <div className="mt-6 bg-secondary p-4 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Son ministère est marqué par :</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>L'enseignement fidèle et pratique de la Parole de Dieu</li>
                      <li>La formation et l'encadrement des leaders chrétiens</li>
                      <li>La prière et la vie de consécration</li>
                      <li>Une vision missionnaire orientée vers la lumière, l'espérance et la transformation des nations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Déclaration de Foi */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Déclaration de Foi</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {beliefs.map((belief, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{belief.title}</h3>
                  <p className="text-foreground leading-relaxed">{belief.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
