import React from 'react'
import ResponsiveAppBar from '@/components/Navbar'
import Card_ from '../../components/Card';
import CallIcon from '@mui/icons-material/Call';
import DateCalendarServerRequest from "@/components/Cal";
import Image from 'next/image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { pink } from '@mui/material/colors';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BasicRating from "@/components/Rating"
import StarsIcon from '@mui/icons-material/Stars';
function page() {
    const business="Book";
  return (
    <div>
        <ResponsiveAppBar />
        
        <div style={{margin: '5%'}}>
        <div style={{marginTop: '20px',}}>
        
        <h2><AccountBalanceIcon style={{ color: pink[500]}}/> Geeta Palace</h2>
        </div>
            <div style={{
                // backgroundColor: '#333',
                overflow: 'auto',
                marginTop: '20px',
                whiteSpace: 'nowrap',
            }}
            className="scrollmenu">

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
                    <Image src="/lodge1.jpg" alt="lodge" height={300} width={300} />
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
                    <Image src="/lodge1.jpg" alt="lodge" height={300} width={300} />
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
                    <Image src="/lodge1.jpg" alt="lodge" height={300} width={300} />
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
                    <Image src="/lodge1.jpg" alt="lodge" height={300} width={300} />
                </div>
                <div
                    href="#home"
                    style={{
                    display: 'inline-block',
                    color: 'white',
                    textAlign: 'center',
                    paddingRight: '14px',
                    textDecoration: 'none',
                    borderRadius:'25px',
                    }}
                >
                    <Image src="/lodge1.jpg" alt="lodge" height={300} width={300} />
                </div>
            {/* <div
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
            </div> */}
            {/* <div
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
            </div> */}
            </div>
            <div style={{display:'flex', flexDirection:'row',  marginTop:'20px'}}>
            <StarsIcon style={{color: pink[500],}}/><BasicRating/>
            </div>
            
            <div style={{marginTop: '20px'}}>
                <div>
                <h2><AlternateEmailIcon style={{color: pink[500]}}/> Address</h2>
                <p style={{ color: pink[500]}}>Shyamchand Bagan Lane, Lahiri Bagan, Santipur, Nadia, pin-741404</p>
                </div>
                
                <h2><CallIcon sx={{ color: pink[500], marginTop:'20px' }}/> Call us to book </h2>
                
                <h2 style={{marginTop: '20px'}}><CalendarMonthIcon sx={{ color: pink[500] }}/> Check availibility</h2>
                <DateCalendarServerRequest style={{marginTop:'20px'}}/>
            </div>
        </div>
    </div>
  )
}

export default page