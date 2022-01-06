import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageSuccess = ({ msg }) => (
  <Message
    success
    header='Su número de registro es: '
    content={msg.id}
    style={{
      textAlign: 'center',
      width: 300,
      margin: 'auto',
      color: 'black',
      backgroundColor: 'white'
    }}
  />
)

export default MessageSuccess
