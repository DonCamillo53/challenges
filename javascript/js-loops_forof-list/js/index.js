console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

function createListelement(arrayElement) {
  let listElement = document.createElement("li");
  ol.append(listElement);
  listElement.textContent = arrayElement;
}

let programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

let movieTitles = {
  movie1: {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama",
  },
  movie2: {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genre: "Crime, Drama",
  },
  movie3: {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama",
  },
  movie4: {
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    genre: "Biography, Drama, History",
  },
  movie5: {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: "Crime, Drama",
  },
  movie6: {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    genre: "Adventure, Fantasy",
  },
  movie7: {
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    director: "Sergio Leone",
    genre: "Western",
  },
  movie8: {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    genre: "Drama",
  },
  movie9: {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    genre: "Drama, Romance",
  },
  movie10: {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: "Action, Adventure, Sci-Fi",
  },
};

programmingLanguages.push(movieTitles.movie2.title);

// // --v-- write/change code here --v--
// for (let i = 0; i < programmingLanguages.length; i++) {
//   createListelement(programmingLanguages[i]);
// }
// // --^-- write/change code here --^--

for (programmingLanguages of programmingLanguages) {
  createListelement(programmingLanguages);
}
