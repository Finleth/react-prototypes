import React from 'react';

export default props => {
    const {name, luckyNumber} = props.person;
    let styles = {
        color:"red",
        fontWeight:"bold"
    };
    return (
        <div className="container">
            <h1 style={styles}>Hello {name} and I AM EVAL()!</h1>
            <h2 className="text-muted">{luckyNumber}</h2>
        </div>
    );
}
