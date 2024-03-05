db = new Mongo().getDB('falabella-corp');

db.createCollection('gifs', { capped: false });

/** Create a variable called gifs with the content copy from gifs.json;
 *
 * const gifs = <the data>
 */

// Insert the data into the database
db.gifs.insertMany(gifs);
