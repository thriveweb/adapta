import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import _kebabCase from 'lodash/kebabCase'
import _sortBy from 'lodash/sortBy'

import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'

export default ({ page, products, product }) => {
  const productLink = _kebabCase(products[0]['title'])
  const productsSorted = _sortBy(products, 'order')
  return (
    <div>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <div className='product-bacground'>
        <div className='baground-shade prod'>
          <div className='container_main'>
            <div className='two_col top_product'>
              <div className='col'>
                <h1>Products</h1>
              </div>
              <div className='col' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='row product-card'>
          {productsSorted.map(({ title = '', image }) => (
            // <Link
            //   to={`/products/${productLink}`}
            //   className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'
            // >
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 line-copy rectangle-box1'>
              <div className='image-card'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <h5 className='product-title'>{title.toUpperCase()}</h5>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <div className='product-card1'>
                        <img src={image} className='product-img' />
                      </div>
                    </div>
                    {/* <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 rowbtn'>
                      <div className='view-product'>
                        <div className='view-products'>
                          <b>View Product</b>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            // </Link>
          ))}

          {/* <div className='row show-num'>
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
          </div> */}
        </div>
      </div>
    </div>
  )
}
