import { useState } from "react";
import AddNewItem from "./AddNewItem";
import RemoveItem from "./RemoveItem";

export default function ShoppingList() {
    const [items, setItems] = useState([{
        id: 1,
        name: 'milk',
    }, {
        id: 2, 
        name: 'eggs',
    }])

    function clearShoppingList() {
        setItems([])
    }

    function listItems(name){
        if (!name) return;
        setItems((currentItems) => {
            const newItem = {
                id: currentItems.length +1, 
                name: name,
            }
            return [newItem,...currentItems]
        })
    }

    function deleteItem(id){
        setItems((currentItems) => currentItems.filter(item => item.id !== id))
    }

    return (
        <section>
            <h2>Current list of items</h2>
            <AddNewItem addItem={listItems}/>
            <ul>{items.map((item) => {
                return <li key={item.id}>{item.name}
                <RemoveItem id={item.id} deleteItem={deleteItem}/>
                </li>
            })}
            </ul>
            <br></br>
            <div className='clear'>
            <button onClick={clearShoppingList}>'Press' to clear your shopping list</button>
            </div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2022/08/01/07/59/vegetables-7357585_1280.png' alt='bag full of groceries surrounded by fruits, vegetables, sauces'></img>
            </div>
        </section>
    )
}