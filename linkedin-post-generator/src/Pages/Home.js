import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import "../css/Home.css"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )

const Home = () => {
  const navigate = useNavigate();
  const [requestForBackEnd, setRequestForBackEnd] = useState({
    prompt: "",
    numberOfPosts : ""
  })

  const[choices, setChoices] = useState([{}]);

  
  const handleChange = (e) => {
    console.log("You are at Handle Change")
    e.preventDefault();
    setRequestForBackEnd({
      ...requestForBackEnd,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    console.log("Handling Submit..")
    e.preventDefault();
    fetchData();
    
  }

  
  async function fetchData (){
    var request = requestForBackEnd;
    console.log(request);
    const resp = await axios.post("http://127.0.0.1:3001/generate-posts", request)
    var responseArray = resp.data.data.choices;
    console.log(resp.data.data.choices);
    navigate("/posts", 
    {
      state:{
      from:responseArray
    }
  }
    )

  }

  return (
    <div style={{marginTop:'200px'}}>
        <Form onSubmit={handleSubmit} className="main-form" autoComplete="off" validate = "true" encType='multipart/form-data'>
            <Form.Group className="grp-1" controlId="formBasicEmail">
                <Form.Label>What's on your mind today?</Form.Label><br/>
                <Form.Control type="text" name="prompt" value = {requestForBackEnd.prompt} onChange = {handleChange} placeholder="Enter Text" className='textBox'/>
            </Form.Group>
            <Form.Group as={Col} className="grp-2" controlId="formGridState">
                <Form.Label>Select the number of posts you want</Form.Label><br/>
                <Form.Select name="posts" className='optionsBox'>
                    <option>Select an option</option>
                    <option value="1">1 - Just the One</option>
                    <option value="2">2 - It's good to have a choice</option>
                    <option value="3">3 - Just in case</option>
                    <option value="4">4 - Give me more!</option>
                    <option value="5">5 - Spoilt for choices</option>
                </Form.Select>
            </Form.Group>
            <div className='d-flex justify-content-center'>
                    <Button className='submitBtn' variant="primary" type="submit">
                      <Emoji label="AI" symbol="🤖"/> Generate a post!
                    </Button>
            </div> 
        </Form>
    </div>
    
  );
}

export default Home;