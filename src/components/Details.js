import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'
import {connect } from 'react-redux'
const Details = ({host}) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.


  ///we need to pass to hostINfo the info about hte selected host 
  const renderSomething = () => (
      <div>
        {host? <HostInfo host={host}/> :   <Image size='medium' src={Images.westworldLogo}/>}
       
    </div>
    
  )

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

const mapStateToProps = state => {
  return {
    host: state.selectedHost
  }
}

export default connect(mapStateToProps) (Details)
