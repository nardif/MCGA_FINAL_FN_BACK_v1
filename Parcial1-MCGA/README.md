# BACKEND MCGA 2022

### Desarrollo

Para el desarrollo del parcial se utilizaron distintas tecnologias JavaScript, Node y MongoDB, tambien:
1. Express: para levantar el servidor.
2. Dotenv: para las variables de entorno.
3. Mongoose: para lograr la persistencia de datos en MongoDb y poder crear los schemas correspondientes.
4. Nodemon: para levantar el server cada vez que realizo un cambio.

### Estructura

Esta conformado por distintas carpetas:

#### data
Contiente productos.json que son datos mockeados

#### src
Contiene el index que levanta el server y conecta con la DB y las demas carpetas


#### controllers
Contiene product.js con toda la logica y los metodos GET, POST, PUT y DELETE.

#### routes
Contiene un index.js y products.js para establecer las rutas y relacionar los archivos.
ping.js realiza un ping al server para verificar la conexión

### Otros archivos
.env para guardar las variables de entorno (no esta visible porque se encunetra ignora por gitignore)
.env.example aqui si estan visibles las variables de entorno
.gitignore es para guardar aquello que no queremos subir a git (node_modules, .env)
Carpeta node_modules, esta se crea automaticamente al instalar node en el proyecto.

### Finalidad

El objetivo del parcial es crear un server, y conectarlo a la base de datos donde tendremos que crear un esquema de mongoose para los productos el cual tenga las siguientes propiedades. Cada una debe contar con al menos la validación de tipo de dato:
- id
- name
- price
- stock
- description

Crear 6 endpoints respetando los métodos HTTP para manejar el CRUD:
- GET: para hacer ping al servidor y que devuelva 'OK' en caso que el server y la BD estén levantadas
- GET: para conseguir la lista entera de productos
- GET: para conseguir un producto por name O id
- POST: para agregar un producto a la BD
- DELETE: para eliminar un producto
- PUT: para editar algún campo de un producto
