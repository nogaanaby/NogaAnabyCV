import React, {Component} from 'react';
import './Page2.css';

class Paragraph extends Component {
  constructor(props){
    super(props)
     this.state = {
     };
  }

  componentDidMount(){
  }


  render(){
  return (
      <div className="paragraph">
        <h3 className="paragraph-title"><b>{this.props.company}</b> | {this.props.title}</h3>
        <p className="paragraph-date">{this.props.date}</p>
        <p className="paragraph-description">{this.props.description}</p>
      </div>
  );
  }
}


export default Paragraph;

