import React from 'react';
import './styles.css'
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
        loading...
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;