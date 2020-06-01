import * as React from 'react'
import { Link } from '@reach/router'
import ContactForm from "./ConnectedForm"
function Contact() {
  return (
    <div className="empty-action">
      <ContactForm/>
          {' '}
        <Link to="/">Go back home</Link>
    </div>
  )
}

export default ContactForm
