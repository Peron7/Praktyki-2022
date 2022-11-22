const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 10},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
    {title: 'Do 7 zadania', pages: 11, genre: 'maslo', rating: 10}
];
//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);
//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));

//6
const TitleLengthWithoutSpaces = (list) => list.map(({title}) => title = title.split(" ").join("").length);
const EvenPages = (list) => list.filter((book) => book.pages %2 != 1);
const GenreEndsWithY = (list) => list.filter((book) => book.genre[book.genre.length - 1] == "y");
const z1 = compose(TitleLengthWithoutSpaces, GenreEndsWithY, EvenPages)

console.log(z1(books))

//7
const OddPages = (list) => list.filter((book) => book.pages %2 == 1);
const PositiveRating = (list) => list.filter((book) => book.rating > 5);
const titleWithNumber = (list) => list.filter((book) => /\d/.test(book.title));
const z2 = compose(titleWithNumber, PositiveRating, OddPages);

console.log(z2(books))

//8
const Title = (list) => list.map((book) =>book.title);
const Sort = (list) => list.sort((a, b) => b.length - a.length)
const ScndLast = (list) => list[1];
const z3 = compose(ScndLast, Sort, Title);

console.log(z3(books))
