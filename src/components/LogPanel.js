import React, {useState, useEffect} from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'
import {connect} from 'react-redux'
const LogPanel = ({setAllStatus, errors, logAction}) => {

  const [activeAll, setActiveAll ] =  useState(false)
  

  const handelClick = () => {
    setAllStatus()
    setActiveAll(!activeAll)
    logAction(activeAll? Log.notify(`all hosts are decommission`):Log.notify(`status of all host is active`) )
  }



  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {errors.map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      

      <Button
        fluid
        color={activeAll? "green" : "red"}
        onClick={() => handelClick()}
        // {/* This isn't always going to be the same color...*/}
        content={activeAll? "DECOMMISSION ALL" : "ACTIVATE ALL"}
        // {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      />
    </Segment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setAllStatus: () => dispatch({type: "ACTIVE_ALL"}),
    logAction: message => dispatch({type: "LOG_MESSAGE", payload: {message: message}})
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LogPanel)
