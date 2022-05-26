<!-- LOGO -->

<p allign="center">
  <img width="400" height="240" src='./assets/bookstore.jpg'>
</p>

<!-- INDICE -->
<details>
  <summary>Indice</summary>
  <ol>
    <li>
      <a href="#introduccion">Introducción</a>
      <ul>
        <li><a href="#hecho-con">Hecho con</a></li>
      </ul>
    </li>
    <li>
      <a href="#descripción-del-proyecto">Descripción del proyecto</a>
      <ul>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso-endpoints">Ejemplos de uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#conociemientos">Conocimiento</a></li>
  </ol>
</details>

<!-- SOBRE EL PROYECTO -->

## Introducción

En el proyecto de backend se combinará los conocimientos adquiridos en las
tecnologías node + express, además de mysql/sequelize.
El alumno tendrá que hacer la presentación y defensa de un diagrama
explicando las relaciones entre las tablas. El proyecto consistirá en una tienda online(e-commerce)

### Hecho con

Aquí presentamos las tecnologías empleadas en este proyecto:

- [Node.js](https://node.org/)
- [React.js](https://reactjs.org/)
- [sequelize](https://sequelize.org/)
- [Multer](https://github.com/expressjs/multer)
- [MySql](https://MySql.org/)
- [Postman](https://www.postman.com/)
- [JWT](https://jwt.io//)

<!-- DESCRIPCION -->

## Descripción del proyecto

Una vez analizadas las necesidades del proyecto, se espera
que el alumno desarrolle una API REST que sea capaz de lo siguiente:

- Registro de usuarios usando Bcrypt.
- Login de usuarios + token + middleware.
- Que sea capaz de crear un CRUD.
- Al menos una relación Many to Many y otra One to Many.
- Utilización de seeders

### Instalación

1. Para la instalación de la aplicación hay que clonarse el siguiente repositorio:

   ```sh
   git clone https://github.com/Santiremix/E-Commerce
   ```

2. Instalar las dependencias del proyecto:
   ```sh
   npm install
   ```

<!-- EJEMPLOS DE USO -->

## Uso Endpoints

Esta es una lista de los endpoints que puedes ejecutar en Postman:

| method | endpoint                       | role    | use                                   |
| ------ | ------------------------------ | ------- | ------------------------------------- |
| POST   | `/users/createUser`            | user    | Crear nuevo usuario                   |
| POST   | `/users/login`                 | user    | Login                                 |
| DELETE | `/users/logout`                | user    | Logout                                |
| GET    | `/users/UserOrder`             | user    | Pedidos por usuario                   |
| POST   | `/books/addBooks`              | manager | Añadir libros a base datos            |
| GET    | `/books/getBooks`              | user    | Recibe lista de libros                |
| DELETE | `/books/deleteBook/id/:id`     | manager | Borrar libro por id                   |
| GET    | `/books/id/:id`                | user    | Buscar libro por id                   |
| PUT    | `/books/:id`                   | admin   | Actualizar datos de un libro          |
| GET    | `/books/search/title/:title`   | user    | Buscar libros por título              |
| GET    | `/books/search/price/:price`   | user    | Buscar libros pro precio              |
| GET    | `/books/getBooksOrdered`       | user    | Recibe lista libros ordenado          |
| POST   | `/orders/createOrder`          | user    | Crear pedido                          |
| GET    | `/orders/getAll`               | user    | Recibe lista de pedidos               |
| POST   | `/genres/addGenre`             | manager | Añadir género                         |
| GET    | `/genres/getGenreById/:id`     | user    | usca género por id                    |
| GET    | `/genres/getGenreByName/:name` | user    | Busca género por nombre               |
| GET    | `/genres/getGenre`             | user    | Lista total de géneros con sus libros |
| GET    | `/genres/getAll`               | user    | Lista total de géneros                |
| DELETE | `/genres/deleteGenre/:id`      | manager | Borra un género por su id             |

<!-- ROADMAP -->

## Requerimientos obligatorios

- [x] Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.
- [x] Presentación de README excelente.

<!-- LICENCIA -->

## Licencia

Este programa es de código abierto y puede ser utilizado por cualquiera que lo desee.

<!-- CONTACTO -->

## Contacto

Santiago - [gitHub](https://github.com/Santiremix)

Jorge - [gitHub](https://github.com/yorch82)

<!-- CONCOCIMIENTOS -->

## Conocimientos

- [x] Uso de Node.js
- [x] Sequelize
- [x] Relaciones BBDD
- [x] Creación CRUD
- [x] Utilización Seeders
- [x] Modelo Vista Cliente (MVC)
- [x] Uso de ramas en Git
- [x] Gestor de paquetes NPM
