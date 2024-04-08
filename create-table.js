import { sql } from './db.js'

/*sql`DROP TABLE IF EXISTS videos;`.then(() => {
    console.log('Tabela deletada!')
})*/

sql`
    CREATE TABLE videos (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Tabela criada!')
})
