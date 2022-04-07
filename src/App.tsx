import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './NavBar';
import HorizontalLabelPositionBelowStepper from './Steppers';
import Types from './Typography';
import BasicStack from './Stacks';
import CustomizedDialogs from './Dialog';
import CustomButons from './SubmitButton';

function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <HorizontalLabelPositionBelowStepper/>
      <Types/>
      <BasicStack/>
      <CustomButons/>
    
      
    </>
  );
}

export default App;
