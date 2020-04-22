import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux'

const Host = ({host, selectedH, selectedHost}) => {


  
  return(
    <Card
      className={ selectedH && selectedH.id === host.id?  "host selected" : "host"}
      // {/* NOTE: The className "host selected" renders a different style than simply "host". */}
      onClick={() => selectedHost(host)}
      image={ host.imageUrl}
      raised
    />
  )
}

const mapDispatchToProps = dispatch =>{
  return {
    selectedHost: host => dispatch({type: "SELECTED_HOST", payload: {host: host}})
  }
}

const mapStateToPros = state => {
  return {
    selectedH: state.selectedHost
  }
}
export default connect(mapStateToPros, mapDispatchToProps) (Host)
