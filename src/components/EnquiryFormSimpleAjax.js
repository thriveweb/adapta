import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Enquiry Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render () {
    const { name, subject, action } = this.props

    return (
      <form
        className='EnquiryForm'
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='email'
      >
        {this.state.alert && (
          <div className='EnquiryForm--Alert'>{this.state.alert}</div>
        )}
        <div className='info-div'>
          <div className='col-lg-6  col-md-6 col-sm-12 col-xs-12'>
            <div className='row contact-list-row'>
              <div className='col-lg-12 col-md-12  col-sm-12 col-xs-12'>
                <input
                  type='text'
                  name='name'
                  placeholder='NAME'
                  className='inputfields '
                  required
                />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div className='row contact-list-row'>
              <div className='col-lg-12 col-md-12  col-sm-12 col-xs-12'>
                <input
                  type='text'
                  name='phone'
                  placeholder='PHONE NUMBER'
                  className='inputfields '
                />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div className='row contact-list-row'>
              <div className='col-lg-12 col-md-12  col-sm-12 col-xs-12'>
                <input
                  type='email'
                  name='email2'
                  placeholder='EMAIL ADDRESS'
                  className='inputfields '
                  required
                />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div className='row contact-list-row'>
              <div className='col-lg-12 col-md-12  col-sm-12 col-xs-12'>
                <textarea
                  className='inputfields textarea-field'
                  placeholder='ENQUIRY'
                  name='enquiry'
                  required
                />
              </div>
            </div>
            <input type='text' name='email' style={{ display: 'none' }} />
            {!!subject && (
              <input type='hidden' name='subject' value={subject} />
            )}
            <input type='hidden' name='form-name' value={name} />
            <div
              className='mask-copy-6 enquire-btn enquire-button-1'
              style={{
                clear: 'both',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              
             <div data-netlify-recaptcha></div>

              <input
                className='view-products'
                type='submit'
                value='Enquire'
                disabled={this.state.disabled}
                style={{
                  border: 'none',
                  background: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%'
                }}
              />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
