/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './main.css'

const ModalMech=({open,onClose})=> {
    if (!open) 
        return null;
  return (
    <div className='overlay'>
        <div className='modalContainer'>
            <h2>Select your Semester</h2>
             <div className='semester'>
              <a href='/mech_sem3' className='sem'>3rd Semester</a>
              <a href='/mech_sem5' className='sem'>5th Semester</a>
              <a href='/mech_sem7' className='sem'>7th Semester</a>
              </div>
           <div className='closeBtn'>
             <p onClick={onClose} className='close'>X</p>
           </div>
        </div>
    </div>
  )
}

export default ModalMech