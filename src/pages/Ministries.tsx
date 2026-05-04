import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Heart, Users, Sparkles, Video, BookOpen, Megaphone, GraduationCap } from "lucide-react";

const Ministries = () => {
  const ministries = [
    {
      icon: Music,
      name: "Louange",
      vision: "Conduire le peuple de Dieu dans une adoration authentique et passionnée qui touche le cœur de Dieu.",
      responsible: "À venir",
      description: "Notre équipe de louange se consacre à créer une atmosphère de présence divine à travers la musique et le chant.",
    },
    {
      icon: Heart,
      name: "Intercession",
      vision: "Se tenir dans la brèche pour l'église, la communauté et les nations à travers la prière fervente.",
      responsible: "À venir",
      description: "Un ministère dédié à la prière intense et à l'intercession pour les besoins de l'église et du monde.",
    },
    {
      icon: Sparkles,
      name: "Jeunesse",
      vision: "Former la prochaine génération de leaders chrétiens passionnés et engagés pour Christ.",
      responsible: "À venir",
      description: "Activités, enseignements et événements spécialement conçus pour les jeunes de 13 à 30 ans.",
    },
    {
      icon: Users,
      name: "Femmes",
      vision: "Équiper et encourager les femmes à vivre leur appel divin avec force et grâce.",
      responsible: "À venir",
      description: "Un espace de communion, d'enseignement et de soutien mutuel pour les femmes de tous âges.",
    },
    {
      icon: Users,
      name: "Hommes",
      vision: "Développer des hommes de Dieu intègres, courageux et responsables dans leur foi et leur famille.",
      responsible: "À venir",
      description: "Rencontres et enseignements pour fortifier les hommes dans leur rôle spirituel et familial.",
    },
    {
      icon: Megaphone,
      name: "Évangélisation",
      vision: "Proclamer l'Évangile avec audace et amour pour atteindre les perdus avec le message du salut.",
      responsible: "À venir",
      description: "Sorties d'évangélisation, distribution de tracts et partage de l'Évangile dans la communauté.",
    },
    {
      icon: Video,
      name: "Média",
      vision: "Utiliser les technologies modernes pour diffuser le message de l'Évangile au-delà des murs de l'église.",
      responsible: "À venir",
      description: "Production vidéo, diffusion en direct, réseaux sociaux et gestion du contenu multimédia.",
    },
    {
      icon: GraduationCap,
      name: "Éducation",
      vision: "Former des disciples matures à travers l'enseignement biblique approfondi et la formation continue.",
      responsible: "À venir",
      description: "École du dimanche, études bibliques, séminaires et programmes de formation pour tous les âges.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-accent flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nos Ministères</h1>
          <p className="text-xl md:text-2xl">Servir Dieu et bénir la communauté</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">Impliquez-vous dans le Service</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Chaque membre de notre église a des dons et des talents uniques que Dieu veut utiliser. 
              Nos ministères offrent des opportunités pour servir, grandir et faire une différence dans 
              la vie des autres. Trouvez votre place et découvrez la joie de servir !
            </p>
          </div>
        </div>
      </section>

      {/* Liste des ministères */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ministries.map((ministry, index) => {
                const Icon = ministry.icon;
                return (
                  <Card key={index} className="border-2 border-primary/20 hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">{ministry.name}</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-primary mb-2">Vision</h4>
                          <p className="text-foreground">{ministry.vision}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-2">Description</h4>
                          <p className="text-muted-foreground">{ministry.description}</p>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm">
                            <span className="font-semibold text-primary">Responsable : </span>
                            <span className="text-muted-foreground">{ministry.responsible}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez un Ministère</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dieu vous a donné des talents et des dons pour servir. Ne les laissez pas inutilisés ! 
            Contactez-nous pour découvrir comment vous pouvez vous impliquer dans l'un de nos ministères.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-md hover:bg-white/90 transition-colors"
            >
              Nous contacter
            </a>
            <a
              href="tel:3435966936"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-colors"
            >
              Appeler : 343-596-6936
            </a>
          </div>
        </div>
      </section>

      {/* Verset */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl italic text-foreground mb-4">
                « Il y a diversité de dons, mais le même Esprit ; diversité de ministères, 
                mais le même Seigneur ; diversité d'opérations, mais le même Dieu qui opère tout en tous. »
              </blockquote>
              <p className="text-muted-foreground font-semibold">1 Corinthiens 12:4-6</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ministries;
