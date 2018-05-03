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
          <a
            href='/ADAPTA-KERB_Specifications_FINAL.pdf'
            target='_blank'
            className='download-file'
          >
            <b>Download File</b>
          </a>
        </div>
      </div>
    </div>
    <section>
      <div className='footCol_new container_main'>
        <div className='three_col'>
          <div className='col'>
            <img className='footer-logo' />
          </div>
          <div className='col'>
            <ul className='ulnone'>
              <li>
                <Link className='foot_item_link' to='/index/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='foot_item_link' to='/products/'>
                  Products
                </Link>
              </li>
              <li>
                {/* <Link className='home1 footer-spec-space' to='/'>
                  Specifications
                </Link> */}
              </li>
              <li>
                <Link className='foot_item_link' to='/contact/'>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <ul className='ulnone'>
              <li>
                <Link to='/'>Terms &amp; Conditions</Link>
              </li>
              <li>
                {/* <Link className='home1 footer-privacy-space' to='/'>
                  Privacy Policy
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div className='row rectangle-5'>
      <div className='container'>
        <div className='col-lg-11  col-md-11 col-sm-12 col-xs-12'>
          <p className='copyright-ada'>© 2018 Copyright Adapta Products</p>
        </div>
        <div className='col-lg-1 col-md-1 col-sm-12 col-xs-12'>
          <p className='copyright-ada-pro site-by'>
            <a href='https://thriveweb.com.au/' title='Web Design Gold Coast'>
              Web Design
            </a>{' '}
            - THRIVE
          </p>
        </div>
      </div>
    </div>
  </section>
)
