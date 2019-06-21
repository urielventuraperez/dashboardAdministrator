import React from 'react';

const Home = ({ value }) =>{

    const adding = (v) => {
        return parseInt(v)+parseInt(v);
    }

    return(
       <div>
           <p> {value} </p>
           <p> { adding(value) } </p>
       </div>
    )
}

export default Home;