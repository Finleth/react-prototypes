import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/app';

const user = {
    name: 'Jeffrey Poa',
    luckyNumber: luckyNumber(),
};

function luckyNumber(){
    return Math.floor(Math.random()*1001);
}


ReactDOM.render(
    <Greeting person={user}/>,
    document.getElementById('root')
);
