import React from 'react';

export default props => {
    const {name, luckyNumber} = props.person;

    return (
        <div className="container">
            <h1>Hello {name}</h1>
            <h2 className="text-muted">{luckyNumber}</h2>
        </div>
    );
}
