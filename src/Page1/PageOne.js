import React, {Component} from 'react';
import AnimatedTitleAndSubtitleBlock from './AnimatedTitleAndSubtitleBlock.js';
import './Page1.css';

class Page1 extends Component {
  constructor(props){
    super(props)
     this.state = {
       texts: [
        {
          text1: ["I`m Noga"], 
          class1: "mainTitle", 
          text2: ["A frontend developer and designer"], 
          class2: "subTitle"
        },
        {
          text1: ["and... I am also"], 
          class1: "subTitle", 
          text2: ["Devoted", "Creative", "Fest learner", "And product oriented"], 
          class2:"arrayTitles"
        },
        {
          text1: ["I use: HTML, CSS, Sass, Javascript, React, Redux, VueJs, NodeJs, MongoDB, Git, VScode"], 
          class1: "subTitle", 
          text2: ["And somtimes I also use: MySql, Centos7, Vim, PHP, Wordpress, twig, Idiorm, JQuery and more ..."], 
          class2:"subTitle"
        }
       ],
       paragraphIndex: 0,
       onTypingMode: this.props.onTypingAnimation
     };
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.paragraphIndex !== nextState.paragraphIndex){
      return true;
    }
    if(this.state.onTypingMode !== nextState.onTypingMode ||
      this.props.onTypingAnimation !== nextProps.onTypingAnimation){
      return true;
    }
    return false;
  }

  componentDidMount(){
  }

  onDoneParagraphTyping = () => {
    if(this.state.texts.length - 1 > this.state.paragraphIndex){
      setTimeout( () => this.setState({paragraphIndex: this.state.paragraphIndex + 1}), 2000 )
    } else {
      this.setState({onTypingMode: false})
    }
  }

  render(){
  return (
      <div className="page1">
      { this.state.onTypingMode 
        ? <div className="opening-text">
            <div className="textBlock">
              <AnimatedTitleAndSubtitleBlock
                firstTextClassName={this.state.texts[this.state.paragraphIndex].class1}
                secondTextClassName={this.state.texts[this.state.paragraphIndex].class2}
                text1={this.state.texts[this.state.paragraphIndex].text1}
                text2={this.state.texts[this.state.paragraphIndex].text2}
                speed1={100}
                speed2={100}
                doneTyping={this.onDoneParagraphTyping}
                clearTyping={this.state.clearTyping}
              />
            </div>
          </div>
        : <div className="static-paragraph">
            <h1 className="noga">{this.state.texts[0].text1}</h1>
            <p className="noga-subTitle">{this.state.texts[0].text2}</p>
            <p className="noga-description"><b>Frontend technologies: </b> VueJS, React, Redux,  Javascript,  HTML5, CSS, Sass, JQuery, Wordpress, Twig </p>
            <p className="noga-description"><b>Backend technologies: </b> PHP, Idiorm,  MySQL, Mongo, node.js </p>
            <p className="noga-description"><b>Development tools: </b> vim,  VScode, git, centos 7</p>
          </div>
      }
   
      </div>
  );
  }
}


export default Page1;

