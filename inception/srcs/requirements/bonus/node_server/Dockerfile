# Utiliser Debian comme image de base
FROM debian:bullseye

# Installer les dépendances nécessaires, y compris Node.js et npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Créer un répertoire pour l'application
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json (si présents)
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

RUN npm install express

# Copier tout le reste des fichiers dans le conteneur
COPY . .

# Exposer le port sur lequel ton serveur va écouter
EXPOSE 1337

# Démarrer l'application
CMD [ "node", "server.js" ]
