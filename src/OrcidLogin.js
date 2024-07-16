import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PopupWindow from './PopupWindow';
import { toQuery } from './utils';
import logo from './ORCIDiD_iconvector.svg';

class OrcidLogin extends Component {
  static propTypes = {
    buttonText: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    clientId: PropTypes.string.isRequired,
    onRequest: PropTypes.func,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
    redirectUri: PropTypes.string,
    scope: PropTypes.string,
    responseType: PropTypes.string,
  }

  static defaultProps = {
    buttonText: 'Sign in with ORCID',
    redirectUri: '',
    scope: '/authenticate',
    responseType: 'code',
    onRequest: () => {},
    onSuccess: () => {},
    onFailure: () => {},
  }

  onBtnClick = () => {
    const { clientId, scope, responseType, redirectUri } = this.props;
    const search = toQuery({
      client_id: clientId,
      scope,
      response_type: responseType,
      redirect_uri: redirectUri,
    });
    const popup = this.popup = PopupWindow.open(
      'orcid-oauth-authorize',
      `https://sandbox.orcid.org/oauth/authorize?${search}`,
      { height: 1000, width: 600 }
    );

    this.onRequest();
    popup.then(
      data => this.onSuccess(data),
      error => this.onFailure(error)
    );
  }

  onRequest = () => {
    this.props.onRequest();
  }

  onSuccess = (data) => {
    if (!data.code) {
      return this.onFailure(new Error('\'code\' not found'));
    }
    this.props.onSuccess(data);
  }

  onFailure = (error) => {
    this.props.onFailure(error);
  }

  render() {
    const { className, buttonText, children } = this.props;
    const attrs = { onClick: this.onBtnClick };
    const logoUrl = 'https://raw.githubusercontent.com/iamzoltan/react-orcid-login/master/src/ORCIDiD_iconvector.svg';

    if (className) {
      attrs.className = className;
    }

    return (
      <button {...attrs} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoUrl} alt="Orcid Logo" style={{ width: '18px', height: 'auto', paddingRight: '5px' }} />
        { children || buttonText }
      </button>
    );
  }
}

export default OrcidLogin;
