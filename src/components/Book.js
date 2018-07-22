import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
  render() {
    const { book, updateShelf, shelf } = this.props;
    // If books have a thumbnail display it
    // if not display a place holder
    const displayImage = book.imageLinks ?
          book.imageLinks.thumbnail :
          "http://via.placeholder.com/128x192?text=?";
          // help from: https://knowledge.udacity.com/questions/3543
    // console.log(book);
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 192,
            }}>
            <img className="book-cover-img"
              src={displayImage}
              alt={book.title}
            />
          </div>
          <BookShelfChanger
            book={book}
            updateShelf={updateShelf}
            shelf={shelf} // for current shelf value in select drop down
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;