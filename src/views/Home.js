import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'
//import 'react-id-swiper/src/styles/css/swiper.css'

import Content from '../components/Content'

export default ({ page }) => {
  return (
    <div>
      <div className='slide_bg'>
        <Swiper
          loop={{
            loop: true
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        >
          <div
            className='swiper-slide'
            style={{ backgroundImage: `url(${page.image_s_one})` }}
          />
          <div
            className='swiper-slide'
            style={{ backgroundImage: `url(${page.image_s_two})` }}
          />
          <div
            className='swiper-slide'
            style={{ backgroundImage: `url(${page.image_s_three})` }}
          />
        </Swiper>
      </div>
      <div className='row text-position slide_cont'>
        <div className='row'>
          <div className='row'>
            <div className='container'>
              <div className='row adapta-logo-div'>
                <div className='col-lg-12 col-md-12 col-xs-12 col-sm-12'>
                  <img src='/images/AdaptaLogo.png' className='adapta-logo' />
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <Content
                    source={page.content}
                    className='stormwater-outlets-d'
                  />
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
                <div className='col-lg-4 col-md-12  col-sm-12 col-xs-12 hide-col logos_slide_hide'>
                  <div className='row logos_slide_hide'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 '>
                      <Content
                        source={page.logo_content}
                        className='suits-institute-of-p'
                      />
                    </div>
                  </div>
                  <div className='row logos_slide_hide'>
                    <div className='col-lg-6 col-sm-12 col-md-12 col-xs-12 ipwea-div'>
                      <img src={page.logo} className='ipwea' />
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-12  col-sm-12 col-xs-12 hide-col'>
                  <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 '>
                      <Content
                        source={page.suppliers_content}
                        className='available-at-all-plu'
                      />
                    </div>

                    <div className='col-lg-10 col-sm-6 col-md-6 col-xs-4 bitmap-div btmap-div toptacenter'>
                      <img src={page.suppliers_logo} className='bitmap' />
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
                  <img src='/images/BG.svg' className='bg-copy' />
                  <img src='/images/BG.svg' className='bg-copy1' />
                  <p className='one'>1</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <div className='range-div'>
                    <p className='upvc-connector-to-ta '>
                      {page.list_items.list_item_1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4 col-xs-4 list-row-img'>
                  <img src='/images/BG.svg' className='bg-copy' />
                  <img src='/images/BG.svg' className='bg-copy1' />
                  <p className='one'>2</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <div className='range-div'>
                    <p className='upvc-connector-to-ta upvc-connector-to-ta-p4 '>
                      {page.list_items.list_item_2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4  col-xs-4 list-row-img'>
                  <img src='/images/BG.svg' className='bg-copy' />
                  <img src='/images/BG.svg' className='bg-copy1' />
                  <p className='one'>3</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <p className='upvc-connector-to-ta '>
                    {page.list_items.list_item_3}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-12  col-xs-12 list-row-img'>
                  <img src='/images/BG.svg' className='bg-copy' />
                  <img src='/images/BG.svg' className='bg-copy1' />
                  <p className='one'>4</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <div className='range-div'>
                    <p className='upvc-connector-to-ta upvc-connector-to-ta-p1'>
                      {page.list_items.list_item_4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4  col-xs-4 list-row-img'>
                  <img src='/images/BG.svg' className='bg-copy' />
                  <img src='/images/BG.svg' className='bg-copy1' />
                  <p className='one'>5</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <p className='upvc-connector-to-ta upvc-connector-to-ta-p2'>
                    {page.list_items.list_item_5}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='row list-row'>
                <div className='col-lg-4 col-md-4  col-sm-4  col-xs-4 list-row-img'>
                  <img src='/images/BG.svg' className='bg-copy' />
                  <img src='/images/BG.svg' className='bg-copy1' />
                  <p className='one'>6</p>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 text-col'>
                  <p className='upvc-connector-to-ta upvc-connector-to-ta-p3'>
                    {page.list_items.list_item_6}
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
