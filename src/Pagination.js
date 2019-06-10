import React, {Component} from 'react';
import './App.css';

class Pagination extends Component {
  constructor(props){
    super(props)
     this.state = {
     };
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.page !== nextProps.page){
      return true;
    }
    if(this.props.showErrows !== nextProps.showErrows){
      return true;
    }
    return false;
  }

  componentDidMount(){
  }

  render(){
  return (
    <div className="Pagination">
      {(this.props.page !== 1 && this.props.showErrows)
        ? <button className="pagination-arrow-a pagination-arrow-left" onClick={()=>this.props.flipPage("prev")}>
            <i className="fas fa-angle-left pagination-arrow fa-2x"></i>
          </button>
        : ""
      }
      {(this.props.page !== 3 && this.props.showErrows)
        ? <button className="pagination-arrow-a pagination-arrow-a-right" onClick={()=>this.props.flipPage("next")}>
            <i className="fas fa-angle-right pagination-arrow fa-2x"></i>
          </button>
        : ""
      }
      
    </div>
  );
  }
}


export default Pagination;

