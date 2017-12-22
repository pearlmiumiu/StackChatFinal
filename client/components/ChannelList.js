import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

function channelList(props) {

    const { messages, channels } = props;

    return (
      <ul>


      {
        channels.map(channel=>{
          return (
            <li key={channel.id}>
          <NavLink to={`/channels/${channel.id}`} activeClassName="active">
            <span># {channel.name}</span>
            <span className="badge">{ messages.filter(message => message.channelId === channel.id).length }</span>
          </NavLink>
        </li>

          )
        })
      }
       <li>
        <NavLink to='/new-channel'> Create a channel...</NavLink>
       </li> 
       
      </ul>
    );
  
}

const mapStateToProps=function(state, ownProps){ //object return by mapStateToProps become part of props that this dumm componnet receive
  return {
    messages:state.messages,
    channels: state.channels
  }
}

const innerFunc=connect(mapStateToProps)
const ChannelListContainer=innerFunc(channelList)  //connect to store, whatever the state changes in the store, it will re-render the dump component pass as props
const ContainerWithRouter=withRouter(ChannelListContainer);
export default ContainerWithRouter

