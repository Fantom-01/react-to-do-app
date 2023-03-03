import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  //USE THE USEREF HOOK TO RETURN FOCUS TO THE INPUT AFTER CLICKING THE ADD ITEM ICON
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}>
        <label>Add Item</label>
        <input
            type="text"
            id="addItem"
            autoFocus
            ref={inputRef}
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem