# React ORCID Login

![NPM](https://img.shields.io/npm/v/react-github-login.svg?style=flat)

React component for [ORCID login](https://info.orcid.org/documentation/integration-guide/sign-in-using-orcid-credentials/).

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import OrcidLogin from 'react-orcid-login';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <OrcidLogin clientId="YOUR_CLIENT_ID"
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('example')
);
```

### Props

#### `clientId`

`{string}` _required_

Client ID for ORCID OAuth application.

#### `redirectUri`

`{string}`

Registered redirect URI for ORCID OAuth application.

#### `scope`

`{string}`

Scope for ORCID OAuth application. Defaults to `'/authenticate'`.

#### `className`

`{string}`

CSS class for the login button.

#### `buttonText`

`{string}`

Text content for the login button.

#### `onRequest`

`{function}`

Callback for every request.

#### `onSuccess`

`{function}`

Callback for successful login. An object will be passed as an argument to the callback, e.g. `{ "code": "..." }`.

#### `onFailure`

`{function}`

Callback for errors raised during login.


## Development

```sh
$ npm start
```

Webpack development server starts at [http://localhost:8080](http://localhost:8080), loading [example/index.html](github.com/checkr/react-orcid-login/tree/master/example/index.html).
