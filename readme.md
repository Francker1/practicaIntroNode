# First practice module Node.js KeepCoding

## Goal
Build an API for advertisment buy/sell and create system filter in mongo DB. It is not the object of this practice to create a front with React.JS, but to practice, I have decided to include it.

<br>

# INSTRUCTIONS:

## 1. Start the API:
Go to the API root at keepads/ and install packages from package.json:

```shell
cd keepads
npm install
```

### install DB
To initialize the database once and have ads the first time

```shell
cd keepads
npm run install:db
```

### start API
To start API system

```shell
cd keepads
npm run dev
```

In your browser go to http://localhost:9000/apiv1/ads and see json with advertisements

<br>

## 2. Create React app
Go to the client root at client/ and install packages from package.json:

```shell
cd client
npm install
```

### start client
To start client frontend

```shell
cd client
npm start
```

In your browser go to http://localhost:3000/ and see cards with advertisements and very very simple filter system


# API Reference


### Advertisements list

GET /apiv1/ads

Returns a json with ads saved in the database, first it is limited to 150 results so as not to overload the request.

<br>

*filters:*

GET /apiv1/ads?name=**name**

Returns json with filtered results containing that string.

<br>

GET /apiv1/ads?type=**type**

Returns json with the results filtered depending on whether they are for sale or purchase. Input parameters: **sell** or **buy**.
To make it semantically clearer and thinking about the frontend, I have chosen that the parameters be these and not true or false.


<br>

GET /apiv1/ads?tag=**tag**

Returns json with the results filtered by tag.

<br>

GET /apiv1/ads?limit=**limit**

Returns json with the results limited by the parameter: limit type number.

<br>

GET /apiv1/ads?skip=**skip**

Returns json with the results paged by the parameter: *skip* type number. Show results from parameter number.

<br>

GET /apiv1/ads?sort=**sort**

Returns json with the results sorted by field. Accept two fields in the same parameter.<br>
Example: ?sort=price%20name

<br>

GET /apiv1/ads?fields=**field1** **field2** **field3**

Returns json with the results and specifying the fields to return. By default the field is excluded "__v"

<br><br>

**json answer example:**

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

<br>

### Get Advertisement by ID

GET /apiv1/ads/:id

Returns a json with an ad filtered by advertisement ID. 

Result ok status: 200

In case of error it will return status 404 and error message:

{
"error": "Ad Not found"
}

<br>

### Create Advertisement

POST /apiv1/ads/

Create an advertisement with the following data model. On the other hand, the *tags* are limited to 4 specifically, if not, it returns an error.
<br>
For the photo, I have uploaded 5 test images and you only need to add the file name and its extension
<br>

Data model:

{
    name: String,
    type: String,
    price: Number,
    photo: String,
    tags: [String],
}

<br>

Result ok status: 201

<br>

### Update Advertisement by ID

PUT /apiv1/ads/:id

Update an advertisement searched by ID with the following data model.

{
    name: String,
    type: String,
    price: Number,
    photo: String,
    tags: [String],
}

<br>

Result ok status: 200

<br>

### Delete Advertisement by ID

DELETE /apiv1/ads/:id

Delete an ad searched by ID in the database.

Result ok status: 200

<br>

### Examples URL

http://localhost:3000/apiv1/ads?name=bici <br>
http://localhost:3000/apiv1/ads?sort=price&tag=lifestyle&skip=1&limit=3 <br>
http://localhost:3000/apiv1/ads?price=25-150&sort=price

<br>

## Get list of tags

GET /apiv1/tags

Returns a list in json format with the possible tags created.

{
    "tags": [
        "lifestyle",
        "work",
        "motor",
        "mobile"
    ]
}

<br>

## ESLINT:

I have included EsLint only for the API folder. If you want to eslint check the **.eslintrc.json** rules, you can do the following code: 

```shell
cd keepads
npm run lint
```

This will show in the *shell* the places in the code that should be fixed depending on the **.eslintrc.json** rules. **To test it I have left the API index.js file unresolved**

<br>

For init a new **.eslintrc.json** in the project:

```shell
cd keepads
npm run init:lint
```

To automatically fix files according to **.eslintrc.json** rules:

```shell
cd keepads
npm run fix:lint
```

<br>

## SWAGGER:

To see API documentation in path using Swagger Openapi documentation, go to http://localhost:9000/api-docs/ and enjoy!