import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import {connect} from "react-redux"
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'
class App extends Component {


  componentDidMount = () =>{
  this.fetchHost()
  this.fetchAreas()
  }



  fetchHost(){
    fetch("http://localhost:4000/hosts")
    .then(resp => resp.json())
    .then(hosts => this.props.setHosts(hosts))
  }

  fetchAreas(){
 
    fetch("http://localhost:4000/areas")
    .then(resp => resp.json())
    .then(areas => this.props.setAreas(areas))
  }
  
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
        <WestworldMap/>
        <Headquarters/>
      </Segment>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setHosts: hosts => dispatch({type: "SET_HOSTS", payload: {hosts: hosts}}),
    setAreas: areas => dispatch({ type: "SET_AREAS", payload: {areas: areas}})
  }
}

export default connect(null, mapDispatchToProps) (App);
