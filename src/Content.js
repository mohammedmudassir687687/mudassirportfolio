import React from 'react'
import './Content.css'
import Card from './Card'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Content = () => {
  return (
    <div className='align__content'>
      <h1 id='skills'><AutoStoriesIcon fontSize='large'/> Skills</h1>
      <small className='info'>Click on the cards for more info.</small>
      <div className='content'>
        <Card 
          title='Web Development'
          paragraph=' MongoDB, Express, React, Node, Mongoose, Firebase, Firestore, REST API, Postman,MongoDB Compass, JWT OAuth, Bcrypt, HTML, CSS, CSS Flexbox, Git.'
        />
        <Card 
          title='Libraries and Frameworks'
          paragraph='Bootstrap, Material-UI, JQuery, Next.js'
        />
        <Card 
          title='Unit Testing'
          paragraph='Jest, Supertest'
        />
        <Card 
          title='Backend'
          paragraph='SQL, Database Modeling'
        />
        <Card 
          title='Cloud'
          paragraph='Firebase Cloud Functions, AWS'
        />
        <Card 
          title='CLI'
          paragraph='Powershell, Git Bash, Linux Bash'
        />
        <Card 
          title='Deployment'
          paragraph='Heroku, Vercel, Github'
        />
        <Card 
          title='DevOps'
          paragraph='Redis, Docker'
        />
        <Card 
          title='Academic'
          paragraph='Algorithms, Data structures, Distributed Systems, Systems Programming, Operating Systems, Artificial Intelligence'
        />
        <Card 
          title='Operating Systems'
          paragraph='Ubuntu, Fedora, Kali Linux, Windows'
        />
        <Card 
          title='IDEs'
          paragraph='Visual Studio Code (VS Code), PyCharm, Eclipse, Atom, IntelliJ IDEA, Sublime Text, CodeBlocks'
        />
      </div>
      {/* <p>Web Development: MongoDB, Express, React, Node, Mongoose, Firebase, Firestore, REST API, Postman,MongoDB Compass, JWT OAuth, Bcrypt, HTML, CSS, CSS Flexbox, Git.
Libraries and Frameworks: Bootstrap, Material-UI, JQuery, Next.js
Unit Testing: Jest, Supertest.
Backend: SQL, Database Modeling.
Cloud: Firebase Cloud Functions, AWS.
CLI: Powershell, Git Bash, Linux Bash.
Deployment: Heroku, Vercel, Github
DevOps: Redis, Docker
Academic: Algorithms, Data structures, Distributed Systems, Systems Programming, Operating Systems, ArtificialIntelligence.
Operating Systems: Ubuntu, Fedora, Kali Linux, Windows.
IDEs: Visual Studio Code (VS Code), PyCharm, Eclipse, Atom, IntelliJ IDEA, Sublime Text, CodeBlocks.</p> */}
    </div>
    
  )
}

export default Content