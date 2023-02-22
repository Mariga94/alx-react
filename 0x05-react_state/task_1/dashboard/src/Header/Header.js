import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
  return (
    <div className={css(style.appHeader)}>
      <img src={logo} alt="holberton-logo" className={css(style.appLogo)}/>
      <h1>School dashboard</h1>
    </div>
  );
}

const style = StyleSheet.create({
	appHeader: {
	  backgroundColor: '#fff',
	  borderBottom: '3px solid #e1354b',
	  height: '200px',
	},
	appLogo: {
	  width: '200px',
	  height: '200px',
	},
	appHeaderH1: {
	  display: 'inline',
	  position: 'relative',
	  top: '-6rem',
	  color: '#e1354b',
	}
  });