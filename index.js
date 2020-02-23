import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Api extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:"https://love-calculator.p.mashape.com/getPercentage?fname=John&sname=Alice",percent:"", para:"",isloaded:false
    }
     this.changestate = this.changestate.bind(this); 
     this.updatename = this.updatename.bind(this); 
     this.updatenametwo = this.updatenametwo.bind(this); 
  }

  updatename(e){
    this.setState({
      namefirst:e.target.value
    })
  }

   updatenametwo(e){
    this.setState({
      namesecond:e.target.value
    })
  }
   changestate(e){
    e.preventDefault();
     fetch(`https://love-calculator.p.mashape.com/getPercentage?fname=${this.state.namefirst}&sname=${this.state.namesecond}`,{
        headers: {
    'Accept': 'application/json',
    'X-Mashape-Key':          'vtm09D3070mshpciarDqOMdviP2Hp1WJ4NgjsnPMGFTTGXx6cg',
    }

     }).then(res=> res.json()).then(
       (result)=>{
         this.setState({
           percent:result.percentage,
           para:result.result,
           sname:result.sname,
           fname:result.fname,
           isloaded:true,
           namefirst:"",
           namesecond:""

         })
         console.log(result)
       }
     )
   }
  render(){
    return(

         <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Love calculator</h1>
          <p className="lead">We all know that a name can tell a lot about a person</p>
            <div className="wrapper">
          <form className="form-signin"> 
            <br/>
             <input type="text" className="form-control" name="name" placeholder="Enter your name" required="" onChange={this.updatename} value={this.state.namefirst}/>
              <br/>
              <i class="twa twa-heart"> </i>
              <input type="text" className="form-control" name="name"     placeholder="Enter partner's name" required="" onChange={this.updatenametwo} value={this.state.namesecond}/>
                <br/>
                <input className="btn-calculate btn btn-warning" type="submit" value="Calculate Love %" tabIndex="5" onClick={this.changestate}/>
              <br/>
              <br/>
              <p className="display-5 text-success" > {this.state.sname}</p> 
                <p> ❤️</p>
              <p className="display-5 text-success"> {this.state.fname}</p>
              <p className="display-4"> {this.state.percent}</p>
              <p className="display-6"> {this.state.para}</p>


          </form>
          </div>

  <p class="">Made with ❤️ by Parvez khan</p>
        </div>
        
      </div>
      
    </div>

    );
  }
}
render(<Api />, document.getElementById('root'));
