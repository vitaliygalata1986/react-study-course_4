import { useState, createContext } from 'react';
export const CustomContext = createContext();

export const Context = (props) => {
  let [books, setBooks] = useState([
    { id: 1, title: 'JS' },
    { id: 2, title: 'React' },
    { id: 3, title: 'VUE' },
  ]);

  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const value = {
    books,
    addBook,
    removeBook,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
