import React from 'react'
import Helmet from 'react-helmet'

//import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'

export default ({ page, siteTitle }) => (
  <div>
    <div className='row bg-product product-bacground'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <div className='row bg-product-color'>
        <div className='product-bg1'>
          <div className='container'>
            <div className='prod-text terms'>Terms And Conditions</div>
          </div>
        </div>
      </div>
    </div>

    <div className='container contact-container terms'>
      <div className='row'>
        <Content source={page.content} />
      </div>
    </div>
  </div>
)
