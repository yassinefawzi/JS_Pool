const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const samePerson = person
const clone1 = {...person}, clone2 = {...person}
person.age++
person.country = 'FR'

console.log(clone1.age)