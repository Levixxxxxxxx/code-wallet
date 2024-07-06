import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Formulaire.css';
const Formul = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { title, content };
    const existingEntries = JSON.parse(localStorage.getItem('formData')) || [];
    
    // Assurez-vous que existingEntries est un tableau
    if (Array.isArray(existingEntries)) {
      existingEntries.push(newEntry);
      localStorage.setItem('formData', JSON.stringify(existingEntries));
      alert('Data saved!');
    } else {
      // Si ce n'est pas un tableau, initialisez avec le nouvel élément
      localStorage.setItem('formData', JSON.stringify([newEntry]));
      alert('Data saved!');
    }

    setTitle('');
    setContent('');
  };
  return (
    <div class="container-fluid text-center">
  <div class="row">
    <div class="col-md-12 d-flex justify-content-between align-items-center shadow p-3 mb-5  header">
      <Link to="/"> <h4 class="text-light" ><strong>Code Wallet</strong> </h4></Link>
      <h6 class="text-light" >info</h6>
    </div>
    <div class="col-md-12 d-flex mb-4 justify-content-center">
    <div class="form-container">
      <form class="form" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="textarea">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    {/* <div class="col">
        <div class="d-flex justify-content-center">
               <button type="button" class="btn btn-danger me-5">DELETE</button> 
               <button type="button" class="btn btn-success">SAVE</button>
        </div>
    </div> */}
  </div>
</div>
 
  );
}

export default Formul;
