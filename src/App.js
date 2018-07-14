import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './components/Search';
import ShelfCurrentlyReading from './components/ShelfCurrentlyReading';
import ShelfRead from './components/ShelfRead';
import ShelfWantToRead from './components/ShelfWantToRead';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <ShelfCurrentlyReading />
            <ShelfWantToRead />
            <ShelfRead />
          </div>
        </div>
        <div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
      </div>
    )
  }
}

export default BooksApp
