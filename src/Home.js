import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Modal from 'react-modal';
import eyes from './assets/oeil.png';
import close from './assets/croix.png';

const Home = () => {
  const [formData, setFormData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('formData');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(modalContent).then(() => {
      alert('Content copied to clipboard');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };
  return (
<div class="container-fluid text-center">
  <div class="row">
    <div class="col-md-12 d-flex justify-content-between align-items-center shadow p-3 mb-5  header">
      <h4 class="text-light" ><strong>Code Wallet</strong> </h4>
   <Link to="/propos"><h6 class="text-light" >info</h6></Link>   
    </div>
    <div class="col-md-12 d-flex justify-content-end me-5">
       <Link to="/Formul"><button> 
 New
    </button> </Link>
    </div>
    <div class="col">
    {formData.length > 0 ? (
        formData.map((entry, index) => ( 
          <div className=" d-flex m-auto w-75 p-3 shadow rounded align-items-center justify-content-around mb-4" key={index}>
           <Link to={`/info/${index}`}> <h3>{entry.title}</h3></Link> 
            <div><button onClick={() => openModal(entry.content)}><img src={eyes} alt="My Local Image"/></button>  </div>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Card Content Modal"
      >
        <div class="d-flex justify-content-end">
           <button onClick={closeModal}><img src={close} alt="My Local Image"/></button>
        </div>
        <p>{modalContent}</p>
        <div class="position-absolute bottom-0 end-0">
 <button onClick={copyToClipboard}>Copy</button>
        </div>
       
       
      </Modal>
    </div>
  </div>

</div>
   
  );
}

export default Home;
