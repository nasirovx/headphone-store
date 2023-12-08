import React, {useCallback, useState} from "react";
import './ListItem.css'

const ListItem = (props) => {
    const {item, onDelete} = props;
    console.log("Render", item);
    return(
        <div className="list-item">
            {item} <button className="delete-button" onClick={() => onDelete(item)}>Delete</button>
        </div>
    );
};
export default ListItem;