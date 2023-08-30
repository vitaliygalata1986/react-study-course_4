import { useContext } from 'react';
import { CustomContext } from './Context';
import Book from './Book';

function Books() {
  const { books = [], addBook } = useContext(CustomContext); // вытаскиваем из контекста books
  const newBook = {
    id: 4,
    title: 'Angular',
  };
  return (
    <div className="books">
      {books.map((book) => (
        <Book key={book.id} {...book} />
        // <Book key={book.id} book={book} />
      ))}

      <button onClick={() => addBook(newBook)}>Add</button>
    </div>
  );
}

export default Books;
