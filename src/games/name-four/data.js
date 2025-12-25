// src/games/name-four/data.js

export const NAME_FOUR_PUZZLES = [
  {
    category: 'Things I Would Put In My Butt If I Had To',
    answers: [
      'Marshmallow',
      'M&Ms',
      'Bar of Soap',
      'Finger'
    ]
  },
  {
    category: "Madison's Food Combos",
    answers: [
      'ketchup and rice',
      'orange juice and popcorn',
      'weenies and toast',
      'jam and sausage'
    ]
  },
  {
    category: 'My Favorite SNL Cast Members',
    answers: [
      'Tim Robinson',
      'Fred Armisen',
      'Mike Myers',
      'Norm Macdonald'
    ]
  },
  {
    category: 'My Favorite 80s Rock Bands',
    answers: ['the smiths', 'talking heads', 'misfits', 'queen']
  },
  {
    category: 'Food Items That Give You The Worst Breath',
    answers: [
      'Garlic',
      'Onion',
      'Lemonade',
      'Candy'
    ]
  },
  {
    category: 'Best 90s Female Singers',
    answers: [
      'Bjork',
      'Fiona Apple',
      'Janet Jackson',
      'Lauryn Hill'
    ]
  },
  {
    category: 'Best Reality TV Shows',
    answers: [
      'Love Is Blind',
      'Love On The Spectrum',
      'Big Brother',
      'To Catch A Predator'
    ]
  },
  {
    category: 'Celebrities I Have Been Told I Look Like',
    answers: [
      'Josh Allen',
      'Markiplier',
      'Josheph Gordon-Levitt',
      'Mark Wahlberg'
    ]
  },
  {
    category: 'Show Hosts I Enjoy(ed)',
    answers: [
      'Conan O\'Brien',
      'Tom Bergeron',
      'Chris Harrison',
      'Steve Harvey'
    ]
  },
  {
    category: 'Childhood Videogames I Enjoyed',
    answers: [
      'Webkinz',
      'Mariokart',
      'Puzzle Quest',
      'Wolf Of The Battlefield: Commando 3'
    ]
  },
  {
    category: 'Funny Road Names Near Madison',
    answers: [
      'pickle buddy court',
      'honey girl lane',
      'ruby golightly drive',
      'apple butter drive'
    ]
  },
  {
    category: 'My Four Favorite Beers',
    answers: ['guinness', 'blue moon', 'coors light', 'michelob ultra']
  },
  {
    category: 'My Spotify Wrapped Artists',
    answers: [
      'radiohead',
      'nat king cole',
      'bobby darin',
      'a tribe called quest'
    ]
  },
  {
    category: 'The Four Best Cities I Have Visited',
    answers: [
      'Chicago',
      'Charleston',
      'St. Augustine',
      'Anna Maria'
    ]
  },
  {
    category: 'Art I Would Get A Tattoo Of (Music, Movies, etc.)',
    answers: [
      'Bladerunner',
      'Rage Against The Machine',
      'Radiohead',
      'Tool'
    ]
  },
  {
    category: 'Jobs I\'d Try For A Month',
    answers: [
      'Police Officer',
      'Baker',
      'Fisherman',
      'Mechanic'
    ]
  },
  {
    category: 'Things I\'d Buy If I Won The Lottery',
    answers: [
      'Suit',
      'Ear Rings',
      'Radiohead Tickets',
      'Porsche'
    ]
  },
  {
    category: 'Bugs I Would Like To Be',
    answers: [
      'Bee',
      'Dragonfly',
      'Caterpillar',
      'Centipede'
    ]
  },
  {
    category: 'Favorite Simpson Characters',
    answers: [
      'Homer Simpson',
      'Ned Flanders',
      'Smithers',
      'Principal Skinner'
    ]
  },
  {
    category: 'Restaurants I Have Eaten At The Most In My Life',
    answers: [
      'Chickfila',
      'Moes',
      'Chipotle',
      'Wendys'
    ]
  },
  {
    category: 'Superheroes I\'d Like To Be',
    answers: [
      'Batman',
      'Spiderman',
      'Cyclops',
      'Doctor Strange'
    ]
  },
  {
    category: 'Cereal Mascots I Could Beat In A Fight',
    answers: [
      'Lucky The Leprechaun',
      'Buzz Bee',
      'Toucan Sam',
      'Trix Rabbit'
    ]
  },
  {
    category: 'Breeds of Dogs I Like',
    answers: [
      'English Labrador',
      'Corgi',
      'Dachshund',
      'Cattle Dog'
    ]
  },
  {
    category: 'Worst Celebrities (Not Criminal)',
    answers: [
      'James Corden',
      'Ellen DeGeneres',
      'Drake',
      'Adam Sandler'
    ]
  },
];

/**
 * Returns today's Name Four puzzle using date-based rotation
 */
export function getTodayNameFourPuzzle() {
  const startDate = new Date('2024-01-01');
  const today = new Date();

  const daysSinceStart = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
  );

  const index = daysSinceStart % NAME_FOUR_PUZZLES.length;
  return NAME_FOUR_PUZZLES[index];
}
