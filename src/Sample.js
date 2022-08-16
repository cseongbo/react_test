import React, { Component } from 'react';

const cardStyle = {
    border : '1px solid black',
    padding : 10,

}

function Card(props) {
    return <div style={cardStyle}>
        <span>2022년 8월 16일</span>
        <hr />
        <span>{props.author}</span>
        {props.children}
    </div>
}

class Sample extends Component {
    render() {
        const elements = []
        for (let index = 1; index < 10; index++) {
            elements.push(
                <Card author="NoName">
                    <h1>Lorem Ipsum</h1>
                    <p>asdsadasokokddddddddddddddddddddddddddasdasdasdasdasdasdasdasdasd</p>
                </Card>
            )
        }
        return (
            <div>
                {elements}
            </div>
        );
    }
}

export default Sample;