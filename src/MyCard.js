import React from 'react';
import './css/mycard.css';

function MyCard(props) {
  return (
      <div class="card">
        <img src={props.avatar} alt={props.name} style={{width:"100%"}} />
        <div class="container">
          <h4><b>{props.fname}</b></h4> 
          <p>{props.username}</p> 
        </div>
      </div>
  )
}

export default MyCard