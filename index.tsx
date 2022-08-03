import * as React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

ReactDOM.render(
  <QRCode value="https://www2.naveia.com.br/" />,
  document.getElementById('root')
);
