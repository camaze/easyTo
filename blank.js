// a = ['a', 'b', 'c']

// a.forEach(function (x, y) {

//         console.log('value', x)

//         console.log('key', y)

//         console.log('typekey', typeof y)

//     }

// )

obj = {
    0: 'a',
    1: 'b',
    length: 2
}
console.log(obj.length)

obj.xxx = 'aaa'
console.log(obj)
console.log(obj.length)

for (let key in obj) {
    console.log('key', key)
    console.log('keytype', typeof key)
}