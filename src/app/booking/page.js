import React from 'react'
import ResponsiveAppBar from '@/components/Navbar'
import Card_ from '../../components/Card';
import CallIcon from '@mui/icons-material/Call';
import DateCalendarServerRequest from "@/components/Cal";

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

            <div style={{marginTop: '50px'}}>
                <h1>call us to book <CallIcon/></h1>
                
                <p style={{fontSize: '16px', marginTop: '50px'}}>Check availibility</p>
                <DateCalendarServerRequest/>
            </div>
        </div>
    </div>
  )
}

export default page