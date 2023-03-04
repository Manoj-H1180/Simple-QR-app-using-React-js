import QRCode from 'qrcode.react';

import './App.css'
function MyComponent() {
  const data = 'https://www.frontendmentor.io';
  return (
    <div className="App">
      <div className='main'>
        <div className='card'>
          <div className='qr-container'>
          <QRCode value={data} className='qr'/>
          </div>
          <h1 className='title'>Improve your front-end skills by building projects</h1>
          <p className='para'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}
    

export default MyComponent
