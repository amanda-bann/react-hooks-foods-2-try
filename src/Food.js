import React from "react";

const Food = (props) => {

    // const onDelete = () => {
    //     props.deleteFood(props.food)
    // }

    return (
        <li>
            {props.food}
            <span className="delete" onClick={() => props.deleteFood(props.food)}>
                {/* Alternate method: using a callback function to delete food. */}
                X
                </span>
        </li>
    );
};

export default Food;