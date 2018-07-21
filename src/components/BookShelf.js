import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends React.Component {

  render() {
    const { shelfTitle, books, shelf, updateShelf } = this.props;
    // console.log('Props', this.props);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {/* filter and map over books array and filter each book to correct shelf */}
              {books.filter(book => book.shelf === shelf).map((book) => (
                <Book
                  book={book}
                  key={book.id} /* unique key = book id */
                  updateShelf={updateShelf} /* onChange update book to shelf method prop */
                  shelf={shelf}
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
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
}

export default BookShelf