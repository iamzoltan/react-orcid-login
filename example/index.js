import React from 'react';
import ReactDOM from 'react-dom';
import OrcidLogin from '../src/OrcidLogin';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <OrcidLogin clientId=""
    redirectUri=""
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('example')
);
