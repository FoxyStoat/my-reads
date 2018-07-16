import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
  render() {
    const { bookAuthor, bookTitle } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
            style={{
               width: 128,
               height: 192,
               backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")'
               }}></div>
            <BookShelfChanger />
            </div>
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">{bookAuthor}</div>
        </div>
      </li>
    )
  }
}

export default Book;