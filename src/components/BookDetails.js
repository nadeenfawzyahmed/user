import React from 'react'
import CardBook from './CardBook'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import axios from 'axios';


export default function Hello(props) {
    const { title } = useParams();
    const [bookDetails, setbookDetails] = useState("");

  
    useEffect(() => {
        const url = "https://www.googleapis.com/books/v1/volumes?q="+title
         axios.get(url)
        .then(response=>setbookDetails("done"))
        
          console.log(url,bookDetails ) 
   
      }, []);
      useEffect(() => {
        const url = "https://www.googleapis.com/books/v1/volumes?q="+title
        fetch(url) 
        .then(res => setbookDetails(res.json()))


        
          console.log(bookDetails ) 
   
      }, []);
    return (
        <div>
            <Card className="col-8 justify-content-between justify-space-between"  >
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{bookDetails.publishedDate}</Card.Title>
              <Card.Text>
                <p>hi
                         </p>
                         
                        

              </Card.Text>
          

     

            </Card.Body>
          </Card>

        </div>
    )
}