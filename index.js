const dic = require("./dictionary.json");
/*
const include = [];
const execlude = [];

const letterPosition ={
    0:'',
    1:'',
    2:'',
    3:'',
    4:''
}

const validLetterInvalidPosition = {
    0:[],
    1:[],
    2:[],
    3:[],
    4:[]
}
*/
const include = [];
const execlude = [];

const letterPosition ={
    0:'',
    1:'',
    2:'',
    3:'',
    4:''
}

const validLetterInvalidPosition = {
    0:[],
    1:[],
    2:[],
    3:[],
    4:[]
}
const extractWords = new RegExp(/(\w+)/gm)
const sentenceToWords = (i)=> i.match(extractWords)
const setLowerCase = (i)=>i?.toLowerCase()


const hasCorrectLength = (i) => i.length === 5;
const includeAll = (w) => include.every((ai) => w.includes(ai));
const excludeAll = (w) => execlude.every((ai) => !w.includes(ai));
const hasLetterPosition = (w) =>
  Object.keys(letterPosition).every(
    (i) => letterPosition[i] === w[i] || !letterPosition[i]
  );
const hasValidLetterInvalidPosition = (w) =>
  Object.keys(validLetterInvalidPosition).every(
    (i) =>
      !validLetterInvalidPosition[i].includes(w[i]) ||
      !validLetterInvalidPosition[i].length
  );

const wordsSource = Array.from(new Set([
    ...Object.keys(dic)?.flat()?.map(setLowerCase),
    ...Object.values(dic)?.map(sentenceToWords)?.flat()?.map(setLowerCase) // to exclude values, comment this line and replace with []
    ]))

const outputWords = wordsSource
  ?.filter(i=> typeof i === 'string')
  ?.filter(hasCorrectLength)
  ?.filter(includeAll)
  ?.filter(excludeAll)
  ?.filter(hasLetterPosition)
  ?.filter(hasValidLetterInvalidPosition);

console.clear();
console.log('')
console.log('output',outputWords);
console.log(
  "................................................................................"
);