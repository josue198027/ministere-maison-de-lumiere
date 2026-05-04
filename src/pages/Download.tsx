import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Télécharger le site pour Netlify</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg mb-4">
              Cliquez sur le bouton ci-dessous pour télécharger le fichier ZIP contenant tous les fichiers nécessaires pour déployer sur Netlify.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="/netlify_deploy.zip" download="netlify_deploy.zip">
                <Download className="w-5 h-5 mr-2" />
                Télécharger netlify_deploy.zip (4.2 MB)
              </a>
            </Button>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">📋 Instructions après téléchargement :</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Décompressez le fichier ZIP sur votre ordinateur</li>
              <li>Allez sur <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://app.netlify.com/drop</a></li>
              <li>Glissez-déposez le dossier décompressé dans la zone Netlify</li>
              <li>Attendez que le déploiement se termine (30 secondes)</li>
              <li>Configurez votre domaine personnalisé dans les paramètres Netlify</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note :</strong> Le fichier ZIP contient tous les fichiers nécessaires incluant le fichier <code>_redirects</code> pour que votre site fonctionne correctement sur Netlify.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DownloadPage;
