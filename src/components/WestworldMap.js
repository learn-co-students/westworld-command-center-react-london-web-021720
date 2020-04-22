import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'
import {connect} from 'react-redux'

const WestworldMap = ({areas, hosts}) => {

  return (
    <Segment id="map" >
      {areas.map(area => <Area hosts={hosts.filter(host =>  host.area === area.name)} area={area}/>
         
         )}
    </Segment>
  )
}

const mapStateToProps = state => {
  return{
    areas: state.areas,
    hosts: state.hosts
  }
}

export default connect(mapStateToProps) (WestworldMap)
