#La imagen que vamos a usar
FROM node:22-alpine

# Puerto que vamos a usar
ENV PORT=4000

#Nos dice en que carpeta vamos a trabajar
WORKDIR /usr/src/app

# Instalacion de dependencias
# Que vamos a copiar para que funcione
COPY package.json /usr/src/app/

#Donde vamos a correr nuestras depedencias 
RUN npm install

# Donde vamos a correr nuestra aplicacion
COPY server.js /usr/src/app

# Especifica el puerto que va a usar el contenedor
EXPOSE $PORT
CMD [ "npm", "start" ]
