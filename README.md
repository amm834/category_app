# Setup Guide

## Server

```
# server 
cd server 
npm install
nodemon app.js 
```

Server will serve at   `localhost:3000`

## Client

```
# client
cd client 
npm install
npm run dev 
```

Client will serve at `localhost:5127`

Ensure, you already opened `mongodb`.

# Data Seeding

Uncomment

```
 seedCategory() from app.js file
```

and then re run `nodemon app.js`

and check data inside your mongodb client.

And comment above function again.

# API Endpoints

`/api/categoires`  = List of categories data