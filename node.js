const validator = require('validator')
const chalk = require('chalk')
const fs = require('fs')
const check = require('./index')
const command = process.argv[2]
const yargs = require('yargs')
const square = require('./playGround')
const weather = require('./weather')
check();
fs.writeFileSync('notes.text', 'I live in lagos State');
console.log("Hello,How are you doing, this is just a test")
console.log(validator.isURL('https/mead.io')) // print: true
console.log(chalk.blueBright('Hello World'));
console.log(chalk.blue('Hello') + ' World' + chalk.red(' !'));
console.log(chalk.blue.bgRed.bold("Hello World!"));

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note')
}


yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title', +argv.title)
        console.log('Body', +argv.body)
    }
})

console.log(yargs.argv)

// working with JSON

const book = {
    title: "Ego is the Enemy",
    aurthor: 'Ryan holiday'
}
const bookJson = JSON.stringify(book)
console.log(bookJson)

const bookObject = JSON.parse(bookJson)
console.log(bookObject.title)
console.log(bookObject.aurthor);


// ES6 Arrow Fuction