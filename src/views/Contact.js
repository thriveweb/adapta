import React from 'react'
import Helmet from 'react-helmet'

import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'

export default ({ page, siteTitle }) => (
  <div>
    <div className='row bg-product'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <div className='row bg-product-color'>
        <div className='product-bg1'>
          <div className='container'>
            <div className='row'>
              <div className='container'>
                <div className='col-lg-6 col-sm-6 col-md-6 col-xs-12  lineHeight'>
                  <div className='prod-text'>CONTACT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-11 col-md-10 col-sm-10'>
            <Content className='Contact--Content' source={page.content} />
          </div>
        </div>
      </div>
    </div>
    <div className='container contact-container'>
      <div className='row'>
        <div className='col-lg-6  col-md-6 col-sm-12 col-xs-12'>
          <div className='info-div'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='row info-list-row'>
                <div className='col-lg-2 col-md-2 col-sm-1 col-xs-1 list-row-img'>
                  <img
                    src='/images/BG.svg'
                    className='bg-copy contact-bg-copy'
                  />
                  <img
                    src='/images/BG.svg'
                    className='bg-copy1 contact-bg-copy'
                  />
                  <img src='/images/email.svg' className='image-one' />
                </div>
                <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                  <p className='address-data'>{page.address}</p>
                </div>
              </div>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='row info-list-row'>
                <div className='col-lg-2 col-md-2 col-sm-1 col-xs-1 list-row-img'>
                  <img
                    src='/images/BG.svg'
                    className='bg-copy contact-bg-copy'
                  />
                  <img
                    src='/images/BG.svg'
                    className='bg-copy1 contact-bg-copy'
                  />
                  <img src='/images/telephone.svg' className='image-one' />
                </div>
                <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                  <p className='tele-data'>
                    t: {page.phone}
                    <br />f: {page.fax}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='row info-list-row'>
                <div className='col-lg-2 col-md-2 col-sm-1 col-xs-1 list-row-img'>
                  <img
                    src='/images/BG.svg'
                    className='bg-copy contact-bg-copy'
                  />
                  <img
                    src='/images/BG.svg'
                    className='bg-copy1 contact-bg-copy'
                  />
                  <img src='/images/mail.svg' className='image-one' />
                </div>
                <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                  <p className='address-data email-data'>{page.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EnquiryFormSimpleAjax />
      </div>
    </div>
  </div>
)
