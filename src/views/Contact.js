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
            <p className='contact-adapta-produ'>CONTACT ADAPTA PRODUCTS</p>
            <p className='contact-us-by-the-nu'>
              Contact us by the numbers below or fill out the form and we will
              get back to you shortly
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
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
                  <p className='address-data'>
                    5/23 Enterprise AvenueTweed Heads South NSW 2486
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
                  <img src='/images/telephone.svg' className='image-one' />
                </div>
                <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                  <p className='tele-data'>
                    t: 07 5522 1644
                    <br />f: 07 5522 1655
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
                  <p className='address-data email-data'>
                    info@adaptaproducts.com.au
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='info-div'>
          <div className='col-lg-6  col-md-6 col-sm-12 col-xs-12'>
            <div className='row contact-list-row'>
              <div className='col-lg-12 col-md-12  col-sm-12 col-xs-12'>
                <input
                  type='text'
                  placeholder='NAME'
                  className='inputfields '
                />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div className='row contact-list-row'>
              <div className='col-lg-12 col-md-12  col-sm-12 col-xs-12'>
                <input
                  type='text'
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
                  type='text'
                  placeholder='EMAIL ADDRESS'
                  className='inputfields '
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-offset-7 col-lg-5 col-md-offset-5 col-md-6 col-sm-12  col-xs-12 enquire-col'>
        <div className='mask-copy-6 enquire-btn enquire-button-1'>
          <a className=' view-products'>
            <b>Enquire</b>
          </a>
        </div>
      </div>
    </div>
  </div>
)
