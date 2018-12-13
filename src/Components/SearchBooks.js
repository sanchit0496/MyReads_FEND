import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import NotFound from './NotFound'
import * as BooksAPI from '../Utils/BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  }
  state = {
    query: '',
    books: [],
    error: ''
  }
  bookShelfHandler() {
    return this.props.bookShelfHandler;
  }  
  handleChange = (query) => {
    this.setState({ query })
    this.bookSearch(query)
  }
  
  changeBookShelf = (books) => {
    let all_Books = this.props.myBooks
    for (let book of books) {
      book.shelf = "none"
    }

    for (let book of books) {
      for (const b of all_Books) {
        if (b.id === book.id) {
          book.shelf = b.shelf
        }
      }
    }
    return books
  }
  
  bookSearch = (query) => {
    if (query) {
      BooksAPI.search(query, 10)
        .then((books) => {
          if (books.length) {
            books = books.filter((book) => (book.imageLinks))
            books = this.changeBookShelf(books)
            this.setState({ books, error: '' })
          } else {
            this.setState({ books: [], error: 'error' })
          }
        })
    } else {
      this.setState({ books: [], query: ''})
    }
  }

  addBook = (book, shelf) => {
    this.props.onBookUpdate(book, shelf)
  }
  render () {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input type='text' 
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(e) => (this.handleChange(e.target.value))} />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
          {this.state.query && 
            this.state.books.map((book) => (<Book bookShelfHandler={this.props.onBookUpdate} book={book} key={book.id} onUpdate={(shelf) => (this.addBook(book, shelf))}/>))}
          {
            this.state.error && <NotFound />
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks