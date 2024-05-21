// const data = [
//     {
//         id: 1,
//         title: "The Lord of the Rings",
//         publicationDate: "1954-07-29",
//         author: "J. R. R. Tolkien",
//         genres: [
//             "fantasy",
//             "high-fantasy",
//             "adventure",
//             "fiction",
//             "novels",
//             "literature",
//         ],
//         hasMovieAdaptation: true,
//         pages: 1216,
//         translations: {
//             spanish: "El señor de los anillos",
//             chinese: "魔戒",
//             french: "Le Seigneur des anneaux",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.52,
//                 ratingsCount: 630994,
//                 reviewsCount: 0,
//             },
//             librarything: {
//                 rating: 4.53,
//                 ratingsCount: 47166,
//                 reviewsCount: 452,
//             },
//         },
//     },
//     {
//         id: 2,
//         title: "The Cyberiad",
//         publicationDate: "1965-01-01",
//         author: "Stanislaw Lem",
//         genres: [
//             "science fiction",
//             "humor",
//             "speculative fiction",
//             "short stories",
//             "fantasy",
//         ],
//         hasMovieAdaptation: false,
//         pages: 295,
//         translations: {},
//         reviews: {
//             goodreads: {
//                 rating: 4.16,
//                 ratingsCount: 11663,
//                 reviewsCount: 812,
//             },
//             librarything: {
//                 rating: 4.13,
//                 ratingsCount: 2434,
//                 reviewsCount: 0,
//             },
//         },
//     },
//     {
//         id: 3,
//         title: "Dune",
//         publicationDate: "1965-01-01",
//         author: "Frank Herbert",
//         genres: ["science fiction", "novel", "adventure"],
//         hasMovieAdaptation: true,
//         pages: 658,
//         translations: {
//             spanish: "",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.25,
//                 ratingsCount: 1142893,
//                 reviewsCount: 49701,
//             },
//         },
//     },
//     {
//         id: 4,
//         title: "Harry Potter and the Philosopher's Stone",
//         publicationDate: "1997-06-26",
//         author: "J. K. Rowling",
//         genres: ["fantasy", "adventure"],
//         hasMovieAdaptation: true,
//         pages: 223,
//         translations: {
//             spanish: "Harry Potter y la piedra filosofal",
//             korean: "해리 포터와 마법사의 돌",
//             bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//             portuguese: "Harry Potter e a Pedra Filosofal",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.47,
//                 ratingsCount: 8910059,
//                 reviewsCount: 140625,
//             },
//             librarything: {
//                 rating: 4.29,
//                 ratingsCount: 120941,
//                 reviewsCount: 1960,
//             },
//         },
//     },
//     {
//         id: 5,
//         title: "A Game of Thrones",
//         publicationDate: "1996-08-01",
//         author: "George R. R. Martin",
//         genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//         hasMovieAdaptation: true,
//         pages: 835,
//         translations: {
//             korean: "왕좌의 게임",
//             polish: "Gra o tron",
//             portuguese: "A Guerra dos Tronos",
//             spanish: "Juego de tronos",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.44,
//                 ratingsCount: 2295233,
//                 reviewsCount: 59058,
//             },
//             librarything: {
//                 rating: 4.36,
//                 ratingsCount: 38358,
//                 reviewsCount: 1095,
//             },
//         },
//     },
// ];
//
// const getBooks = () => data;
// // the same function - on the top
// // function getBooks() {
// //     return data;
// // }
//
// const getBook = (id) => data.find((book)=> book.id === id)
//
// //console.log(getBook(0))
// // function getBook(id) {
// //     return data.find((d) => d.id === id);
// // }
//
//
// const books = getBooks();
// console.log(books);
//
// const book = getBook(1);
// const {title, author ,pages,hasMovieAdaptation, genres} = book
// // console.log(title, author, genres);
//
// const [first,...otherGenres]  = genres; // REST OPERATOR
// const myAllMoviesWithoutSquareBrackets = ["myOwnKindOfMoovie", ...genres]; //SPREAD OPERATOR
//
// console.log("REST OPERATOR -->",otherGenres);
// console.log("SPREAD OPERATOR -->",myAllMoviesWithoutSquareBrackets);
//
// const book1 = getBook(1);
// const book1Update = {
//     ...book1,
//     // updated value (must be after a spread operator ...book1)- number of pages
//     pages:999,
//     //added new key with value
//     noTOP1000:89,
// }
//
// function getAuthor(author){
//     return author;
// }
//
// getAuthor1=(author)=>`arrow function author ${author}`;
//
// const bookPagesTenaryOperator = pages > 1000 ? "more than 1000 pages" : "less than 1000 pages";
// console.log(`${title} written by ${getAuthor1(author)} has ${bookPagesTenaryOperator}, The book has${hasMovieAdaptation?"":"no"} adaptation written by ${getAuthor(author)}`);
// console.log("Operator logiczny &&");
//
// // && return first falsy value - like null, undefined, Nan, "" or O ;
// // || return first true;
// // ?? return true and also when is zero or empty string "";
// // &&, ||, ?? -  this operands always return something, eventually last element ;
// console.log(book.reviews.goodreads.reviewsCount || "no data");
//
//
// console.log("number of reviews ",book.reviews.goodreads.reviewsCount ?? "no data");
//
// function getTotalBookReviews(book){
//     let goodReadsCount  = book.reviews.goodreads?.reviewsCount;
//     // In code belowe in case with no reviews
//     // - reviewsCount? - error solving - problem with taking value from Undefined in case lack of data - thanks to ? operator
//     //  - in case lack of date in reviewsCount - accept default value 0
//     // book.reviews.reviewsCount?.reviews - this will be falsy because it takes value undefined so
//     // book.reviews.reviewsCount?.reviews ?? 0 - return 0 or "" empty string or some truffy value;
//     let reviewsCount  = book.reviews.reviewsCount?.reviews ?? 0;
//     return goodReadsCount + reviewsCount
// }
// getTotalBookReviews(book)
//
//
// let titles = books.map((book)=>book.title)
// console.log(titles);
//
// let getTotalReviewsCount = function getTotalReviewsCount(book){
//     let goodReads = book.reviews.goodreads.reviewsCount;
//     let reviewsCount = book.reviewsCount?.reviewsCount || 0;
//     return goodReads + reviewsCount
// }
// let shortAboutBook = books.map((book)=>{
//     return {
//         title: book.title,
//         author : book.author,
//         reviewCount: getTotalReviewsCount(book)
//     }}
// )
// let shortAboutBookREFACTOR = books.map((book)=>({
//             title: book.title,
//             author : book.author,
//     })
// )
//
// let longerBooksWithMovieAdaptation = books
//         .filter(book => book.pages > 500)
//         .filter(book => book.hasMovieAdaptation)
//
// console.log( "longerBooksWithMovieAdaptation", longerBooksWithMovieAdaptation);
//
// let BooksWithAdventure = books
//     .filter(books => books.genres.includes("adventure"))
//     .map((book)=>book.title);
//
// console.log("BooksWithAdventure - BooksWithAdventure", BooksWithAdventure);
//
// let sumPages = books.reduce((acc,book)=> acc + book.pages,0);
// console.log("sumPages", sumPages);
//
// arr = [3,47,3,5,33,66];
// let randomNumbers = arr.slice().sort((a,b)=>a-b);
// console.log(randomNumbers);
//
// let sortedBooksByNoPages = books.slice().sort((a,b)=>a.pages - b.pages);
//
// console.log("sortedBooksByNoPages", sortedBooksByNoPages);
// let bookToAdd = {
//     id: 6,
//     title: "A Game of Thrones",
//     publicationDate: "1996-18-23",
//     author: "George R. R. Martin",
//     genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//     hasMovieAdaptation: true,
//     pages: 99,
//     translations: {
//         korean: "왕좌의 게임",
//         polish: "Gra o tron",
//         portuguese: "A Guerra dos Tronos",
//         spanish: "Juego de tronos",
//     },
//     reviews: {
//         goodreads: {
//             rating: 4.44,
//             ratingsCount: 2295233,
//             reviewsCount: 59058,
//         },
//         librarything: {
//             rating: 4.36,
//             ratingsCount: 38358,
//             reviewsCount: 1095,
//         },
//     }
// }
//
//
//
// // add a object to the list using the spread operator
// let addBooks = [...books, bookToAdd];
// //delete book with id =3 using the filter method
// let deleteBooks = books.filter((book)=> book.id !== 3);
// // please update the object with id = 3 using the map method, ternary operator, and a spread operator
// let updateBooks = books.map((book)=> book.id = 1 ? {...book, pages:333} : book);
//
//
//
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res=>res.json())
//     .then(data=>console.log(data));
//
// async function getToDos(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     console.log("data", data);
//     return data;
// }
// // it is not possible to display a data inside of function without invoking
// // /getToDos();
// // Extracting data from fetch - next way
// let toDoData = getToDos().then(console.log);
// // Extracting data from fetch - next way
// toDoData.then((data)=>{
//     console.log(data);
// })
//
//
// REST OPERATOR EXERCISES
// 1. Function Arguments
// Create a function that accepts any number of arguments and returns their sum.

