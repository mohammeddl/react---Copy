const moment = require('moment');
const simpleGit = require('simple-git');
const fs = require('fs');
const FILE_PATH = './data.js';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function mekeCommit(n) {
if(n===0) {
     //simpleGit().push();
     return
}
const x = getRandomInt(1, 54);
const y = getRandomInt(1, 12);
const DATE = moment().subtract(1, 'y').add(1, 'd').set('month', y).set('date', x).format();

fs.writeFileSync(FILE_PATH,DATE);
process.env.GIT_AUTHOR_DATE = DATE;
process.env.GIT_COMMITTER_DATE = DATE;
simpleGit().add([FILE_PATH]);
simpleGit().commit(DATE);


console.log(date);
return
  makeCommit(n-1);
}

makeCommit(10);