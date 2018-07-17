import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './components/Search';
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
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf shelfTitle="Curently Reading" books={this.state.books} />
            <BookShelf shelfTitle="Want To Read" books={this.state.books} />
            <BookShelf shelfTitle="Read" books={this.state.books} />
          </div>
        </div>
        <div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
      </div>
    )
  }
}

export default BooksApp;