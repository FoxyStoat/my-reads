import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import './App.css';

// import Search from './components/Search';
import BookShelf from './components/BookShelf';


class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      console.log(books);
      this.setState({ books });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf
              shelfTitle="Curently Reading"
              books={books}
              shelf="currentlyReading"
            />
            <BookShelf
              shelfTitle="Want To Read"
              books={books}
              shelf="wantToRead"
            />
            <BookShelf
              shelfTitle="Read"
              books={books}
              shelf="read"
            />
          </div>
        </div>
        <div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
      </div>
    )
  }
}

BooksApp.propTypes = {
  books: PropTypes.array.isRequired,
}

export default BooksApp;