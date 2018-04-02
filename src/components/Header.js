import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  state = {
    open: false
  }

  toggleHeader = () => this.setState(({ open }) => ({ open: !open }))

  componentDidUpdate () {
    const { open } = this.state
    if (open) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  handleClick = () => this.toggleHeader()

  render () {
    const { open } = this.state
    return (
      <div id='header'>
        <div className='container'>
          <nav className='navbar navbar-default' role='navigation'>
            <div className='navbar-header'>
              <div className='container'>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                      <NavLink
                        onClick={this.closeModal}
                        className='navbar-brand'
                        to='/'
                      >
                        <img className='logo' />
                      </NavLink>
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                      <p className='position-data design-manufacture'>
                        DESIGN &amp; MANUFACTURE OF ADAPTAKERBS IN AUSTRALIA
                        SINCE 1989
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                  <button
                    type='button'
                    className='navbar-toggle'
                    data-toggle='modal'
                    data-target='#myModal'
                    onClick={this.handleClick}
                  >
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                  </button>
                  <div
                    className={`modal fade ${open ? 'in' : ''}`}
                    id='myModal'
                    style={
                      open
                        ? {
                          display: 'block',
                          opacity: 1,
                          paddingLeft: 0
                        }
                        : {}
                    }
                  >
                    <div className='modal-dialog'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 modal-logo'>
                            <NavLink
                              onClick={this.closeModal}
                              className='navbar-brand'
                              to='#'
                            >
                              <img className='logo' />
                            </NavLink>
                          </div>
                          <div className='col-lg-6 col-sm-6 col-sm-6 col-xs-12'>
                            <button
                              type='button'
                              className='navbar-toggle modal-collapse'
                              data-toggle='modal'
                              data-target='#myModal'
                              onClick={this.handleClick}
                            >
                              <span className='icon-bar' />
                              <span className='icon-bar icon-bar-right' />
                              <span className='icon-bar' />
                            </button>
                          </div>
                        </div>
                        <div className='modal-body'>
                          <div className='row home-row'>
                            <div className='col-md'>
                              <NavLink onClick={this.closeModal} to='/'>
                                <p className='modal-home'>HOME</p>
                              </NavLink>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md'>
                              <NavLink
                                onClick={this.closeModal}
                                to='/products/'
                              >
                                <p className='modal-product'>PRODUCTS</p>
                              </NavLink>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md'>
                              <NavLink onClick={this.closeModal} to='/contact/'>
                                <p className='modal-contact'>CONTACT</p>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='navbar-collapse  collapse'>
                    <ul className='nav navbar-nav navbar-right'>
                      <li>
                        <NavLink
                          onClick={this.closeModal}
                          to='/'
                          className='header-homefont'
                        >
                          HOME
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={this.closeModal}
                          to='/products/'
                          className='header-font'
                        >
                          PRODUCTS
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={this.closeModal}
                          to='/contact/'
                          className='header-font contact-border'
                        >
                          CONTACT
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
export default Header
