import React, {Component} from 'react';
import './Page2.css';
import Paragraph from './Paragraph.js'

class Page2 extends Component {
  constructor(props){
    super(props)
     this.state = {
     };
  }

  componentDidMount(){
  }


  render(){
  return (
      <div className="page2">
        <div className="row">
          <h2 className="main-titles">Experiance</h2>
          <Paragraph
            company="Duplitrade"
            title="Full-Stack Developer"
            date="October 2018 - Now, Herzelia"
            description="Maintain and develop new features for the startup platform on CentOS 7 server using VIM IDE.  
            Backend is developed with PHP, Idiorm, and queries with phpMyAdmin and MySQL.
            Frontend developed with React or twig, and vanilla javascript."/>
          <Paragraph
            company="Mindflow"
            title="Front End Web Developer intern"
            date="April 2018 - October 2018 , Tel Aviv"
            description="Developed web apps from scratch, using VueJS / React. including: Express, REST API, Socket.io, HTML5 Canvas & responsive design."/>
        </div>
        <div className="brake"></div>
        <div className="row">
        <Paragraph
            company="“She Works” startup"
            title="WP demo interactive site"
            date="March 2017 - August 2017,  Tel Aviv"
            description="Developing the startup demo on wordpress using HTML,  CSS and JavaScript, finding solutions for problems, explore relevant materials and more. Had experience on deploying the site with shell commands"/>
          <h2 className="main-titles">Education</h2>
          <Paragraph
            company="Open university"
            title="Student for computer science degree"
            date="October 2017 - Now, Tel Aviv campus"
            description=""/>
        </div>
      </div>
  );
  }
}


export default Page2;