const acceptAllLikePelican = (...arr) => {
    return arr.reduce((acc, arg) => acc += arg, 0);
}

// 2. Destructuring Arrays
// Extract the first element and the rest of the elements from an array using the rest operator.

const destructuringArraysFunction = (bookList) => {
    bookList = ["A", "B", "C"];
    let [firstBook, ...restBooks] = bookList;
    console.log(firstBook);
    console.log(restBooks);
}
destructuringArraysFunction();

// 3. Destructuring Objects
const destructuringObjectsFunc = () => {
    let fruitList = [{
        fruit: "apple",
        color: "green",
        price: 1,
    },
        {
            fruit: "banana",
            color: "yellow",
            price: 2,
        },
    ]
    let owoce = ["orange", "pineapple", "peach"];
    let [pomarancz, ...rest] = owoce
    let apple = fruitList[0];
    let {color, fruit, price} = apple;
    // console.log(`promocja na ${pomarancz} tylko`, price, "zł. ");
    let updateAppleProps = {...apple, color: "red"};
    // console.log("updateFruitList", updateAppleProps);

}
destructuringObjectsFunc();

// 4. Function with Specific and Remaining Arguments
// Create a function that accepts a specific first argument and any number of remaining arguments.

let funSpecificAndRemainingArg = (firstArg, ...restArg) => {
    // console.log("firstArg", firstArg);
    // console.log("restArg", restArg);

}
funSpecificAndRemainingArg("firstArg", "restArg1", "restArg2", "restArg3");

