import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
  render() {
    const { book } = this.props;
    console.log(book);
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 192,
            }}>

            <img className="book-cover-img" src={book.imageLinks.smallThumbnail}
            alt={book.title}
            />

          </div>
          <BookShelfChanger shelf={book.shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;