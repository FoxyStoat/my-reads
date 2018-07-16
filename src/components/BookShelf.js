import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends React.Component {

  render() {
    const { shelfTitle, bookTitle, bookAuthor } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          <Book author={bookAuthor} bookTitle={bookTitle}/>
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

