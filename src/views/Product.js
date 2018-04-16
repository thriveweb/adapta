import React from 'react'
import Helmet from 'react-helmet'

import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'

export default ({ product }) => (
  <div>
    <Helmet>
      <title>{product.title}</title>
    </Helmet>
    <div className='row product-bacground'>
      <div className='row baground-shade'>
        <div className='product-bg1'>
          <div className='col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 '>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='para-div-place'>
                  <p className='ak-1-standard-layba'>{product.title}</p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='para-div-place'>
                  <p className='home-products-ak'>
                    HOME / PRODUCTS / AK1 STANDARD LAYBACK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12'>
          <div className='logo-div-place'>
            <img src='/images/AdaptaLogo.png' className='product-logo' />
          </div>
        </div>
      </div>
    </div>
    <div className='row'>
      <p className='go-back-to-all-pro'>{'<'} GO BACK TO ALL PRODUCTS</p>
    </div>
    <div className='row top-margin'>
      <div className='col-lg-offset-1 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
        <div className='row'>
          <div className='img-response'>
            <img src='/images/1.png' className='product-image-one' />
          </div>
        </div>
      </div>
      <div className='col-lg-1 line-copy-div'>
        <p className='line-copy-5' />
      </div>
      <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
        <div className='row'>
          <div className='text-response'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <p className='ak-1-standard-layba1'>{product.title}</p>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                <p className='dimensions-top-length'>
                  <b>Dimensions:</b>{' '}
                </p>
              </div>
              <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9'>
                <Content
                  source={product.dimensions}
                  className='base-length-305-mm-h'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 total-div'>
                <div className='col-lg-11 col-md-11 col-sm-11 col-xs-10 stormwater-div'>
                  <Content
                    source={product.content}
                    className='stormwater-pipe-conn'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <div className='center-img-div'>
          <img src={product.bottom_diagram} className='cross-section' />
          <p className='cross-section-text'>
            Cross-Section Profile &amp; Dimensions: AdaptaKerb installed in
            Concrete Kerb &amp; Channel
          </p>
        </div>
      </div>
    </div>
    <div className='row'>
      <img src={product.bottom_full_image} className='background2' />
    </div>
  </div>
)
