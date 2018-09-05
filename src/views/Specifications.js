import React from 'react'
import Helmet from 'react-helmet'

//import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'
import LazyImage from '../components/LazyImage'

export default ({ page, siteTitle }) => (
  <div>
    <div className='row bg-product product-bacground'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <div className='row bg-product-color'>
        <div className='product-bg1'>
          <div className='container'>
            <div className='prod-text terms'>Specifications</div>
          </div>
        </div>
      </div>
    </div>

    <div className='container contact-container terms'>
      <div className='row'>
        <Content source={page.content_pdf} />
      </div>

      <div className='pdf_container'>
        <a className='button_pdf' href={page.pdf} target='_blank'>
          {' '}
          SPECIFICATIONS{' '}
        </a>
      </div>

      <div className='row spec_imga'>
        <LazyImage src={page.image} />
      </div>
    </div>
  </div>
)
