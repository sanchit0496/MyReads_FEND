import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (     
           <li key={this.props.book.id}>
             <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${
               this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ""
              }")` }}></div>
                     <div className="book-shelf-changer">
                              <select onChange={(e)=>this.props.bookShelfHandler(
                                  this.props.book, 
                                  e.target.value
                              )}
                              value={(this.props.book.shelf) ? this.props.book.shelf : 'move'}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                      </div>
                </div>
                        <div className="book-title">{this.props.book.title} </div>
                        <div className="book-authors">  {this.props.book.authors }</div>
                </div>                      
            </li>

    )
  }

}