import  React from 'react';

import Directory from '../../components/directory/directory.component'
// import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles'

const HomePage = () => (  
  // <div className='homepage'>
  //   <Directory />
  // </div>
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;