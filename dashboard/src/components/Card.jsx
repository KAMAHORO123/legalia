import React, { useState } from 'react';
import '../styles/card.css';
import { BiBuilding } from 'react-icons/bi';
import assets from '../assets/cross_icon.png';
import axios from 'axios';

const cases = [
    {
        title: "Legal Consultation",
        duration: "1 Hour",
        cost: "$100",
        icon: <BiBuilding />,
    },
    {
        title: "Lawyers",
        duration: "2 Hours",
        cost: "$200",
        icon: <BiBuilding />,
    },
    {
        title: "Cases",
        duration: "3 Hours",
        cost: "$300",
        icon: <BiBuilding />,
    }
];

const Card = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [formData, setFormData] = useState({
    case: '',
    lawyer: '',
    duration: '',
    cost: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleCardClick = (index) => {
    setSelectedCase(cases[index]);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSuccessMessage('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/cases/create', formData);
      console.log(response.data);
      setFormData({
        case: '',
        lawyer: '',
        duration: '',
        cost: ''
      });
      setSuccessMessage('User successfully added.');
      // Close popup after 3 seconds
      setTimeout(() => {
        handleClosePopup();
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className='card--container'>
          {cases.map((item, index) => (
              <div key={index} className='card' onClick={() => handleCardClick(index)}>
                  <div className='card--cover'>{item.icon}</div>
                  <div className='card--title'>
                      <h2>{item.title}</h2>
                  </div>
              </div>
          ))}
      </div>
      {popupOpen && (
        <CardPopUp selectedCase={selectedCase} onClose={handleClosePopup} onSubmit={handleSubmit} formData={formData} handleChange={handleChange} />
      )}
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

const CardPopUp = ({ selectedCase, onClose, onSubmit, formData, handleChange }) => {
  return (
    <div className='cases-popup'>
      <form className="cases-popup-container" onSubmit={onSubmit}>
        <div className='cases-popup-title'>
          <h2>{selectedCase.title}</h2>
          <img onClick={onClose} src={assets} alt="Close" />
        </div>
        <div className="cases-popup-inputs">
          <input type="text" name="case" value={formData.case} onChange={handleChange} placeholder='Case' />
          <input type="text" name="lawyer" value={formData.lawyer} onChange={handleChange} placeholder='Lawyer' />
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} placeholder='Duration' />
          <input type="text" name="cost" value={formData.cost} onChange={handleChange} placeholder='Cost' />
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Card;
