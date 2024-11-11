import React, { Component, useState,props } from 'react'
import './header.css'


export default function Header(){
  const [text,setText] = useState('') 
  const handleOnClick = () =>{
    console.log('Clicked the Submit button')
  }
  
  return (
      <>
      <div>
        <header className='header'>
            Chat Gpt 4o mini
        </header>
      </div>

      <div className='text'>
        <p className='leftToRight'>
          How Can I help you with
        </p>
        <div className='text_area'>
          <textarea placeholder='Write something'></textarea>
          <button className='submit' onClick={handleOnClick} >Submit</button>
        </div>
      </div>
      </>
    )
  }
