import  { useEffect } from 'react';

const AlertComponent = () => {
  useEffect(() => {
    const hasAlertBeenShown = localStorage.getItem('alertShown');

    if (!hasAlertBeenShown) {
      alert("It seems that some content or websites may not be accessible in your region. If you are facing difficulties accessing certain features or loading resources, please consider using a VPN to ensure a smoother experience and access to the full content.");
      localStorage.setItem('alertShown', 'true');
    }
  }, []); 

  return ;
};

export default AlertComponent;
