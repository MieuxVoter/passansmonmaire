# Pas Son Mon Maire

[![MIT](https://img.shields.io/github/license/MieuxVoter/passonmonmaire)](./LICENSE.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/021c39c6-1018-4e3f-98e2-f808b4ea8f6d/deploy-status)](https://app.netlify.com/sites/epic-nightingale-99f910/deploys)
[![Join the Discord chat at https://discord.gg/rAAQG9S](https://img.shields.io/discord/705322981102190593.svg)](https://discord.gg/rAAQG9S)


:muscle: Ceci est une plateforme de mobilisation pour choisir démocratiquement les parrainages de nos élu·es.

:incoming_envelope: La plateforme envoie une lettre signée par un citoyen habitant à l'un de ses représentants.


## :gear: Installation

1. Clone this repo: `git clone https://github.com/MieuxVoter/passonmonmaire.git`
2. Navigate to the directory and install dependencies: `npm install` or `make`
3. Start a local server: `npm run dev`  and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
4. Make your changes
5. Deploy your project.

We advise for deploying the project to [Netlify](https://netlify.com), because we wrote the mail functions for the framework. Netlify parameters are written in `netlify.toml`.

If you decide to deploy your project in another way, please fill a pull-request to guide futur users!

## :incoming_envelope: Connexion aux services tiers

Nous utilisons :

- Stripe pour le payement ;
- Eversign pour la signature électronique ;
- ClickSend pour l'envoi d'un courrier postal ;
- Netlify pour l'hébergement du serveur (CDN et connexions aux services tiers).

Vous pouvez éditer les variables d'environnement dans le fichier `.env` ou directement sur [Netlify](https://docs.netlify.com/configure-builds/environment-variables/).

