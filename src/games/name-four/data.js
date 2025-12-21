// src/games/name-four/data.js

export const NAME_FOUR_PUZZLES = [
  {
    category: 'My Favorite 80s Rock Bands',
    answers: ['the smiths', 'talking heads', 'misfits', 'queen']
  },
  {
    category: 'My Four Favorite Beers',
    answers: ['guinness', 'blue moon', 'coors light', 'michelob ultra']
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
    category: 'My Favorite SNL Cast Members',
    answers: [
      'Tim Robinson',
      'Fred Armisen',
      'Mike Myers',
      'Norm Macdonald'
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
    category: 'Things I Would Put In My Butt If I Had To',
    answers: [
      'Marshmallow',
      'M&Ms',
      'Bar of Soap',
      'Finger'
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
    category: 'Best Xbox Games I\'ve Played',
    answers: [
      'Doom Eternal',
      'Overwatch',
      'South Park: The Fractured But Whole',
      'Call of Duty: Black Ops 2'
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
    category: 'Male Dog Names I Like',
    answers: [
      'James',
      'Winston',
      'Peter',
      'Ryan'
    ]
  },
  {
    category: 'Favorite Historical Civilizations',
    answers: [
      'Greeks',
      'Egyptians',
      'Mongols',
      'Anglo-Saxons'
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
    category: 'Funny Road Names Near Madison',
    answers: [
      'pickle buddy court',
      'honey girl lane',
      'ruby golightly drive',
      'apple butter drive'
    ]
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
    category: 'Best Roller Coasters I\'ve Been On',
    answers: [
      'Fury 325',
      'Mako',
      'The Hulk',
      'Dueling Dragons'
    ]
  },
  {
    category: 'Childhood Games I Enjoyed',
    answers: [
      'Webkinz',
      'Mariokart',
      'Puzzle Quest',
      'Wolf Of The Battlefield: Commando 3'
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
    category: 'Video Games I Wish I Liked More',
    answers: [
      'The Witcher 3',
      'Mortal Kombat',
      'Cuphead',
      'Grand Theft Auto V'
    ]
  },
  {
    category: 'Superheros I\'d Like To Be',
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
      'Lucky',
      'Buzz',
      'Toucan Sam',
      'Trix Rabbit'
    ]
  },
  {
    category: 'Favorite Poker Slang',
    answers: [
      'Muck',
      'Bullets',
      'Wheel',
      'Donk'
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
