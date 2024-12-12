const fs = require('fs');
const util = require('util');
/**
 * On veut faire async/await avec fs.readFile -> util.promisfy
 */
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class MessagesController {
    constructor(data) {
        this.dataFile = `./data/${data}.json`;
    }

    async loadFile() {
        const data =  await readFile(this.dataFile, 'utf-8');
        return JSON.parse([data]);
    }

    async getMessage() {
        const data = await this.loadFile();
        return data.map((message) => (
            { id: message.id, title: message.title, message: message.message, author: message.author }));
    }

    async addMessage(id, title, message, author){
        const data = (await this.loadFile()) || [];
        data.unshift({ id, title, message, author});

        return writeFile(this.dataFile, JSON.stringify(data));
    }

};

module.exports = MessagesController;