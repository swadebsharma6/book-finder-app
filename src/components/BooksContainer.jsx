import { useState } from "react";
import Book from "./Book";
import Search from "./Search";
import { books } from "./books";
// console.log(books)

const BooksContainer = () => {

  const [loadedBooks, setLoadedBooks] = useState(books);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e)=>{
    e.preventDefault()
    const searchValue = e.target.search.value;
    setSearchText(searchValue);
    console.log('search btn is clicked', searchText);
    const searchBooks = books.filter(book => book.bookName.includes(searchText));
      setLoadedBooks(searchBooks)
  }


    return (
       <section>
       <Search handleSearch={handleSearch}></Search>
       <div
       className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
     >
  
      {
        loadedBooks.map(book => <Book
            key={book.id}
            book={book}
            ></Book>)
      }
   
     </div>
       </section>
    );
};

export default BooksContainer;