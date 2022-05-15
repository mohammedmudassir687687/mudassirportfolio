import React from 'react'
import './ProjContent.css'
import amazon from './amazon.gif'
import chess from './chess.gif'

const ProjContent = () => {
    return (
        <div className='main__proj__body'>
            <div className='project__container'>
                <img src={amazon} className="project__image"/>
                <div className='project__container__right'>
                    <h3 className='project__heading'>"Amazon Clone"</h3>
                    <p className='project__description'>A Full Stack Amazon clone built using React.js, Redux, Express, Firebase Auth, FireStore, Stripe.js, react-currency-format, Material UI, CSS Flexbox with back-end NoSQL database FireStore deployed on Firebase Cloud Functions and the front-end is hosted on Firebase as well.

Login functionality and authentication is done using Firebase Authentication. Functionality for users and order history storage, checkout cart items etc is done on Firestore database. The payments are processed through an external npm library stripe-js and react-stripe-js. The website for stripe is https://stripe.com.

The website for the project is https://clone-23e58.web.app/. The back-end for the project is deployed at the endpoint https://us-central1-clone-23e58.cloudfunctions.net/api.</p>
                </div>
            </div>

        <div className='project__container'>
            <div className='project__container__right'>
                <h3 className='project__heading'>"Chess"</h3>
                <p className='project__description'>A chess game created in Python using pygame package</p>
            </div>
            <img src={chess} className="project__image"/>
        </div>
            
    </div>
    )
}

export default ProjContent