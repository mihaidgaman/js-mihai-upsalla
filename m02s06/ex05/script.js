const { writeFileSync, readFileSync } = require('fs');

const originalText = readFileSync('my-file.txt', 'utf-8');
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();

const finalText = `${originalText}, azi, ${formattedDate}!`;

writeFileSync('output.txt', finalText);

console.log('Am scris textul si in "output.txt".');
