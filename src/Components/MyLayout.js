import React, { Component } from 'react';
import Style from './Style';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Style />
    {props.children}
  </div>
)

export default Layout