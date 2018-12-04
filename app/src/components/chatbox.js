import React, { Component } from 'react'
import { Button, Glyphicon, Panel } from 'react-bootstrap'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types'
// import { TextInput } from 'watson-react-components/dist/components'
// import 'watson-react-components/dist/css/watson-react-components.min.css'
// import 'whatwg-fetch'

export class Chat extends Component {
  // constructor(props) {
    // super(props)
  constructor() {
    super()
    this.state = {
      loading: false,
      expanded: false
    }
    this.toggleChatbox = this.toggleChatbox.bind(this);
  }

  toggleChatbox() {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  }
  
  // {this.state.expanded &&}
  render() {
    return (
      <div>
        <div className='chatbox' style={this.state.expanded ? {bottom: 60 + 'px'} : {bottom: 0 + 'px'}}>
          <div className={(this.state.expanded ? 'chatboxanim-active' : 'chatboxanim')}>
          <Panel bsStyle="primary" className='chat-panel'>
            <Panel.Heading>
              <Panel.Title componentClass="h3">We are live...</Panel.Title>
            </Panel.Heading>
            <Panel.Body style={{height: 300 + 'px', overflow: 'auto'}}>Panel content</Panel.Body>
          </Panel>
        </div></div>
        <Button bsStyle="info" className='chatbutton' onClick={this.toggleChatbox}>
          {this.state.expanded 
            ? (
                <CSSTransition
                  classNames="chatbuttonanim">
                  <Glyphicon glyph="remove" />
                </CSSTransition>  
              )
            : (
                <CSSTransition
                  classNames="chatbuttonanim">
                  <Glyphicon glyph="comment" />
                </CSSTransition>  
              )
          }
        </Button>
      </div>
    )
  }
}
// Chat.propTypes = {
//     query: PropTypes.string.isRequired,
//     keyword: PropTypes.string.isRequired
// }
