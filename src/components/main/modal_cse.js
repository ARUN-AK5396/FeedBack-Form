/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const ModalCse = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <h2>Select your Semester</h2>
        <div className="semester">
          <Link to="/cse_sem3" className="sem">
            3rd Semester
          </Link>
          <Link to="/cse_sem5" className="sem">
            5th Semester
          </Link>
          <Link to="/cse_sem7" className="sem">
            7th Semester
          </Link>
        </div>
        <div className="closeBtn">
          <p onClick={onClose} className="close">
            X
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalCse;
