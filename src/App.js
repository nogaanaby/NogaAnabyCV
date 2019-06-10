import React, {Component} from 'react';
import switzerland from './assets/switzerland-no-sun.png';
import sun from './assets/sun.png';
import cloude from './assets/cloude.png';
import Page1 from './Page1/PageOne';
import Page2 from './Page2/PageTwo';
import Pagination from './Pagination.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
     this.state = {
       onPage: 1,
       onTypingAnimation: true,
       showErrows: true,
       sunPositionLeft: 1, 
       sunPositionTop: 1,
       cloudePositionTop: 69,
       cloudePositionRight: 4
     };
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.onPage !== nextState.onPage){
      return true;
    }
    if(this.state.sunPositionLeft !== nextState.sunPositionLeft){
      return true;
    }
    if(this.state.showErrows !== nextState.showErrows){
      return true;
    }
    return false;
  }

  componentDidMount(){
  }


  flipPage = (direction) => {
    if(direction === "next" && this.state.onPage === 1){
      this.moveSunLeft()
      this.moveSunDown()
      this.setState({showErrows: false})
    }
    setTimeout(() => {
      this.setState({onTypingAnimation: false})
    }, 2500);
    if(direction === "next" && this.state.onPage !== 3){
      setTimeout(() => {
        this.setState({onPage: this.state.onPage + 1, showErrows: true})
      }, 2500);
    }
    if(direction === "prev" && this.state.onPage !== 1){
      setTimeout(() => {
        this.setState({onPage: this.state.onPage - 1, showErrows: true})
      }, 2500);
    }
  }

  moveSunLeft = () => {
    const x = this.state.sunPositionLeft
    const screenWidth = window.innerWidth
    this.setState({sunPositionLeft: x+1});
    const moveLeftTimout = setTimeout(this.moveSunLeft, 5);
    if(x >= screenWidth/3) {
      clearTimeout(moveLeftTimout);
    } 
  }

  moveSunDown = () => {
    const screenWidth = window.innerWidth
    const x = this.state.sunPositionLeft
    const y = x * x/screenWidth + x/2 +1
    this.setState({sunPositionTop: y})
    const moveDownTimout = setTimeout(this.moveSunDown, 5);

    const mountainWDH = 2300/506
    const mountainWidth = 70 * screenWidth/100
    const mountainsHeight= mountainWidth / mountainWDH
    const maxHeight = window.innerHeight-mountainsHeight
   //console.log('maxHeight:',  )
    if(y >= maxHeight) {
      clearTimeout(moveDownTimout);
    } 
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
          {
            this.state.onPage === 1
            ? <Page1
                onTypingAnimation={this.state.onTypingAnimation}/>
            : ""
          }
          {
            this.state.onPage === 2
            ? <Page2/>
            : ""
          }
          <Pagination
            page={this.state.onPage}
            flipPage={this.flipPage}
            showErrows={this.state.showErrows}/>
            <img src={sun} style={{top: this.state.sunPositionTop+ "px", left: this.state.sunPositionLeft+ "px"}} className="sun" alt="logo" />
            <img src={cloude} style={{top: this.state.cloudePositionTop+"vh", right: this.state.cloudePositionRight+"em"}} className="cloude" alt="logo" />
          <img src={switzerland} className="london" alt="logo" />
          
      </header>
    </div>
  );
  }
}


export default App;

