# First practice module Node.js

## Goal
Build an API for advertisment buy/sell

## Instructions:

### iniciar el proyecto:
Instalar paquetes de package.json

```shell
**npm install** or **npm i**
```

### install DB
Para inicializar la base de datos 

```shell
**npm run install:db**
```

## API Reference


### Advertisements list

GET /apiv1/ads

Devuelve un json con anuncios guardados en la database, primero está limitado a 15 resultados para no sobrecargar la petición

*filters:*

GET /apiv1/ads?name=**name**

Devuelve json con los resultados filtrados que contengan dicha cadena


GET /apiv1/ads?type=**type**

Devuelve json con los resultados filtrados dependiendo si son de venta o de compra. Parámetros de entrada: *sell* or *buy*


GET /apiv1/ads?tag=**tag**

Devuelve json con los resultados filtrados por etiqueta.


GET /apiv1/ads?limit=**limit**

Devuelve json con los resultados limitados por el parámetro: limit type number


GET /apiv1/ads?skip=**skip**

Devuelve json con los resultados paginados por el parámetro: skip type number. Muestra los resultados a partir del número del parámetro


GET /apiv1/ads?sort=**sort**

Devuelve json con los resultados ordenados por campo. Acepta dos campos en el mismo parámetro. Ejemplo: ?sort=price%20name


GET /apiv1/ads?fields=**field1** **field2** **field3**

Devuelve json con los resultados y especificando los campos a devolver. Por defecto se excluye el campo "__v"

**ejemplo de respuesta:**

[
    {
        "tags": [
        "lifestyle",
        "work"
        ],
        "_id": "5e790e329f2ef94384e90c73",
        "name": "Anuncio de prueba",
        "type": "sell",
        "price": 42,
        "photo": "mifoto.jpg",
    },
    {
        "tags": [
        "lifestyle",
        "motor",
        "work"
        ],
        "_id": "5e790e329f2ef94384e90c74",
        "name": "Vendo otra cosa",
        "type": "buy",
        "price": 215,
        "photo": "miventa.jpg",
    }
]

Result ok status: 200


### Get Advertisement by ID

GET /apiv1/ads/:id

Devuelve un json con un anuncio filtrado por ID de anuncio. 

Result ok status: 200

En caso de error, devolverá status 404 y mensaje de error:

{
"error": "Ad Not found"
}


### Create Advertisement

POST /apiv1/ads/

Crea un anuncio con el siguiente modelo de datos

{
    name: String,
    type: String,
    price: Number,
    photo: String,
    tags: [String],
    created: Date,
}

Result ok status: 201

### Update Advertisement by ID

PUT /apiv1/ads/:id

Actualiza un anuncio buscado por ID con el siguiente modelo de datos

{
    name: String,
    type: String,
    price: Number,
    photo: String,
    tags: [String],
    created: Date,
}

Result ok status: 200


### Delete Advertisement by ID

DELETE /apiv1/ads/:id

Elimina un anuncio buscado por ID en la base de datos

Result ok status: 200
