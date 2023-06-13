import React, { Component } from 'react';
import './App.css';
import WordMemorize from './wordMemorize/wordMemorize';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <>
        <ToastContainer/>
        <WordMemorize/>
      </>
    );
  }
}

export default App;