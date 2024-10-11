# Tabla de Multiplicar en PDF

Este proyecto genera tablas de multiplicar en formato PDF según los parámetros proporcionados por el usuario. Las tablas se guardan en una carpeta llamada `salida`.

## Opciones

```bash
--base=<número> --hasta=<número> --listar

--help, -h:
Descripción: Muestra la ayuda y las opciones disponibles de la aplicación.
Tipo: Booleano
Valor por defecto: false

--version, -v:
Descripción: Muestra el número de versión de la aplicación.
Tipo: Booleano
Valor por defecto: false

--base, -b:
Descripción: Especifica la base de la tabla de multiplicar. Este número será utilizado para generar la tabla.
Tipo: Número
Requerido: true

--listar, -l:
Descripción: Si se especifica, la tabla se mostrará en la consola.
Tipo: Booleano
Valor por defecto: false

--hasta, -h:
Descripción: Define hasta qué número se generará la tabla de multiplicar.
Tipo: Número
Valor por defecto: 10


