---
title: "Documentación de las funcionalidades y métodos backend"
date: 2022-06-19 11:52
categories:
  - Documentación
tags:
  - Routes
  - Controllers
  - Services
  - Websocket
  - JWT
  - Token
---

# Documentación de las funcionalidades y métodos backend

Para la creación del backend se útilizo el entorno de ejecución de javascript, [Node.js](https://nodejs.org/en/).

Como repositorio se utilizó [GitHub](https://github.com/KevinMCruzP).

Y para el versionado se utilizó [Git](https://git-scm.com/).

Para más información de las librerías utilizadas se puede consultar en el archivo package.json.

## Empezando

Primero, clonas el repositório de GitHub:

Ejemplo utilizando SSH:

    git clone git@github.com:The-noobs-programmers/dux_vitae_backend.git

Ahora debes de entrar al directorio del proyecto y bajar las dependencias que se encuentran en el archivo package.json:

    yarn
    o
    npm install

Para ejecutar el backend se debe de ejecutar el comando:

    yarn dev
    o
    npm run dev

### Funcionalidades de forma general:

- En el archivo server.ts se encuentra la puerta a la que se conecta el backend utilizando httpServer.listen() la cual tiene propiedades de express adquiridas en el archivo http.ts

- En el archivo http.ts se encuentra la configuración de la puerta a la que se conecta el backend utilizando el método createServer() de la librería http y también se instancía el io de socket.io para que se pueda utilizar el websocket, y conectarse a la misma puerta que el servidor.

- En el archivo websocket.ts se encuentra los métodos que se encargan de recibir los mensajes del websocket de frontend y enviar los mensajes a todos los clientes conectados en una room específica.

- En el archivo routes.ts se encuentra la configuración de las rutas que se utilizan en el backend, para la comunicación entre el frontend y el backend.

- En la carpeta controllers se encuentran los archivos que se encargan de manejar las peticiones de los usuarios, como las reglas de negocio, las validaciones de los datos, las respuestas, etc.

- En la carpeta services se encuentran los archivos que se encargan de la comunicación entre el backend y base de datos.

- En la carpeta middlewares se encuentran los archivos que se encargan de la validación de los datos, autenticación, control de errores, etc.

- En la carpeta prisma dentro de src se encuentra un archivo que contiene el objeto prismaClient que se utiliza para realizar las sentencias SQL en la base de datos, la cual se utiliza en los archivos de services.

- En la carpeta prisma fuera de la carpeta src, se encuentra archivos que contienen la configuración de la base de datos, utilizando el orm de prisma, se configura la base de datos a utilizar, las tablas, migrations, esquemas, etc.

  | HERRAMIENTA | APLICAR                                                                       |
  | :---------- | :---------------------------------------------------------------------------- |
  | Express     | Infraestructura de app web Node.js, con métodos de utilidad HTTP y middleware |
  | Prisma      | ORM de la base de datos                                                       |
  | Typescript  | Superconjunto de JS para tipar el código                                      |
  | Auth JWT    | Autentificación con json web tokens                                           |
  | Jwt-decode  | Decodificar un token                                                          |
  | SQLite      | Archivo de base de datos                                                      |
  | Cors        | Intercambio de recursos de origen cruzado                                     |
  | Socket.io   | Comunicación bidireccional y de baja latencia para cada plataforma            |
  | Uuid        | Identificadores únicos universales                                            |

### Funcionalidades de forma específica:

### Flujo de la aplicación
