import React, {useState, useEffect} from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'
import {connect} from 'react-redux'
import { Log } from '../services/Log'
const HostList = ({hosts, selectedHost, area}) => {

  const [hostArray, setNewHost] = useState([])




  useEffect(() => {
    
    setNewHost( hosts)
    }, [hosts])
    

  

  

  return(
    
    <Card.Group itemsPerRow={6}>

     { hostArray.map(host => <Host host={host}/>) }
    {selectedHost?  <Host host={selectedHost}/>: null}
    </Card.Group>
  )
}


export default HostList
