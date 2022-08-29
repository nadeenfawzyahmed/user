import React from 'react'
import { useContext } from 'react';
import CardBook from './CardBook';  
import { CurrentlyReadContex } from './CurrentlyReadContext';
import { WantToReadContex } from './WantToReadContex';
import { ReadContex } from './ReadContex';



export default function Hello() {
    const {currentlyRead,SetCurrentlyRead}=useContext(CurrentlyReadContex);
    const {Read,SetRead}=useContext(ReadContex);
    const {WantToRead,SetWantToRead}=useContext(WantToReadContex);


    return (
<div className="container">

<div className="row">
           <h1>
        Currently Reading 
        </h1>

        {  
          currentlyRead.map((book) => (
         
            <CardBook book={book}/>
            
           )   
           )
           }
      <h1>
        Want to Read
      </h1>
      {  
          WantToRead.map((book) => (
         
            <CardBook book={book}/>
            
           )   
           )
           }
     
      <h1>
        Read
      </h1>  
      {  
          Read.map((book) => (
         
            <CardBook book={book}/>
            
           )   
           )
           } 
     
      </div>
             </div>
    )
}