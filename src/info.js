import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Formulaire.css';

const Info = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('formData'));
      if (data && data[id]) {
        setTitle(data[id].title);
        setContent(data[id].content);
      }
    }, [id]);
  
    const handleSave = (e) => {
      e.preventDefault();
      const data = JSON.parse(localStorage.getItem('formData'));
      data[id] = { title, content };
      localStorage.setItem('formData', JSON.stringify(data));
      navigate('/');
    };
  
    const handleDelete = () => {
      const data = JSON.parse(localStorage.getItem('formData'));
      data.splice(id, 1);
      localStorage.setItem('formData', JSON.stringify(data));
      navigate('/');
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
            <form class="form"  onSubmit={handleSave}>
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
              <button type="submit">Save</button>
                <button type="button" onClick={handleDelete}>Delete</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Info;

