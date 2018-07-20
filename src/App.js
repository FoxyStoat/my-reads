import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

// import Search from './components/Search';
import BookShelf from './components/BookShelf';

class BooksApp extends React.Component {
  // set state on our object of books array
  state = {
    showSearchPage: false,
    books: []
  }

  // Get book data from BookAPI
  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({ books });
    })
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
					<Link to="/search">Add a book</Link>
				</div>
      </div>
    )
  }
}

export default BooksApp;