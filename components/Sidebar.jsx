import React, { Component } from 'react'
import './sidebar.css'

export default function Sidebar(){
    return (
      <div className='sidebar'>
        <button className='b' id='b1'>New Chat</button>
        <button className='b' id='b2'>Delete</button>
        <button className='b' id='b3'>Log in</button>
        <button className='b' id='b4'>Log Out</button>
      </div>
      )
    }

