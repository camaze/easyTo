// a = ['a', 'b', 'c']

// a.forEach(function (x, y) {

//         console.log('value', x)

//         console.log('key', y)

//         console.log('typekey', typeof y)

//     }

// )

// obj = {
//     0: 'a',
//     1: 'b',
//     length: 2
// }
// console.log(obj.length)

// obj.xxx = 'aaa'
// console.log(obj)
// console.log(obj.length)

// for (let key in obj) {
//     console.log('key', key)
//     console.log('keytype', typeof key)
// }

// a = 'aa'
// b = 'bb'

// var c = b.concat('a')
// var c = b
// console.log(c)
// console.log(c === b)
// c = 5
// console.log(c)
// console.log(b)


// a = [1, 2]
// var b = a.concat([])
// console.log(b)
// console.log(a === b)

// const fileLines = [
//     'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton',
//     'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown',
//     'Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester',
//     'Inspector Gregory,Inspector Tobias Gregson,Inspector Hill',
//     'Inspector Stanley Hopkins,Inspector Athelney Jones'
// ];

// console.log(fileLines[0].split('\''))

// function splitLineReducer(acc, line) {
//     return acc.concat(line.split('\,'));
// }

// const investigators = fileLines.reduce(splitLineReducer, []);
// console.log(investigators);