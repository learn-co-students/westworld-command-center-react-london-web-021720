import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'
import {connect} from 'react-redux'
const ColdStorage = ({hosts}) => (



  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>

   <HostList hosts={hosts.filter(host => host.active === false)}/>
  

    </Segment>
  </Segment.Group>
)

const mapStateToProps = state => {
  return {
    hosts: state.hosts
  }
}
export default connect(mapStateToProps)( ColdStorage)
