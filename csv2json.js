const fs = require('fs');
const parse = require('csv-parse');

const input = fs.readFileSync('input.csv');


parse(input, {
    comment: '#'
}, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        fs.writeFileSync('output.csv', data.map(row => ({
            name: row[0] // name your fields
        })))
    }
});