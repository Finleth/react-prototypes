import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: 'Jeffrey Poa',
    luckyNumber: luckyNumber(),
};

function luckyNumber(){
    return Math.floor(Math.random()*1001);
}

function Greeting(props){
    const {name, luckyNumber} = props.person;

    return (
        <div className="container">
            <h1>Hello {name}</h1>
            <h2 className="text-muted">{luckyNumber}</h2>
        </div>
    );
}


ReactDOM.render(
    <Greeting person={user}/>,
    document.getElementById('root')
);
