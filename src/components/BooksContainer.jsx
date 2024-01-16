import { useState } from "react";
import Book from "./Book";
import Search from "./Search";
import { books } from "./books";
// console.log(books)

const BooksContainer = () => {

  const [loadedBooks, setLoadedBooks] = useState(books);
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('');
  // console.log(sortOption)

  const handleSearch = (e)=>{
    e.preventDefault()
    const searchValue = e.target.search.value;
    setSearchText(searchValue);
    console.log('search btn is clicked', searchText);
    const searchBooks = books.filter(book => book.bookName.includes(searchText));
      setLoadedBooks(searchBooks)
  }

  const handleSelectChange = (e) => {
    setSortOption(e.target.value);  
    const option = e.target.value;
    if(option ==='name_asc'){
      const nameAscending = [...loadedBooks].sort((a,b) => a.bookName > b.bookName ? 1 : -1);
     return setLoadedBooks(nameAscending);
    }
    else if(option === 'name_desc'){
      const nameDescending = [...loadedBooks].sort((a,b) => a.bookName > b.bookName ? -1 : 1);
      return setLoadedBooks(nameDescending)
    }
    else if(option === 'year_asc'){
      const yearAscending = [...loadedBooks].sort((a,b) => a.publicationDate - b.publicationDate);
      setLoadedBooks(yearAscending)
    }
    else if(option ==='year_desc'){
      const yearDescending = [...loadedBooks].sort((a,b) => b.publicationDate - a.publicationDate);
      return setLoadedBooks(yearDescending)
    }
  };




    return (
       <section>
       <Search 
       handleSearch={handleSearch}
       handleSelectChange={handleSelectChange}
       sortOption={sortOption}
       ></Search>
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