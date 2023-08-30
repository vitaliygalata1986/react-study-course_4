import { useContext } from 'react';
import { CustomContext } from './Context';

// function Book({ book }) {
//   console.log(book);
//   return <h2>{book.title}</h2>;
// }

function Book({ id, title }) {
  const { removeBook } = useContext(CustomContext);

  return (
    <div className="flex">
      <h2>{title}</h2>
      <button onClick={() => removeBook(id)}>Remove</button>
    </div>
  );
}

export default Book;
