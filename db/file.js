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

            try{
                parsedNotes = [].concat(JSON.parse(notes));
            }catch(err) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    }

    addNote(note) {
        const {header, text} = note;

        if (!header || !text) {
            throw new Error("Must fill in 'header' and 'text' ");
        }
            const newNote = {title, text, id: uuidv1() };

            return this.read.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) =>
            this.write(updatedNotes))
            .then(() => newNote);

    }

    removeNote(id) {

    }
}

module.exports = new file();





















module.exports = new Store();