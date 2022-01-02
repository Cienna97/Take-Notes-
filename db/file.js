import util from 'util';
const fs = require('fs');


const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = ulti.promisify(fs.writeFile);


class file {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }

    write(note) {
        return writeFileAsync('db/db.json',
        JSON.stringify(note));
    }

    getNotes(){
        return this.read().then((notes) =>{
            let parsedNotes;
        })
    }
}























module.exports = new Store();