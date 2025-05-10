import React from 'react';
import ProjectBox from './ProjectBox';
import Auth from '../images/Auth.png';
import FirebaseCrud from '../images/FirebaseCrud.png';
import Adminpanle from '../images/Adminpanle.png';
import boot from '../images/Bootsrtap.png';
import Tickte from '../images/Ticket-ganretor.png'

import SimonSaysGame from '../images/SimonSaysGame.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={SimonSaysGame} projectName="SimonSaysGame" />
        <ProjectBox projectPhoto={boot} projectName="Responsiveweb" />
        <ProjectBox projectPhoto={Adminpanle} projectName="BlogAdmin" />
        <ProjectBox projectPhoto={FirebaseCrud} projectName="Firebasecrud" />
        <ProjectBox projectPhoto={Tickte} projectName="TicketSystem" />
      </div>

    </div>
  )
}

export default Projects