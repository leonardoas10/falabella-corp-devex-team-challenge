# Falabella Corp DevEx Team Challenge

#### Implementation Details

# How to Run App

-   Install [ Docker Engine ](https://docs.docker.com/engine/install/) :fire:

#### 1. Generate Seed for Mongo using Giphy Data

-   Go to `cd mongo-seed`, in file `make-gifs-seed` fill variable `apiKey` (Giphy API Key)
-   Execute `node make-gifs-seed` it generate a file called `gifs-seed.js`
-   Copy the content of `gifs-seed.js`, then in the file `init.js` paste it in variable `gifs`

#### 2. Build the enviroment

-   Build image `docker-compose build`
-   Run container `docker-compose up -d`

# How to Test 🧪

### Start reading code, interpreting functionalities and programming :smile:
