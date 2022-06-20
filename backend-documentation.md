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

# **Documentación de las funcionalidades y métodos del backend**

## **Empezando**

Primero, clonas el repositório de GitHub

Ejemplo utilizando SSH:

```
    git clone git@github.com:The-noobs-programmers/dux_vitae_backend.git
```

Ahora debes de entrar al directorio del proyecto y bajar las dependencias que se encuentran en el archivo package.json:

```
    yarn
    o
    npm install
```

Para ejecutar el backend se debe de ejecutar el comando:

```
    yarn dev
    o
    npm run dev
```

Para ver las tablas de la base de datos se debe de ejecutar el comando:

```
    npx prisma studio
```

Para ver más funcionalidades de prisma se puede visitar la siguiente página: [https://www.prisma.io/docs/getting-started](https://www.prisma.io/docs/getting-started)

## **Flujo de la aplicación**

![flujoApp](https://user-images.githubusercontent.com/72741197/174669547-7e717bf3-cdbd-4d56-bee8-996f03414702.png)

## **Funcionalidades de forma general:**

- En el archivo server.ts se encuentra la puerta a la que se conecta el backend utilizando httpServer.listen() la cual tiene propiedades de express adquiridas en el archivo http.ts

- En el archivo http.ts se encuentra la configuración de la puerta a la que se conecta el backend utilizando el método createServer() de la librería http y también se instancía el io de socket.io para que se pueda utilizar el websocket, y conectarse a la misma puerta que el servidor.

- En el archivo websocket.ts se encuentra los métodos que se encargan de recibir los mensajes del websocket de frontend y enviar los mensajes a todos los clientes conectados en una room específica.

- En el archivo routes.ts se encuentra la configuración de las rutas que se utilizan en el backend, para la comunicación entre el frontend y el backend.

- En la carpeta controllers se encuentran los archivos que se encargan de manejar las peticiones de los usuarios, como las reglas de negocio, las validaciones de los datos, las respuestas, etc.

- En la carpeta services se encuentran los archivos que se encargan de la comunicación entre el backend y base de datos.

- En la carpeta middlewares se encuentran los archivos que se encargan de la validación de los datos, autenticación, control de errores, etc.

- En la carpeta prisma dentro de src se encuentra un archivo que contiene el objeto prismaClient que se utiliza para realizar las sentencias SQL en la base de datos, la cual se utiliza en los archivos de services.

- En la carpeta prisma fuera de la carpeta src, se encuentra archivos que contienen la configuración de la base de datos, utilizando el orm de prisma, se configura la base de datos a utilizar, las tablas, migrations, esquemas, etc.

## **Herramientas**

Para la creación del backend se útilizo el entorno de ejecución de javascript, [Node.js](https://nodejs.org/en/).

Como repositorio se utilizó [GitHub](https://github.com/KevinMCruzP).

Y para el versionado se utilizó [Git](https://git-scm.com/).

Para más información de las librerías utilizadas se puede consultar en el archivo package.json.

| HERRAMIENTAS                                                                 | APLICAR                                                                       |
| :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| [Express](https://expressjs.com/es/)                                         | Infraestructura de app web Node.js, con métodos de utilidad HTTP y middleware |
| [Prisma](https://www.prisma.io/docs/getting-started)                         | ORM de la base de datos                                                       |
| [Typescript](https://www.typescriptlang.org/docs/)                           | Superconjunto de JS para tipar el código                                      |
| [JWT](https://jwt.io/)                                                       | Autentificación con json web tokens                                           |
| [SQLite](https://www.prisma.io/docs/concepts/database-connectors/sqlite)     | Archivo de base de datos                                                      |
| [Cors](https://expressjs.com/en/resources/middleware/cors.html#installation) | Intercambio de recursos de origen cruzado                                     |
| [Socket.io](https://socket.io/docs/v4/)                                      | Comunicación bidireccional y de baja latencia para cada plataforma            |
| [Uuid](https://www.npmjs.com/package/uuid)                                   | Identificadores únicos universales                                            |

## **Rutas**

| URL                       | Método | Descripción                                              |
| :------------------------ | :----- | :------------------------------------------------------- |
| Ruta Clientes             |
| /clients                  | POST   | Ruta para crear un nuevo cliente                         |
| /clients                  | GET    | Ruta para buscar una lista de clientes                   |
| /clients/:rut             | PUT    | Ruta para actualizar los datos de un cliente             |
| /clients/:rut             | DELETE | Ruta para eliminar un cliente                            |
| /clients/:rut             | GET    | Ruta para buscar un cliente                              |
| Ruta Nutricionistas       |
| /nutritionists            | POST   | Ruta para crear un nuevo nutricionista                   |
| /nutritionists            | GET    | Ruta para buscar una lista de nutricionistas             |
| /nutritionists/:rut       | PUT    | Ruta para actualizar los datos de un nutricionista       |
| /nutritionists/:rut       | DELETE | Ruta para eliminar un nutricionista                      |
| /nutritionists/:rut       | GET    | Ruta para buscar un nutricionista                        |
| Ruta de Citas             |
| /appointments             | POST   | Ruta para crear una cita                                 |
| /appointments/:rut        | GET    | Ruta para buscar una lista de citas                      |
| /appointments/:id         | PUT    | Ruta para actualizar los datos de una cita               |
| /appointments/:id         | DELETE | Ruta para eliminar una cita                              |
| Ruta de Chat              |
| /chat/:room               | GET    | Ruta para buscar un chat                                 |
| Ruta de login             |
| /sessions                 | POST   | Ruta para hacer login                                    |
| Refrescar Token           |
| /refresh                  | POST   | Ruta para refrescar tokens expirados                     |
| Mostrar datos del usuario |
| /me                       | GET    | Ruta para validar Token y devolver los datos del usuario |

## **Proximas caracteristicas**

- MySQL (Base de datos)
- Nodemailer (Envio de correos)
- Jets (Test unitarios)
