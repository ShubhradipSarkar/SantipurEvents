import React from 'react'
import ResponsiveAppBar from '@/components/Navbar'
import Card_ from '../../components/Card';
import CallIcon from '@mui/icons-material/Call';
import DateCalendarServerRequest from "@/components/Cal";
import Image from 'next/image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { pink } from '@mui/material/colors';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function page() {
    const business="Book";
  return (
    <div>
        <ResponsiveAppBar />
        <div style={{margin: '5%'}}>
            <div style={{
                // backgroundColor: '#333',
                overflow: 'auto',
                
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

            <div style={{marginTop: '50px'}}>
                <div>
                <h1><AlternateEmailIcon style={{marginTop: '20px', color: pink[500]}}/> Address</h1>
                <p style={{ color: pink[500]}}>Shyamchand Bagan Lane, Lahiri Bagan, Santipur, Nadia, pin-741404</p>
                </div>
                
                <h1><CallIcon sx={{ color: pink[500], marginTop:'50px' }}/> Call us to book </h1>
                
                <h1 style={{marginTop: '50px'}}><CalendarMonthIcon sx={{ color: pink[500] }}/> Check availibility</h1>
                <DateCalendarServerRequest/>
            </div>
        </div>
    </div>
  )
}

export default page