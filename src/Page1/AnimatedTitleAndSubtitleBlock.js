import React, {Component} from 'react';
import AnimatedTyping from './AnimatedTyping.js';
import '../App.css';

class AnimatedTitleAndSubtitleBlock extends Component {
  constructor(props){
    super(props)
     this.state = {
       onTyping: 1
     };
  }

  shouldComponentUpdate(nextProps, nextState){
   
    if(this.props.text1 !== nextProps.text1){
      return true;
    }
    if(this.state.onTyping !== nextState.onTyping){
      return true;
    }
    else{
      return false;
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(this.props.text1 !== prevProps.text1){
        this.setState({onTyping: 1})
    }
  }

  componentDidMount(){
  }

  onDoneWordTyping = (num) => {
    if(this.state.onTyping < 2){
      this.setState({onTyping: this.state.onTyping + 1})
    } else  {
      if(num === 2){
        console.log("AnimatedTitleAndSubtitleBlock sends done typing")
        this.props.doneTyping()
      }
    }
  }


  render(){
  return (
    <div >
      <AnimatedTyping
        className={this.props.firstTextClassName}
        text={this.props.text1}
        speed={this.props.speed1}
        startTyping={this.state.onTyping === 1}
        doneTyping={() => this.onDoneWordTyping(1)}
        />
        <AnimatedTyping
        className={this.props.secondTextClassName}
        text={this.props.text2}
        speed={this.props.speed2}
        startTyping={this.state.onTyping === 2}
        doneTyping={() => this.onDoneWordTyping(2)}/>
    </div>
  );
  }
}

export default AnimatedTitleAndSubtitleBlock;

