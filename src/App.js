import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import Search from './components/Search';
import BookShelf from './components/BookShelf';

class BooksApp extends React.Component {
  // set state on our object of books array
  state = {
    books: []
  }

  // Get book data from BookAPI
  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({ books });
    })
  }

  // Add a book to a certain selected shelf from book self
  // changer component using our update() method from BooksAPI
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          // render this when the path matches the url
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf
                shelfTitle="Currently Reading"
                books={books}
                shelf="currentlyReading"
                updateShelf={this.updateShelf}
              />
              <BookShelf
                shelfTitle="Want To Read"
                books={books}
                shelf="wantToRead"
                updateShelf={this.updateShelf}
              />
              <BookShelf
                shelfTitle="Read"
                books={books}
                shelf="read"
                updateShelf={this.updateShelf}
              />
            </div>
						{/* Search Link */}
            <div className="open-search">
					    <Link to="/search">Add a book</Link>
				    </div>
          </div>
				)}/> {/*route*/}

				{/* If the url matches search render search component */}
        <Route path='/search' component={Search}/>
      </div>
    )
  }
}

export default BooksApp;


/* RESOURCES
  Apart from the lessons I also used the following resources for extra help throughout this project:
  * https://www.youtube.com/watch?v=fd2Cayhez58&index=2&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b
  * https://reactjs.org/
  * https://tylermcginnis.com/free-react-bootcamp/

  For extra help with the state:
  * https://daveceddia.com/visual-guide-to-state-in-react/
  * https://daveceddia.com/where-initialize-state-react/
  * https://reactjs.org/docs/lifting-state-up.html

  For book changer component from 1hr 21 minute mark:
  *https://www.youtube.com/watch?v=i6L2jLHV9j8&feature=youtu.be
  * https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
  */