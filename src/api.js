
import bookList from './bookList.json';

let books = bookList;

export default {
  getBooks: () => {
    return Promise.resolve( books )
  },
  
  updateBook: (newBook)=> {

    books = books.map(book=> 
      ( newBook.id !== book.id) ?
                           books : newBook 
    );
    return Promise.resolve();
  },
  
  deleteook: (id)=> {
    
    books = books.map(book=> 
      ( book.id !== id) ?
                           books : undefined 
    ).filter(i => i)
    
    return Promise.resolve();
  }
  
}
