# Falabella Corp DevEx Team Challenge

#### Implementation Details

# Run the app

-   Install [ Docker Engine ](https://docs.docker.com/engine/install/) :fire:

#### 1. Generate Seed for MongoDB using Giphy Data

-   Go to `cd mongo-seed` folder, for file `make-gifs-seed` fill variable `apiKey` (Giphy API Key).
-   Execute `node make-gifs-seed` it generate a file called `gifs-seed.js`.
-   Copy all the content (`Ctrl + A and Ctrl + C`) of `gifs-seed.js`.
-   In file file `init.js` paste it in variable `gifs`.

#### 2. Build the enviroment

-   Build image `docker-compose build`.
-   Run container `docker-compose up -d`.

# How to test it? - Using Jest 🧪

-   Go to `cd nestjs-app` folder.
-   `npm install`.
-   `npm run jest`, it gonna execute the basic unit test.

### Start reading code, interpreting functionalities and programming :smile:
