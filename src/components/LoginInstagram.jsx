import React, { useState, useEffect } from 'react';
import { Button, Radio, Icon } from 'antd';
import PropTypes from 'prop-types' // eslint-disable-line import/no-extraneous-dependencies

const instagramAPIRoot = `https://api.instagram.com/oauth/authorize`
const btnDefaultStyle = {
  display: 'inline-block',
  background: 'linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
  color: '#fff',
  width: 500,
  paddingTop: 10,
  paddingBottom: 10,
  // borderRadius: 2,
  border: '1px solid transparent',
  fontSize: 16,
  fontWeight: 'bold',
  fontFamily: '"proxima-nova", "Helvetica Neue", Arial, Helvetica, sans-serif'
}

const getQueryVariable = (variable) => {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  console.error("vars -> ", vars)
  const code = vars
    .map(i => {
      const pair = i.split('=')
      if (pair[0] === variable) {
        return pair[1]
      }

      return null
    })
    .filter(d => {
      if (d) {
        return true
      }
      return false
    })
  return code[0]
}

const InstagramLogin = (props) => {
  const onBtnClick = () => {
    const { clientId, scope } = props
    const redirectUri = props.redirectUri || window.location.href
    const responseType = props.implicitAuth ? 'token' : 'code'
    window.location.href = `${instagramAPIRoot}/?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`
  }

  useEffect(() => {
    if (props.implicitAuth) {
      const matches = window.location.hash.match(/=(.*)/)
      if (matches) {
        props.onSuccess(matches[1])
      }
    } else if (window.location.search.includes('code')) {
      props.onSuccess(getQueryVariable('code'))
    } else if (window.location.search.includes('error')) {
      props.onFailure({
        error: getQueryVariable('error'),
        error_reason: getQueryVariable('error_reason'),
        error_description: getQueryVariable('error_description')
      })
    }
  });

  return (
    <Button
      type="primary"
      shape="round"
      icon="instagram"
      size="large"
      style={btnDefaultStyle}
      onClick={onBtnClick}
    >
      Login
    </Button>
  );
}

InstagramLogin.defaultProps = {
  scope: 'basic',
  implicitAuth: false,
}

InstagramLogin.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  clientId: PropTypes.string.isRequired,
  scope: PropTypes.string,
  redirectUri: PropTypes.string,
  implicitAuth: PropTypes.bool
}


export default InstagramLogin;