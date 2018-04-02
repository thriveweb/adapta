import React from 'react'
import Helmet from 'react-helmet'

import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'

export default ({ page }) => (
  <div>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <div className='row product-bacground'>
      <div className='row baground-shade'>
        <div className='product-bg1'>
          <div className='col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 '>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='para-div-place'>
                  <p className='ak-1-standard-layba'>AK1 - STANDARD LAYBACK</p>
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
              <p className='ak-1-standard-layba1'>
                AK1 - STANDARD LAYBACK ADAPTAKERB
              </p>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                <p className='dimensions-top-length'>
                  <b>Dimensions:</b>{' '}
                </p>
              </div>
              <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9'>
                <p className='base-length-305-mm-h'>Top Length: 50mm </p>
                <p className='base-length-305-mm-h'>Base Length: 305mm </p>
                <p className='base-length-305-mm-h'>Height: 130mm </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                <p className='box-qty'>Box Qty:</p>
              </div>
              <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9'>
                <p className='box-qty-8-units-1'>8 units (1 box)</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <p className='features '>FEATURES :</p>
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 total-div'>
                <div className='col-lg-1 col-md-1 col-xs-1 col-sm-1'>
                  <img
                    src='/images/yellow-diamond.png'
                    className='bullet-points'
                  />
                </div>
                <div className='col-lg-11 col-md-11 col-sm-11 col-xs-10 stormwater-div'>
                  <p className='stormwater-pipe-conn '>
                    <b>Stormwater Pipe Connectors: </b>ALL models have a UPVC
                    connector to take either 90/100mm stormwater pipes
                  </p>
                </div>
              </div>
              <div className='col-lg-12 col-md-12 col-xs-12 col-sm-12 total-div'>
                <div className='col-lg-1 col-md-1 colsm-1 col-xs-1'>
                  <img
                    src='/images/yellow-diamond.png'
                    className='bullet-points'
                  />
                </div>
                <div className='col-lg-11 col-md-11 col-sm-11 col-xs-10 stormwater-div'>
                  <p className='stormwater-pipe-conn '>
                    Heavy-Duty Galvanized Steel
                  </p>
                </div>
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  total-div'>
                <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
                  <img
                    src='/images/yellow-diamond.png'
                    className='bullet-points'
                  />
                </div>
                <div className='col-lg-11 col-md-11 col-sm-11 col-xs-10 stormwater-div'>
                  <p className='stormwater-pipe-conn'>
                    <b>Locking device: </b> Permanently locks kerb into concrete
                    - will not move or pop out. Simply fold down lock tabls and
                    AdaptaKerb will anchor into new or existing concrete.
                  </p>
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
          <img
            src='/images/Cross Section profiles - AdaptaKerb-large.png'
            className='cross-section'
          />
          <p className='cross-section-text'>
            Cross-Section Profile &amp; Dimensions: AdaptaKerb installed in
            Concrete Kerb &amp; Channel
          </p>
        </div>
      </div>
    </div>
    <div className='row'>
      <img src='/images/background2.png' className='background2' />
    </div>
  </div>
)
