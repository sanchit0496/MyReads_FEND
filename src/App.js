import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import * as BooksAPI from './BooksAPI';
// import Header from './components/Header';
import BookShelf from './Components/BookShelf';
import SearchBooks from './Components/SearchBooks';
import {Route} from 'react-router-dom';



class BooksApp extends React.Component {
  state = {
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then(data=>{
      this.setState({
        books:data
      })    
    })
  }

  bookShelfHandler =(book,shelf)=>{
   
    BooksAPI.update(book,shelf)

   BooksAPI.getAll().then(data=>{
    this.setState({
      books:data
    })
  })
  }
  render() {
    
    return (
      <div className="app">
      
      {/* <Route exact path="/" render={()=>(       
                   <Header/>
          )}/> */}
        <Route exact path="/" render={()=>(       
            <BookShelf books={this.state.books} bookShelfHandler = {this.bookShelfHandler}/>
          )}/>
          
        <Route path="/search" render={()=>(        
           <SearchBooks onBookUpdate= {this.bookShelfHandler}
            myBooks={this.state.books}
           />
         )}/>
      </div>
 
    )
  }
}

export default BooksApp