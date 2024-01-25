import React from 'react';
import SpinnerGif from './SpinnerGif.gif'

const Spinner =()=> {
        return (
            <div className="container text-center my-3 ">
                <img src={SpinnerGif} alt="Spinner" />
            </div>
        )
    
}


export default Spinner;