import React from 'react'
import './Contact.css'
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Bio from './Bio';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div className='main__body'>  
        <Navigation />
        <Bio />
        <div className='main__content'>
          <Header />
            {/* <ProjContent /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47978.37378205846!2d-72.99244140394876!3d41.272991644205064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d87d9ef6c193%3A0x961955cf93705bc3!2sWest%20Haven%2C%20CT%2006516!5e0!3m2!1sen!2sus!4v1652166855984!5m2!1sen!2sus" width="100%" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='contact__paragraph'>
              <small><PhoneIcon fontSize='small'/> +1 (475) 227 7451</small>
              <small><MailOutlineIcon fontSize='small'/> mohammedmudassir687687@gmail.com</small>
              <small><LocationOnIcon fontSize='small'/> West Haven, Connecticut, United States</small>
            </div>
          {/* <Footer /> */}
        </div>
    </div>
  )
}

export default Contact