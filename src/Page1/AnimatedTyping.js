import React, {Component} from 'react';
import '../App.css';

class AnimatedTyping extends Component {
  constructor(props){
    super(props)
     this.state = {
       typing: "",
       letterIndex: 0,
       sentanceIndex: 0
     };
  }

  componentDidMount(){
    if(this.props.startTyping){
      this.typingText();
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.startTyping !== nextProps.startTyping){
      return true;
    }
    if(this.state.typing !== nextState.typing ||
      this.state.letterIndex !== nextState.letterIndex ||
      this.state.sentanceIndex !== nextState.sentanceIndex){
      return true;
    }
    if(this.props.text !== nextProps.text){
      return true;
    }
    if(this.props.clearTyping !== nextProps.clearTyping){
      return true;
    }
    return false
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.startTyping !== prevProps.startTyping && this.props.startTyping){
        this.typingText();
    }
    if(this.props.text !== prevProps.text){
      this.setState({typing: ""})
    }
  }

  typingText = () => {
    const speed = this.props.speed;
    const type = this.props.text[this.state.sentanceIndex].substring(0, this.state.letterIndex);
    this.setState({typing: type, letterIndex: this.state.letterIndex + 1})
    const typeSantance = setTimeout(this.typingText, speed);
    if(this.state.letterIndex > this.props.text[this.state.sentanceIndex].length) {
      this.setState({letterIndex: 0})
      clearTimeout(typeSantance);

      
      //if there is more santences on the same line
      if(this.props.text.length -1 > this.state.sentanceIndex) {
        this.setState({sentanceIndex: this.state.sentanceIndex + 1, letterIndex: 0})
        setTimeout(this.typingText, 2500);
      } else {
        console.log("AnimatedTyping sends done typing")
        this.setState({sentanceIndex: 0})
        this.props.doneTyping()
      }
    
    }
  }

  render(){
  return (
    <div className={this.props.className}>
      {this.state.typing}{this.props.startTyping ? <span className="underline">_</span> : ""}
    </div>
  );
  }
}

export default AnimatedTyping;



/*


(this.props.text !== prevProps.text && this.props.text !== null)
*/