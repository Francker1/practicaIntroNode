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

Devuelve un json con anuncios guardados en la database

ejemplo de respuesta:
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
        "__v": 0
    },
    {
        "tags": [
        "lifestyle",
        "motor",
        "work"
        ],
        "_id": "5e790e329f2ef94384e90c74",
        "name": "Vendo papel higiénico",
        "type": "buy",
        "price": 215,
        "photo": "mipapel.jpg",
        "__v": 0
    }
]


### Get Advertisement by ID

GET /apiv1/ads/:id

Devuelve un json con un anuncio filtrado por ID de anuncio. 

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