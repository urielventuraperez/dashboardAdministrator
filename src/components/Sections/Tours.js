import React from 'react';
import List from '../Layouts/ToursList';
import Form from '../Layouts/TourForm';

const Tours = () =>{
    const tours = "Tours";
    return(
        <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
        <h2>{ tours }</h2>
          <List />
          <Form />
        </div>
      </div>
    )
}

export default Tours;