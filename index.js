import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const Header=()=>{
  return(
    <div className='header'>
<span className='header-text'>Areeba Naz</span>

<br/>

<span className='header-text'>We Specialise in something...</span>
    </div>
  );
}

const Card = (props) =>
{
  return(
    <div className={props.className}>
<div className="small-div">

<img src={
 props.img
  } alt=''/>
</div>


<div className="big-div">
<span className='div-title'>
  {props.title}
</span>
<br/>
<span>
  {props.description}
</span>
    </div>
    </div>
  )
}

const Body= ()=>{
  return(
    <div id="body">
      <Header/>
      <Card
      className='section'
      img="./capture.jpg"
      title='About the Company'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    />

<Card
      className='section'
      img='./capture2.png'
      title='Our Values'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    />

    
<Card
      className='section'
      img='./capture3.png'
      title='Our Mission'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    />

      <Contact/>
    </div>
  )
}
const Contact=()=>{
  return(
    <div className='headers'>
<span className='headers-text'>Contact Us</span>

<br/>

<span className='headers-data'>
<form>


  <div class="row">
    <div class="col-25">
      <label for="contact">Contact</label>
    </div>
    <div class="col-75">
      <input 
      type="text" 
      id="contact"
       name="contact" />
    </div>
  </div>
  
  <div class="row">
    <div class="col-25">
      <label for="message">Message</label>
    </div>
    <div class="col-75">
      <input
       type="textarea"
        id="message"
         name="message"  
          />
       
    </div>
  </div>


  <br/>
  <div class="row">
    <input type="submit" value="Submit"/>
  </div>

  </form>

</span>
    </div>
  );
}

// function All()
// {
  
//   return(
//     <>

//     <Body/>
//     <Header/>
//     <Card/>

//     </>
//   );
// }
ReactDOM.render(
  
    <Body />

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
