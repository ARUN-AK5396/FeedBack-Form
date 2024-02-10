import React from 'react'
import './main.css'

const Modal=({open,onClose})=> {
    if (!open) 
        return null;
  return (
    <div className='overlay'>
        <div className='modalContainer'>
            <h2>Select your Semester</h2>
           <select name='Semester' id='semester'>
             <option value="3">3</option>
             <option value="5">5</option>
             <option value="7">7</option>
           </select>
           <div className='closeBtn'>
             <p onClick={onClose} className='close'>X</p>
           </div>
        </div>
    </div>
  )
}

export default Modal