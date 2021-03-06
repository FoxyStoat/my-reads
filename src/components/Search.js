import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class Search extends React.Component {
  // set state on a query
  state = {
		query: '',
		queryResults: [] // add books that match query to this array
	};

	// Update query method, takes a query (string)
	// set the state and call the updateQuery Results method
	updateQuery = (query) => {
		this.setState({ query }) //query to be whatever query is
		this.updateQueryResults(query);
	}

	// if there is a query we search the books api
	// and bring in the results
	updateQueryResults = (query) => {
		if (query) {
			BooksAPI.search(query)
			.then((queryResults) => {
				// If query throws us an error if query part matches
				//  or there is no book, make sure queryResults is still an
				//  array and not undifined so the .map can still iterate over it:
				if (queryResults.error) {
					this.setState({ queryResults: [] });
				} else {
					this.setState({ queryResults });
				}
			});
			} else {
				// if no query, return an empty array so no books (no results found)
				this.setState({ queryResults: [] })
		} // end of if statement
	}; // end of updateQueryResults

  render() {
		const { queryResults, query } = this.state;
		const { updateShelf, books } = this.props;

		// If there is a specific query
		let showingBooks;
		if (query) {
			// If there are any special characters in our query
			// escape them and i = ignore case
			const match = new RegExp(escapeRegExp(query), 'i');
			showingBooks = queryResults.filter((book) => match.test(book.title))
		}else{
			showingBooks = queryResults;
		}

		showingBooks.sort(sortBy('title'));

    return (
      <div className="search-books">
				<div className="search-books-bar">
				{/* {JSON.stringify(this.state)} */}
				<Link to="/"
				className="close-search">
				Close</Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}

						{/* Input Field
						make this a controlled component
						with value and onChange method */}
						<input
							type="text"
							placeholder="Search by title or author"
							value={query} //value will always be whatever state query is
							onChange={(event) => this.updateQuery(event.target.value)} //when input field changes, update our query
						/>
					</div>
				</div>

        <div className="search-books-results">
          <ol className="books-grid">
					{/* map through our queryResults array and for
					each book display a book from queryResults array*/}
      		{showingBooks.map(queryResults => {
						let searchShelfValue; // in book shelf changer the book is set to
						// the shelf it is on or "none" by dafault.  If books on the search page
						// don't have a current self page it will be none by dafault
							books.map(book => (
							// compare the book id's in books.state and
							// queryResults, if they match then the book is already
							// assigned a shelf on page main so reflect this in
							// the book shelf changer button
							book.id === queryResults.id ?
							searchShelfValue = book.shelf :
							''
						));
							return (
								<li key={queryResults.id}>
									<Book
										book={queryResults}
										updateShelf={updateShelf}
										shelf={searchShelfValue}
									/>
							</li>
							);
						})}
					</ol>
        </div>
      </div>
    )
  }
}

export default Search;