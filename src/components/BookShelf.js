import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends React.Component {

  render() {
    const { shelfTitle, title, authors, books, bookId } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li key={bookId}>
              {books.map((book) => (
                <Book
                  book={book}
                  bookId={book.Id}
                  authors={book.authors}
                  title={book.title}
                />
              ))}
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
}

export default BookShelf