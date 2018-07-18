import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
  render() {
    const { authors, bookTitle } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: 'url(book.image.Links)'
                }}>
            </div>
            <BookShelfChanger />
          </div>
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;