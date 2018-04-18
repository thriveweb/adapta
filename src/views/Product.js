import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import _kebabCase from 'lodash/kebabCase'

import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'

export default ({ product }) => (
  <div>
    <Helmet>
      <title>{product.title}</title>
    </Helmet>
    <div className='product-bacground'>
      <div className='baground-shade'>
        <div className='container_main'>
          <div className='two_col top_product'>
            <div className='col'>
              <h1>{product.title}</h1>
            </div>
            <div className='col'>
              <img src='/images/AdaptaLogo.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container_main main_content'>
      <Link to='/products' className='back_btn'>
        GO BACK TO ALL PRODUCTS
      </Link>
      <div className='two_col product'>
        <div className='col'>
          <img src={product.image} className='product-image-one' />
        </div>
        <div className='col'>
          <p className='ak-1-standard-layba1 product_single_title'>
            {product.title}
          </p>
          <div className='two_col dimension'>
            <div className='col'>
              <b>Dimensions:</b>{' '}
            </div>
            <div className='col'>
              <Content
                source={product.dimensions}
                className='base-length-305-mm-h'
              />
            </div>
          </div>
          <div className='full_content'>
            <Content
              source={product.content}
              className='stormwater-pipe-conn'
            />
          </div>
        </div>
      </div>
    </div>

    <div className='container_main smaller'>
      <img src={product.bottom_diagram} className='cross-section' />
      <p>{product.bottom_diagram_excerpt}</p>
    </div>

    <img src={product.bottom_full_image} className='background2' />
  </div>
)
