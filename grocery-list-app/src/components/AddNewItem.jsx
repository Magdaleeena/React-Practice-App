import { useState } from 'react'

export default function AddNewItem({ addItem }) {
    const [newItemName, setNewItemName] = useState('')

    function handleClick(event){
        event.preventDefault()
        if (!newItemName) return
        addItem(newItemName)
        setNewItemName('')
    }

    function handleChange(e){
        setNewItemName(e.target.value)
    }
    
    return (
        <div className='input' htmlFor='addNewItem'>
            <input 
            id='addNewItem'
            type='text'
            value={newItemName}
            onChange={handleChange}
            placeholder='new item'
            />
            <button onClick={handleClick}>Add item</button>
        </div>
    )
}