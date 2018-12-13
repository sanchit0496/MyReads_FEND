import React, { Component } from 'react';
import Book from './Book';
import {Link} from 'react-router-dom';

export default class BookShelf extends Component {
  render() {
  let titles =["Currently Reading", "Want to Read", "Read"];
    
    return (
      <div>
        {
          titles.map((title,index)=>{
            return(
              
              <div className="list-books-content" key={index}>
                  <div className="bookShelf" >
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                      
                      <ol className="books-grid">
                        {
                          
                          this.props.books
                            .filter(book=> 
                              book.shelf.toLowerCase() ===
                              title.toLowerCase().replace(/\s/g, ""))
                              
                            .map(book => (
                              
                              <Book book={book} bookShelfHandler={this.props.bookShelfHandler}
                               key={book.id}
                              />
                            ))
                        }
                      </ol>
                    </div>
                  </div>
              </div>
            )
          })
        }
        
        <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
      </div>
    )
  }
}