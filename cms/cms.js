import React from 'react'

import '../src/globalStyles.css'
import data from '../src/data.json'
import Home from '../src/views/Home'
import Contact from '../src/views/Contact'
import Product from '../src/views/Product'

const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle(
  'https://fonts.googleapis.com/css?family=Montserrat:300,400,500'
)
CMS.registerPreviewStyle(
  'https://fonts.googleapis.com/css?family=Oswald:400,500,600,900'
)
CMS.registerPreviewStyle('/css/bootstrap.css')
CMS.registerPreviewStyle('/css/main.css')
CMS.registerPreviewStyle('/css/responsive_main.css')
CMS.registerPreviewStyle('/admin/cms.bundle.css')

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]

const globalSettings = getDocument('settings', 'global')

// Preview Templates
const HomePagePreview = ({ entry }) => <Home page={entry.toJS().data} />
const ProductPreview = ({ entry }) => <Product product={entry.toJS().data} />
const ContactPagePreview = ({ entry }) => (
  <Contact page={entry.toJS().data} siteTitle={globalSettings.siteTitle} />
)

CMS.registerPreviewTemplate('home-page', HomePagePreview)
CMS.registerPreviewTemplate('contact-page', ContactPagePreview)
CMS.registerPreviewTemplate('products', ProductPreview)

window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})
