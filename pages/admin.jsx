import React, { useState } from 'react';
import axios from 'axios';

import styles from './admin.module.scss'

const initialValues = {
  brand: '',
  name: '',
  color: '',
  type: '',
  finish: '',
  location: '',
  website: '',
  nozzle: '',
};

const admin = () => {
  const [data, setData] = useState(initialValues);

  const handleDataInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data)

    axios.post('/api/insertFilament', {
      data: data
    }).then((response)=>{
      console.log(response)
    }).catch((error) => {
      console.log(error);
    });



  }

  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <label htmlFor='brand'>Brand</label>
        <input
          type='text'
          name='brand'
          onChange={handleDataInput}
          value={data.brand}
        />

        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          onChange={handleDataInput}
          value={data.name}
        />

        <label htmlFor='color'>Color</label>
        <input
          type='text'
          name='color'
          onChange={handleDataInput}
          value={data.color}
        />

        <label htmlFor='type'>Type</label>
        <input
          type='text'
          name='type'
          onChange={handleDataInput}
          value={data.type}
        />

        <label htmlFor='finish'>Finish</label>
        <input
          type='text'
          name='finish'
          onChange={handleDataInput}
          value={data.finish}
        />

        <label htmlFor='location'>Location</label>
        <input
          type='text'
          name='location'
          onChange={handleDataInput}
          value={data.location}
        />

        <label htmlFor='website'>Website</label>
        <input
          type='text'
          name='website'
          onChange={handleDataInput}
          value={data.website}
        />

        <label htmlFor='nozzle'>Nozzle Type</label>
        <input
          type='text'
          name='nozzle'
          onChange={handleDataInput}
          value={data.nozzle}
        />
        <button type="submit" onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default admin;
