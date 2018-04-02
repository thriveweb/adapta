import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Content from '../components/Content'

export default ({ page }) => {
  return (
    <div>
      <div id='myCarousel' className='carousel slide' data-ride='carousel'>
        {/* <ol className='carousel-indicators'>
          <li data-target='#myCarousel' data-slide-to='0' className='active '>
            <div className='bg-indicators' style={{ right: '25px' }} />
          </li>
          <li data-target='#myCarousel' data-slide-to='1'>
            <div className='bg-indicators' style={{ right: '0px' }} />
          </li>
          <li data-target='#myCarousel' data-slide-to='2'>
            <div className='bg-indicators' style={{ right: '-25px' }} />
          </li>
        </ol> */}

        <div className='carousel-inner'>
          <div className='item active'>
            <img
              src='images/hero-img.jpg'
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className='item'>
            <img
              src='images/hero-img.png'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className='item'>
            <img
              src='images/hero-img.png'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        <div className='row text-position'>
          <div className='row'>
            <div className='row'>
              <div className='container'>
                <div className='row adapta-logo-div'>
                  <div className='col-lg-12 col-md-12 col-xs-12 col-sm-12'>
                    <img src='images/AdaptaLogo.png' className='adapta-logo' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <p className='galvanized-steel-sto'>
                      GALVANIZED STEEL STORM WATER OUTLETS FOR STREET KERBS
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <p className='stormwater-outlets-d'>
                      Stormwater outlets designed to fit every street kerb and
                      specially made to suit the exact shape of your kerb and
                      gutter. Unbreakable, heavy-duty galvanised steel
                      construction - they won't break, shatter or fall apart!
                      Take a look at our extensive range of AdaptaKerb models
                      now available.
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                    <div className='mask-copy-1'>
                      <Link to='/products/' className=' view-products'>
                        <b>View products</b>
                      </Link>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-12  col-sm-12 col-xs-12 hide-col'>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 '>
                        <p className='suits-institute-of-p'>
                          Suits Institute of Public Works Engineering Kerb &amp;
                          Channel Profiles:
                        </p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6 col-sm-12 col-md-12 col-xs-12 ipwea-div'>
                        <img src='images/ipwea.png' className='ipwea' />
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-12  col-sm-12 col-xs-12 hide-col'>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 '>
                        <p className='available-at-all-plu'>
                          Available at all plumbing supply and hardware stores:
                        </p>
                      </div>

                      <div className='col-lg-10 col-sm-6 col-md-6 col-xs-4 bitmap-div btmap-div'>
                        <img src='images/Bitmap.png' className='bitmap' />
                      </div>
                      <div className='col-lg-2 col-sm-6 col-md-3 col-xs-4 bitmap-div reece-div'>
                        <img src='images/reece.png' className='reece' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <section id='list'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4 col-xs-4 list-row-img'>
                  <img src='images/BG.svg' className='bg-copy' />
                  <img src='images/BG.svg' className='bg-copy1' />
                  <p className='one'>1</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <div className='range-div'>
                    <p className='upvc-connector-to-ta '>
                      UPVC connector to take 90/100mm stormwater pipes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4 col-xs-4 list-row-img'>
                  <img src='images/BG.svg' className='bg-copy' />
                  <img src='images/BG.svg' className='bg-copy1' />
                  <p className='one'>2</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <div className='range-div'>
                    <p className='upvc-connector-to-ta upvc-connector-to-ta-p4 '>
                      Special locking device - lock into concrete
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4  col-xs-4 list-row-img'>
                  <img src='images/BG.svg' className='bg-copy' />
                  <img src='images/BG.svg' className='bg-copy1' />
                  <p className='one'>3</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <p className='upvc-connector-to-ta '>
                    Heavy-duty galvanized steel and designed to AS3500 & AS2876
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-12  col-xs-12 list-row-img'>
                  <img src='images/BG.svg' className='bg-copy' />
                  <img src='images/BG.svg' className='bg-copy1' />
                  <p className='one'>4</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <div className='range-div'>
                    <p className='upvc-connector-to-ta upvc-connector-to-ta-p1'>
                      Quick and easy to install
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4  col-xs-4 list-row-img'>
                  <img src='images/BG.svg' className='bg-copy' />
                  <img src='images/BG.svg' className='bg-copy1' />
                  <p className='one'>5</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <p className='upvc-connector-to-ta upvc-connector-to-ta-p2'>
                    Fits all kerb and channel profiles
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4  col-xs-4 list-row-img'>
                  <img src='images/BG.svg' className='bg-copy' />
                  <img src='images/BG.svg' className='bg-copy1' />
                  <p className='one'>6</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <p className='upvc-connector-to-ta upvc-connector-to-ta-p3'>
                    Largest range available - 12 models
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row button-space'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
              <div className='mask-copy-6'>
                <Link to='/products/' className=' view-products'>
                  <b>Explore Range</b>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
