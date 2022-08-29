import React from 'react'
import { useEffect ,useState} from 'react';
import axios from 'axios';
import CardBook from './CardBook'
import { useContext } from 'react'

import { BooksContex } from './BooksContex';





export default function Hello() {
   const {Books,SetBooks}=useContext(BooksContex);
   const [search,setSearch]=useState("");

    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
      
        useEffect(() => {
          const handler = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
      
          return () => {
            clearTimeout(handler);
          };
        }, [value, delay]);
      
        return debouncedValue;
      }
      ///
      const debouncedsearch=useDebounce(search,500);

       useEffect(() => {
         const url = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:"+debouncedsearch;
          axios.get(url)
         .then(response=>SetBooks(response.data.items))
          // .then((response) =>response.json())
          // .then((json) => setMovies(json['items']))
          // .catch((error) => console.log(error));
           console.log(url,Books ) 
    
       }, [debouncedsearch]);

    

    return (
      <div className="container">

        <div className="row">
            <input type="search" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}>
            </input>
           

          {  
          Books.map((book,index) => (
            
            
            <CardBook book={book} index={index} />
            
           )   
           )
           }
           
          
        </div>
        </div>
    )
}