// 1. Combining Arrays
// Combine two arrays into a single array using the spread operator.

let spreadOperatorCombiningArrays = () => {
    let arr1 = ["A", "B", "C"];
    let arr2 = ["a", "b", "c"];
    return [...arr1, ...arr2];
}
let resultSpreadOperatorCombiningArrays = spreadOperatorCombiningArrays();

// 2. Copying an Array
// Create a copy of an array using the spread operator.
let spreadOperatorCopyingArrayFun = () => {
    let arr1 = ["A", "B", "C"];
    let arr2 = [...arr1];
    return arr2

}
let spreadOperatorCopyingArray = spreadOperatorCopyingArrayFun();
// 3. Adding Elements to an Array
// Add elements to the beginning, middle, and end of an array using the spread operator.

let spreadOperAddingElementsFun = () => {
    let arr1 = ["A", "B", "C"];
    let arr2 = ["AA", ...arr1, "CC"];
    return arr2

}
let spreadOperAddingElements = spreadOperAddingElementsFun();

// 4. Combining Objects
// Combine two objects into a single object using the spread operator.

let spreadCombiningObjectsFun = () => {
    let objUpperCase = {firsUpperLetter: "A"};
    let objLowerCase = {firsLowerLetter: "a"};
    return {...objLowerCase, ...objUpperCase}
}
let spreadCombiningObjects = spreadCombiningObjectsFun();
// 5. Updating an Object
// Update a property of an object using the spread operator.

let spreadUpdatingObjectsFun = () => {
    let objUpperCase = {firsUpperLetter: "A", firsLowerLetter: "A"};
    return {...objUpperCase, firsLowerLetter: "a"}
}
let spreadUpdatingObjects = spreadUpdatingObjectsFun();
// console.log(spreadUpdatingObjects);

module.exports = {spreadUpdatingObjectsFun, spreadUpdatingObjects, spreadOperAddingElements, spreadOperAddingElementsFun};