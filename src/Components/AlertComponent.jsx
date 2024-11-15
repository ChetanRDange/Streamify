import  { useEffect } from 'react';
import React from 'react';


const AlertComponent = () => {
  useEffect(() => {
    const hasAlertBeenShown = localStorage.getItem('alertShown');

    if (!hasAlertBeenShown) {
      alert("Please kindly use VPN and also view in pc for better experience .");
      localStorage.setItem('alertShown', 'true');
    }
  }, []); 

  return ;
};

export default AlertComponent;
