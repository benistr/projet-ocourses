# Research link & Resources

## SQL or NoSQL Choice

### Sequelize
- https://sequelize.org/master/index.html
- https://numa-bord.com/miniblog/nodejs-exemples-dutilisation-avec-lorm-sequelize/


### MERN
- https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
- https://github.com/Hashnode/mern-starter
- https://expressjs.com/fr/

- Procédure pour attribuer mon nom de domaine à l'adresse ip de mon serveur :
- Se connecter sur l'interface de https://v4.gandi.net
- Se rendre dans Domaines puis sélectionner Zones DNS
- Choisir la Default Gandi zone files
- Cliquer sur 'Dupliquer cette zone' et lui donner un nom
- Dans ce fichier de zone nouvellement créé, créer une nouvelle version
- Activer une autre version si celle-ci l'est déjà afin de pouvoir la modifier
- Cliquer sur le crayon pour modifier la ligne contenant l'enregistrement 'A'
- Laisser la TTL et le name @ par defaut, et indiquer en Valeur l'adresse IP publique de son serveur puis valider (que l'on retrouve dans les infos de l'instance de notre serveur sur AWS )
Si on veut que le site soit dispo en www aussi :
- supprimer l'enregistrement www qui peut être de type "A" ou "CNAME"
- Cliquer sur 'Ajout' en bas à droite
- le remplir comme suit :
```
  type: A
  name: www
  TTL: 3 hours
  value: adresse IP publique du serveur
```
- Valider
- Activer cette version
Puis pour lier notre domaine à cette zone DNS :
- Retourner dans 'Domaines' et sélectionner le domaine concerné
- En bas de la page, à droite, dans fichier de zone, sélectionner 'Changer'
v4.gandi.net
Domain name registrar and VPS cloud hosting - Gandi.net
GANDI is a domain name registrar and cloud hosting company. Free website, SSL certificate, blog, and e-mail included. VPS dedicated virtual servers, cloud hosting.
Gandi_zone.png 

- Et cliquer sur Choisir à droite pour sélectionner la zone DNS à laquelle lier notre nom de domaine et Valider