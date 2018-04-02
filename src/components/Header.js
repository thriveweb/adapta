import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({}) => (
  <div className='container'>
    <nav className='navbar navbar-default' role='navigation'>
      <div className='navbar-header'>
        <div className='container'>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                <NavLink className='navbar-brand' to='/'>
                  <img className='logo' />
                </NavLink>
              </div>
              <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                <p className='position-data design-manufacture'>
                  DESIGN &amp; MANUFACTURE OF ADAPTAKERBS IN AUSTRALIA SINCE
                  1989
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
            >
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <div className='modal fade' id='myModal'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 modal-logo'>
                      <NavLink className='navbar-brand' to='#'>
                        <img className='logo' />
                      </NavLink>
                    </div>
                    <div className='col-lg-6 col-sm-6 col-sm-6 col-xs-12'>
                      <button
                        type='button'
                        className='navbar-toggle modal-collapse'
                        data-toggle='modal'
                        data-target='#myModal'
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
                        <NavLink to='/'>
                          <p className='modal-home'>HOME</p>
                        </NavLink>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md'>
                        <NavLink to='/products/'>
                          <p className='modal-product'>PRODUCTS</p>
                        </NavLink>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md'>
                        <NavLink to='/contact/'>
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
                  <NavLink to='/' className='header-homefont'>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/products/' className='header-font'>
                    PRODUCTS
                  </NavLink>
                </li>
                <li>
                  <NavLink
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
)

export default Header
