import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'
import {connect} from 'react-redux'
const Area = ({area, hosts, selectedHost}) => (

  <div className='area' id={area.name}>
    <h3 className='labels'>{area.name}</h3>

<HostList selectedHost={selectedHost.area === area.name && selectedHost.active? selectedHost: null} 

hosts={ hosts.filter(host => host.active && host.id != selectedHost.id === true) } area={area}/>

  </div>

)


const mapStateToProps = state => {
  return {
    selectedHost: state.selectedHost

  }
}

export default connect(mapStateToProps) (Area);
