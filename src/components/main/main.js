/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './main.css'
import { useState  } from 'react'
import ModalCivil from './modal_civil'
import ModalCse from './modal_cse'
import ModalEce from './modal_ece'
import ModalEee from './modal_eee'
import ModalMech from './modal_mech'

function mainPage() {

   const [openModalCivil, setOpenModalCivil] = useState(false);

   const [openModalCse, setOpenModalCse] = useState(false);

   const [openModalEce, setOpenModalEce] = useState(false);

   const [openModalEee, setOpenModalEee] = useState(false);

   const [openModalMech, setOpenModalMech] = useState(false);
  return (
    <div className='main_page'>
        <div className="card_view">
            <h2>Select Your Department</h2>
             <ul class="cards">
                <li> 
                    <a href={setOpenModalCivil} className="card" onClick={() => setOpenModalCivil(true)} >
                    <img src="https://i.pinimg.com/564x/71/f6/38/71f638ec52695a07e883d380e95d239f.jpg" class="card__image" alt="" />
                    <div className="card__overlay">
                        <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <div class="card__header-text">
                            <h3 class="card__title">Departmend of Civil Enginnering</h3>            
                            <span class="card__status">Semesters 3,5,7</span>
                        </div>
                        </div>
                    </div>
                    </a>  
                    
                </li>
                <li>
                    <a href={setOpenModalCse} class="card" onClick={() => setOpenModalCse(true)}>
                    <img src="https://i.pinimg.com/564x/69/db/1a/69db1a4515231490e3a36cdd5b674ec8.jpg" class="card__image" alt="" />
                    <div class="card__overlay">        
                        <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <div class="card__header-text">
                            <h3 class="card__title">Department of Computer Science</h3>
                            <span class="card__status">Semesters 3,5,7</span>
                        </div>
                        </div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href={setOpenModalEce} class="card" onClick={() => setOpenModalEce(true)} >
                    <img src="https://i.pinimg.com/564x/16/c4/d7/16c4d7b34d1debab149acec704e046fd.jpg" class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <div class="card__header-text">
                            <h3 class="card__title">Department of  Electronics and Communication Engineering</h3>
                            <span class="card__status">Semesters 3,5,7</span>
                        </div>
                        </div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href={setOpenModalEee} class="card" onClick={() => setOpenModalEee(true)}>
                    <img src="https://i.pinimg.com/564x/fb/3f/48/fb3f4842eca047859723ab969624c407.jpg" class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <div class="card__header-text">
                            <h3 class="card__title">Department of Electrical and Electronics Engineering</h3>
                            <span class="card__status">Semesters 3,5,7</span>
                        </div>          
                        </div>
                    </div>
                    </a>
                </li>  
                <li>
                    <a href={setOpenModalMech} class="card" onClick={() => setOpenModalMech(true)}>
                    <img src="https://i.pinimg.com/564x/5f/44/61/5f44615d93296e4776bbe62d314a51bf.jpg" class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <div class="card__header-text">
                            <h3 class="card__title">Department of Mechanical Engineering</h3>
                            <span class="card__status">Semesters 3,5,7</span>
                        </div>          
                        </div>
                    </div>
                    </a>
                </li>    
                </ul>
                </div>
                <ModalCivil open={openModalCivil} onClose={()=> setOpenModalCivil(false)} />
                <ModalCse open={openModalCse} onClose={()=> setOpenModalCse(false)} />
                <ModalEce open={openModalEce} onClose={()=> setOpenModalEce(false)} />
                <ModalEee open={openModalEee} onClose={()=> setOpenModalEee(false)} />
                <ModalMech open={openModalMech} onClose={()=> setOpenModalMech(false)} />
    </div>
  )
}

export default mainPage
