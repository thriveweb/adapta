import React from 'react'
import { Link } from 'react-router-dom'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <section id='footer'>
    <div className='row Bitmap2'>
      <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
        <div className='download-file-div '>
          <p className='adapta-kerb-specifica '>ADAPTAKERB SPECIFICATIONS</p>
          <p className='download-adapta-kerb'>
            DOWNLOAD ADAPTAKERB SPECIFICATION SHEET
          </p>
        </div>
      </div>
      <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center'>
        <div className='mask-copy-7'>
          <a className='download-file'>
            <b>Download File</b>
          </a>
        </div>
      </div>
    </div>
    <section>
      <div className='row policy-doc-row'>
        <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 footer-col'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center'>
            <img className='footer-logo' />
          </div>
          <div className='col-lg-offset-3 col-lg-3 col-md-ofset-3  col-md-3  col-sm-12 col-xs-12 footer-col'>
            <ul className='ulnone'>
              <li>
                <Link className='home1' to='/index/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='home1 footer-text-space' to='/products/'>
                  Products
                </Link>
              </li>
              <li>
                <Link className='home1 footer-spec-space' to='/'>
                  Specifications
                </Link>
              </li>
              <li>
                <Link className='home1 footer-contact-space' to='/contact/'>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-offset-1 col-lg-6 col-md-offset-1 col-md-5  col-sm-12  col-xs-12 footer-margin footer-col'>
          <ul className='ulnone ul-tc'>
            <li>
              <Link className='home1 footer-terms-space' to='/'>
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link className='home1 footer-privacy-space' to='/'>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div className='row rectangle-5'>
      <div className='container'>
        <div className='col-lg-11  col-md-11 col-sm-12 col-xs-12'>
          <p className='copyright-ada'>© 2018 Copyright Adapta Products</p>
        </div>
        <div className='col-lg-1 col-md-1 col-sm-12 col-xs-12'>
          <p className='copyright-ada-pro site-by'>Site by: Thrive Web</p>
        </div>
      </div>
    </div>
  </section>
)
