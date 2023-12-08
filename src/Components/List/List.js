import React, { useCallback, useState } from "react";
import ListItem from "../ListItem/ListItem";

const List = () => {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const handleDelete = useCallback((itemToDelete) => {
        setItems((items) => items.filter((item) => item !== itemToDelete))
    }, [])
    return(
        <div className="list">
            {items.map((item) =>(
                    <ListItem
                    key={item}
                    item={item}
                    onDelete={handleDelete}
                    />
                ))}
        </div>
    )
}
export default List;