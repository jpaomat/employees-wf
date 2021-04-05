# employees-wf
Este repositorio contiene el back en node.js/express y base de datos Mysql de la aplicaci{on de registro de empleados

## Instalación
***
A little intro about the installation.
```
$ git clone https://github.com/jpaomat/employees-wf.git
$ cd employees-wf
$ docker-composer build
$ docker-composer up
```

## Server

Run `docker-composer build` y `docker-composer up`, con estos comandos se generan las imagenes y los contenedores necesarios para ejecutar employees-wf  for a dev server.

## Base de datos MySQL

Una vez ejecutados los comandos anteriores, para abrir la base de datos es necesario navegar a `http://localhost:3000/`, el servidor para esta se configuro en el puesto 3000, luego para poder acceder se deben ingresar las credenciales: `user=admin, password=admin`. Lo anterior es necesario para poder crear manualmente las tablas, el script de estas se encuentra en la raiz de esta proyecto en database/db.sql.

## Restful API

Para comprobar el funcionamiento de el CRUD creado, puede acceder a las url `http://localhost:4000/employees`
