import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { pink } from '@mui/material/colors';
import BasicRating from './Rating';

export default function Card_({business}) {
  return (
    <Card sx={{ width: 300 , backgroundColor: pink[500]}}>
      

      <Image src="/lodge1.jpg" alt="lodge" height={190} width={300} loading='lazy'/>
      {/* <Image src="/lodge1.jpg" alt="lodge" fill={true} style={{objectFit: ""}}/> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3 style={{fontWeight:'bold', color:'white'}}>Star Palace</h3>
          <center><BasicRating/></center>
          
        </Typography>
        
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Book Lodge</Button> */}
        <Link href="/booking">
        <button
        style={{
          alignItems: 'center',
          backgroundImage: 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)',
          border: '0',
          borderRadius: '28px',
          boxShadow: 'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
          boxSizing: 'border-box',
          color: '#FFFFFF',
          display: 'flex',
          fontFamily: 'Phantomsans, sans-serif',
          fontSize: '20px',
          justifyContent: 'center',
          lineHeight: '1em',
          maxWidth: '270px',
          minWidth: '270px',
          padding: '3px',
          textDecoration: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'manipulation',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          justifyContent: 'center',
          // align?Items: 'center',
        }}
        className="button-64"
        role="button"
      >
        <span
          style={{
            backgroundColor: 'rgb(5, 6, 45)',
            padding: '16px 5px',
            borderRadius: '26px',
            width: '100%',
            height: '100%',
            transition: '300ms',
          }}
        >
          {business}
        </span>
        </button>
        </Link>
        

      </CardActions>
    </Card>
  );
}