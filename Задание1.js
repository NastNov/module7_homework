// Задание 1

function Book(name, author, year, price) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.price = price;
  };
let book = new Book("Преступление и наказание", "Достоевский", 2016, 500);
for (let key in book) {
  if (book.hasOwnProperty(key)) {
      console.log(key);
    }   
  };
console.log(book);
