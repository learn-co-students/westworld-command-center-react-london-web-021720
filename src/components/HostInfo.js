import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import {connect} from 'react-redux'
import Area from './Area'
import { Log } from '../services/Log'
class HostInfo extends Component {
  state = {

   options: []
 
    

  }

  componentDidMount = () =>{

     this.props.areas.map(area => {
      this.state.options.push({key: area.name, text: area.name, value: area.name })
      })
  

  }
   

  handleChange = (e, {value}) => {

    const hosts = this.props.hosts.filter(host => host.area === value);
    const area = this.props.areas.filter(area => area.name === value);

    if (hosts.length < area[0].limit ) {
     this.props.setArea(value, this.props.host)

    this.props.logAction(Log.notify(`${this.props.host.firstName} was move to ${value}`))
   
    }else{
      this.props.logAction(Log.error(`${this.props.host.firstName} cannot move to ${value} because there already ${hosts.length} hosts in that area `))
    }
    
  }

  toggle = () => {

    this.props.changeStatus(this.props.host)
    this.props.logAction(Log.warn(` the status of ${this.props.host.firstName} was set to  ${this.props.host.active}`))
    
  }


  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={ this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.gender} | { true ? <Icon name='man' /> : <Icon name='woman' />}
                {  }
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.host.active? "active": "Decommissioned"}
                  // {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
                  checked={this.props.host.active? true: false}
                  // {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.host.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: host => dispatch({type:"CHANGE_STATUS", payload: {host: host}}),
    setArea: (area, host )=> dispatch({type: "SET_AREA", payload:{area: area, host: host}}),
    logAction: message => dispatch({type: "LOG_MESSAGE", payload: {message: message}})
  }
}

const mapStateToProps = state => {
  return{
    areas: state.areas,
    hosts: state.hosts
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (HostInfo)
