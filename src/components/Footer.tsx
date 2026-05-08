import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { asset } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary to-muted text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Ministère Maison de Lumière</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Une famille spirituelle authentique et accueillante où chaque personne peut trouver sa place et grandir dans sa relation avec Dieu.
            </p>
            <img 
              src={asset("images/Logo.png")} 
              alt="Logo Ministère Maison de Lumière" 
              className="h-20 w-auto"
            />
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Horaires des Cultes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Dimanche</strong><br />
                École dominicale & Culte<br />
                10:00 AM - 12:00 PM
              </li>
              <li>
                <strong>Mercredi</strong><br />
                Étude biblique<br />
                8:00 PM - 9:00 PM
              </li>
              <li>
                <strong>Vendredi</strong><br />
                Service de prière<br />
                9:00 PM - Minuit
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span>83 haxby pvt K1T 3C1<br />Ottawa, Canada</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:3435407075" className="hover:text-primary transition-colors">
                  343-540-7075
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:eglisededieu_maisondelumiere@aol.com" className="hover:text-primary transition-colors break-all">
                  eglisededieu_maisondelumiere@aol.com
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/profile.php?id=61585361853207"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@MINISTÈREMAISONDELUMIÈRE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Rejoignez notre communauté en ligne et restez informé de nos activités.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ministère Maison de Lumière. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
