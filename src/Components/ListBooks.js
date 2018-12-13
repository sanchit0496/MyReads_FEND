import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

function ListBooks (props) {
  const books = props.books
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {
            [
              ['Currently Reading', 'currentlyReading'],
              ['Want To Read', 'wantToRead'],
              ['Read', 'read']
            ].map((arr) => (<BookShelf title={arr[0]}
              key={arr[1]}
              onChangeShelf={props.onBookUpdate}
              books={books.filter((book) => (book.shelf === `${arr[1]}`))} />
            ))
          }
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.prototype.propTypes = {
  books: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
}

export default ListBooks