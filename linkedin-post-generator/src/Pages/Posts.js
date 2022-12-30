import React from "react";
//import Cards from "../Card/Card";
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/Posts.css";


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
var temp;
const Posts = () => {

  const {state} = useLocation();

  const copyBtn = () => {
    navigator.clipboard.writeText(temp.text);
    document.getElementById('txtMsg').innerHTML = "Copied text to clipboard!";

    setTimeout(function(){
      document.getElementById('txtMsg').innerHTML = '';
    }, 1500);
  }

  console.log(state)
  // "id": "1", "image":"Ronaldo"},{"id": "2", "image":"Rafa"},{"id": "3", "image":"Dravid"
    const generatedLinkedInPosts = state.from;
    // Object.keys(state.from).forEach(function(key,index) {
    //   colors[key] 
    // })

    return(
    <div>
        <div style={{ textAlign: 'center' }}>
        {
          generatedLinkedInPosts.map((p) => {
            temp = p;
            return(<Card className="cardTxt">
            <Card.Body style={{width:150, height: 200, textAlign:"center"}}>
                <Card.Title style={{padding: "15px"}}>{p.text}</Card.Title>
                <Button className="copyBtn" onClick={copyBtn}>Copy Text</Button>
            </Card.Body>
      </Card>)
})
        }
        </div>

        <Button className='submitBtn' variant="primary" type="submit" style={{backgroundColor:"#FFCE0A"}}>
                <Link to={"/"} className="showPosts" state = {{color: "#0547b0"}}>
                    <Emoji label="AI" symbol="🤪"/> Let's Generate a new one
                </Link>
        </Button>

        <p id="txtMsg"></p>

    </div>
    )
}

export default Posts;