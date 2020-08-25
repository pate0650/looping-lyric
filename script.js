console.log('First Story')
console.log('Old MACDONALD had a farm')

// First Story //

// make a const with pural to use for of loop 
const animals = [
  { name: "cow", sound: "moo" },
  { name: "pig", sound: "oink" },
  { name: "duck", sound: "qauck" }
]


// used for of loop to make it simple

for (animal of animals) {
  console.log(`OLD MCDONALD had a farm`)
  console.log(`E-I-E-I-O`)
  console.log(`And on his farm he had a ${animal.name}`)
  console.log(`E-I-E-I-O`)
  console.log(`With a ${animal.sound} ${animal.sound} here`)
  console.log(`And a ${animal.sound}`)
  console.log(`Here a ${animal.sound}, there a ${animal.sound}`)
  console.log(`Everywhere a ${animal.sound} ${animal.sound}`)
  console.log(`Old MacDonald had a farm`)
  console.log(`E-I-E-I-O`)
}

console.log(`\n`)
// Second Story

console.log('Second Story')

console.log('B-I-N-G-O')

const bingo = ['B', 'I', 'N', 'G', 'O']


console.log('There was a farmer who had a dog,')
console.log(`and Bingo was his name-o.`)

for (let i = 0; i < 3; i++) {

  console.log(bingo.join('-'));

}
console.log(`And Bingo was his name-o.`)

for (let i = 0; i < 5; i++) {
  console.log(`There was a farmer who had a dog,`)
  console.log(`and Bingo was his name-o.`)
  bingo.splice(i, 1, ('clap'))
  for (let j = 0; j < 3; j++) {
    console.log(bingo.join('-'))
  }
  console.log('And Bingo was his name-o.')
}

console.log(` \n`)


// Third story

// 

for (let i = 5; i > 0; i--) {

  console.log(`${i} little ducks went out one day`)
  console.log(`Over the hills and far away`)
  console.log(`Mother duck said “Quack, quack, quack, quack”`)

  if (i == 1) {
    console.log('But none of the five little ducks came back ')

  }

  else if ((i - 1) == 1) {
    console.log(`But only ${i - 1} little duck came back`)
    console.log(`\n`)
  }
  else {
    console.log(`But only ${i - 1} little ducks came back`)
    console.log(` \n`)
  }
}
console.log(`\n`)
console.log('Sad mother duck went out one day ....')
console.log('over the hills and far away')
console.log('mother duck said "Quack quack quack quack "')
console.log('And all the the five little duck came back ')

