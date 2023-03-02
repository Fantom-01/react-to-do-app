import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
        <label>Add Item</label>
        <input
            type="text"
            id="addItem"
            autoFocus
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label='Add Item'
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem