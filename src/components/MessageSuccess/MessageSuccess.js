import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageSuccess = ({ msg }) => (
  <Message
    success
    header='Su número de registro es: '
    content={msg.id}
    style={{ textAlign: 'center' }}
  />
)

export default MessageSuccess
