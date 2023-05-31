import React from "react";

function Square(props) {
    return <button onClick={props.onSqClick} className="square">{props.value}</button>
}

export default Square;