# autor
leonardo pernett jimenez

# implementacion
se utilizo nodejs y el framework express para crear el servidor

# codigo
utilizacion de typescript en el projecto 

# modulos npm
express, morgan , pg de postgres , pg-hstore , sequelize ORM

# comandos
npm install para instalar los modulos 
npm run build crear la carpeta dist donde el esta el projecto final en producccion
npm  start para ejecutar el programa que abre un servidor localhost:4000

# api
en la ruta  http://localhost:4000/api/pedidos se encuentra el listado de pedidos viende siendo la RESAPI
en la ruta http://localhost:4000/api/pedidos/tareas se encuentra el listado de tareas por realizar

# base de datos
#postgres se utilizo

# extructura del projecto
#en la carpera src hay un arhivo index.js donde ejecuta el servidor 
#el archivo app.js esta la configuracion de rutas, middleware, archivos estaticos, configuracion de express
#hay una carpeta routes donde esta la rutas index y pedidos
#los metodos que ejecutan la logicas estan en una carpeta llamada controller 
#carpeta views esta la interface grafica el html 
#la carpeta publica es donde se almacena los archivo estaticos como js y css 

# RESAPI
#implementacion de Vuejs para consumir la APi con Axios 

