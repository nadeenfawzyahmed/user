import React, { useTransition } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function LoadBackground() {
  
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const deleteItemm=(index)=> {
    console.log("before",data);
    
    data.splice(index,1); 
   setData(data);
   setData((data) => data.filter((_, i) => i !== index));
   console.log("after",data);



 }
 

  React.useEffect(() => {
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
      console.log("done",data) 

  }, []);
 
  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
      console.log("done",data) 

    }
  }, [data]);

 
  return (
    <div className="container"> 
      <div className="row">
      {

      isLoading ? (
        <h1>Loading...</h1>
      ) : (
        
      
        data.map((user,index) => (
          <Card className="col-4 justify-content-between">
            <Card.Img variant="top" src={user.picture.large} />
            <Card.Body>
              <Card.Title>{user.name.first}{user.name.last}</Card.Title>
              <Card.Text>
                <p>Email : {user.email}
                         </p>
                <p>Phone number :{user.phone}
                </p>
                <p>gender :{user.gender}
                </p>

              </Card.Text>
              <Button onClick={() => deleteItemm(index)}
              >Delete</Button>
            </Card.Body>
          </Card>
    

        )
        
        
        )
      )
      }


    </div>
    </div>
  );
}

export default LoadBackground;