# Requirements

Es importante tener instalados de forma *global* los siguientes paquetes npm:

- Get a full fake REST API: `json-server`
- Servidor web para servidor archivos: `serve`

Para servir los archivos podemos usar Apache o cualquier otro servidor web, pero uso *serve* por su sencillez de uso. Es necesario un servidor web, por el tema de *serve*.

# Run the project

Para lanzar el proyecto es necesario ejecutar los siguientes comandos.

1. Para lanzar json-server: `json-server --watch ./src/persistence/db.json`
2. Para lanzar un servidor y que podamos observarlo desde el navegador: `serve -l <PORT>` dentro de la carpeta `./src/static`

Para acceder al proyecto, basta con acceder a la siguiente URL: `localhost:<PORT>`