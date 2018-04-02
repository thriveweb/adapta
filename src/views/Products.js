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
                  <p className='ak-1-standard-layba'>PRODUCTS</p>
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
    <div>
      <div className='row product-card'>
        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
          <div className='image-card'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <h5 className='product-title'>AK1 - STANDARD LAYBACK</h5>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div className='product-card1'>
                    <img
                      src='/images/AK1-Standard Layback_preview.png'
                      className='product-img'
                    />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                  <div className='view-product'>
                    <a
                      className='view-products'
                      onClick="location.href='product.html';"
                    >
                      <b>View Product</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
          <div className='image-card'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <h5 className='product-title'>AK2-BARRIER</h5>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div className='product-card1'>
                    <img
                      src='/images/AK2-Barrier_preview.png'
                      className='product-img'
                    />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                  <div className='view-product'>
                    <a className='view-products'>
                      <b>View Product</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
          <div className='image-card'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <h5 className='product-title'>AK2W - BARRIER W</h5>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div className='product-card1'>
                    <img
                      src='/images/AK2-Barrier_preview.png'
                      className='product-img'
                    />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                  <div className='view-product'>
                    <a className='view-products'>
                      <b>View Product</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
          <div className='image-card'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <h5 className='product-title'>AK2X - BARRIER X</h5>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div className='product-card1'>
                    <img
                      src='/images/AK2-Barrier_preview.png'
                      className='product-img'
                    />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                  <div className='view-product'>
                    <a className='view-products'>
                      <b>View Product</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
          <div className='image-card'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <h5 className='product-title'>AK2Z BARRIER Z</h5>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div className='product-card1'>
                    <img
                      src='/images/AK2-Barrier_preview.png'
                      className='product-img'
                    />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                  <div className='view-product'>
                    <a className='view-products'>
                      <b>View Product</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row show-num'>
          <div className='col-sm-offset-1 col-sm-3 col-xs-4 col-xs-4 prod-num1'>
            <img src='/images/yellow-diamond.png' className='prodbg-copy ' />
            <p className='product-num num-enable'>1</p>
          </div>
          <div className='col-sm-offset-1 col-sm-3  col-xs-4 col-xs-4 prod-num2'>
            <img src='/images/BG.svg' className='prodbg-copy' />
            <p className='product-num'>2</p>
          </div>
          <div className='col-sm-offset-1 col-sm-3  col-xs-4 col-xs-4 prod-num3'>
            <img src='/images/BG.svg' className='prodbg-copy' />
            <p className='product-num'>3</p>
          </div>
        </div>

        <div className='hide-prod'>
          <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
            <div className='image-card'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <h5 className='product-title'>AK3 LOW LAYBACK</h5>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='product-card1'>
                      <img
                        src='/images/LOWLAYBACK.png'
                        className='product-img'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                    <div className='view-product'>
                      <a className='view-products'>
                        <b>View Product</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
            <div className='image-card'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <h5 className='product-title'>AK4 ROLL TOP</h5>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='product-card1'>
                      <img src='/images/1copy.png' className='product-img' />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                    <div className='view-product'>
                      <a className='view-products'>
                        <b>View Product</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
            <div className='image-card'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <h5 className='product-title'>AK5 EXTENDED LAYBACK</h5>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='product-card1'>
                      <img
                        src='/images/LOWLAYBACK.png'
                        className='product-img'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                    <div className='view-product'>
                      <a className='view-products'>
                        <b>View Product</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
            <div className='image-card'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <h5 className='product-title'>AK6 SHORT TOP LAYBACK</h5>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='product-card1'>
                      <img
                        src='/images/LOWLAYBACK.png'
                        className='product-img'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                    <div className='view-product'>
                      <a className='view-products'>
                        <b>View Product</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
            <div className='image-card'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <h5 className='product-title'>AK7 STUBBY LAYBACK</h5>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='product-card1'>
                      <img
                        src='/images/LOWLAYBACK.png'
                        className='product-img'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                    <div className='view-product'>
                      <a className='view-products'>
                        <b>View Product</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
            <div className='image-card'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <h5 className='product-title'>AK10 LONG LAYBACK</h5>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='product-card1'>
                      <img
                        src='/images/LOWLAYBACK.png'
                        className='product-img'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                    <div className='view-product'>
                      <a className='view-products'>
                        <b>View Product</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
