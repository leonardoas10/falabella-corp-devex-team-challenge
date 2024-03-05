const fs = require('fs');

async function fetchDataFromGiphy() {
    const apiKey = 'brKAj1aRzMhKSeiJrh3fvZnoq8ti3IcR';
    const limit = 10;
    const offset = 0;
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

async function saveDataToFile() {
    const gifs = await fetchDataFromGiphy();
    const jsFileContent = `${JSON.stringify(gifs)}`;
    fs.writeFileSync('gifs-seed.js', jsFileContent);
}

saveDataToFile().catch(console.error);
