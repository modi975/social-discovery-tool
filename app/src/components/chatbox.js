import React, { Component } from 'react'
import { Button, Glyphicon, Panel, FormGroup, FormControl, Form } from 'react-bootstrap'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types'
// import { TextInput } from 'watson-react-components/dist/components'
// import 'watson-react-components/dist/css/watson-react-components.min.css'
// import 'whatwg-fetch'

const DUMMY_DATA = [
  {
      senderId: 'Ronnie',
      text: 'Hey, how is it going?'
  },
  {
      senderId: 'John',
      text: 'Great! How about you?'
  },
  {
      senderId: 'Ronnie',
      text: 'Good to hear! I am great as well'
  }
]

export class Chat extends Component {
  // constructor(props) {
    // super(props)
  constructor() {
    super()
    this.state = {
      loading: false,
      expanded: false,
      message: ''
    }
    this.toggleChatbox = this.toggleChatbox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleChatbox() {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  }

  handleChange(e) {
   this.setState({
     message: e.target.value}) ;
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.message);
    /** send off the message */
  }
  
  // {this.state.expanded &&}
  render() {
    return (
      <div>
        <div className='chatbox' style={this.state.expanded ? {bottom: 100 + 'px'} : {bottom: 0 + 'px'}}>
          <div className={(this.state.expanded ? 'chatboxanim-active' : 'chatboxanim')}>
          <Panel bsStyle="primary" className='chat-panel'>
            <Panel.Heading>
              <Panel.Title componentClass="h3">We are live...</Panel.Title>
            </Panel.Heading>
            <Panel.Body style={{height: 300 + 'px', overflow: 'auto', paddingLeft: 0 + 'px'}}>
              <div className="message-list">
                  {DUMMY_DATA.map((message, index) => {
                      return (
                        <div key= {index} className="message">
                          <div className="message-username">
                          <div className="chat-icon">
                          </div>
                          <p style={{paddingTop: 9 + 'px'}}>{message.senderId}</p></div>
                          <div className="message-text">
                          <p>{message.text}</p></div>
                        </div>
                      )
                  })}
              </div>
            </Panel.Body>
            <Panel.Footer>
              <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                  <FormControl
                    type="text"
                    value={this.state.message}
                    placeholder="Type Your message"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Form>
            </Panel.Footer>
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
