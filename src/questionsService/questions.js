const questionsArr = [
  {
    id: '1',
    question: 'hola in english is?',
    answers: ['bye', 'chau', 'hello'],
    correct: 'hello'
  }, 
  {
    id: '2',
    question: 'Character name from Mega Man X',
    answers: ['Mario', 'Zelda', 'Zero'],
    correct: 'zero'
  }, 
  {
    id: '3',
    question: 'Popular venezuelan dish',
    answers: ['arepas', 'lumpias', 'gnocchi'],
    correct: 'arepas'
  },
  {
    id: '4',
    question: 'Nintendo console?',
    answers: ['64', 'ps3', 'xbox'],
    correct: '64'
  },
  {
    id: '5',
    question: 'Buenos dias in german is?',
    answers: ['guten morgen', 'good evening', 'boa tarde'],
    correct: 'guten morgen'
  },
  {
    id: '6',
    question: 'A character from FFIX',
    answers: ['zidane', 'cloud', 'terra'],
    correct: 'zidane'
  },
  {
    id: '7',
    question: 'Yorkshire is the breed of a..',
    answers: ['dog', 'cat', 'bird'],
    correct: 'dog'
  },
  {
    id: '8',
    question: 'Song name from Metallica',
    answers: ['Nothing else matters', 'Somewhere i belong', 'Innervision'],
    correct: 'Nothing else matters'
  },
  {
    id: '9',
    question: 'Caracas is the capital city of',
    answers: ['Venezuela', 'Mexico', 'Panama'],
    correct: 'Venezuela'
  },
  {
    id: '10',
    question: 'What is the name of the main character of Metal Gear Solid',
    answers: ['Snake', 'Dante', 'Leon'],
    correct: 'Snake'
  },
  {
    id: '11',
    question: 'Who is the main character of Dorohedoro?',
    answers: ['Caiman', 'Jonas', 'Ichigo'],
    correct: 'Caiman'
  },
]

export default (n=3) => Promise.resolve(questionsArr.sort(() => 0.5 - Math.random()).slice(0, n));