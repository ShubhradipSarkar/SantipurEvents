// components/ScrollMenu.js

import React from 'react';
import Image from 'next/image';
import Card_ from './Card';
const ScrollMenu = ({business}) => {
  return (
    <div
      style={{
        // backgroundColor: '#333',
        overflow: 'auto',
        
        whiteSpace: 'nowrap',
      }}
      className="scrollmenu"
    >
        <div
            href="#home"
            style={{
            display: 'inline-block',
            color: 'white',
            textAlign: 'center',
            paddingRight: '14px',
            textDecoration: 'none',
            }}
        >
            <Card_ business={business}/>
        </div>
        <div
            href="#home"
            style={{
            display: 'inline-block',
            color: 'white',
            textAlign: 'center',
            paddingRight: '14px',
            textDecoration: 'none',
            }}
        >
            <Card_ business={business}/>
        </div>
        <div
            href="#home"
            style={{
            display: 'inline-block',
            color: 'white',
            textAlign: 'center',
            paddingRight: '14px',
            textDecoration: 'none',
            }}
        >
            <Card_ business={business}/>
        </div>
        <div
            href="#home"
            style={{
            display: 'inline-block',
            color: 'white',
            textAlign: 'center',
            paddingRight: '14px',
            textDecoration: 'none',
            }}
        >
            <Card_ business={business}/>
        </div>
        <div
            href="#home"
            style={{
            display: 'inline-block',
            color: 'white',
            textAlign: 'center',
            paddingRight: '14px',
            textDecoration: 'none',
            }}
        >
            <Card_ business={business}/>
        </div>
        <div
            href="#home"
            style={{
            display: 'inline-block',
            color: 'white',
            textAlign: 'center',
            paddingRight: '14px',
            textDecoration: 'none',
            }}
        >
            <Card_ business={business}/>
        </div>
        <div
            href="#home"
            style={{
            display: 'inline-block',
            color: 'white',
            textAlign: 'center',
            paddingRight: '14px',
            textDecoration: 'none',
            }}
        >
            <Card_ business={business}/>
        </div>
        <div
            href="#home"
            style={{
            display: 'inline-block',
            color: 'white',
            textAlign: 'center',
            paddingRight: '14px',
            textDecoration: 'none',
            }}
        >
            <Card_ business={business}/>
        </div>
        

    </div>
  );
};

export default ScrollMenu;
