import React from 'react';

class Cards extends React.Component {
    render() {
        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)",
            display: "inline-block",
            margin: "45px"
        };

        return (
            <div style={cardStyle}>
                <p require src={this.props.text} style={{width:150, height: 200}}/>
            </div>
        );
    }
}

export default Cards;