import React from 'react'

import '../src/globalStyles.css'
import data from '../src/data.json'
import Home from '../src/views/Home'
import Contact from '../src/views/Contact'

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]

const globalSettings = getDocument('settings', 'global')

const HomePagePreview = ({ entry, widgetFor, getAsset }) => {
  const page = entry.toJS().data
  return <Home page={page} />
}

const ContactPagePreview = ({ entry, widgetFor, getAsset }) => {
  const page = entry.toJS().data
  return <Contact page={page} siteTitle={globalSettings.siteTitle} />
}

const CMS = window.CMS

CMS.registerPreviewTemplate('home-page', HomePagePreview)
CMS.registerPreviewTemplate('contact-page', ContactPagePreview)
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)

CMS.registerPreviewStyle('/css/bootstrap.css')
CMS.registerPreviewStyle('/css/main.css')
CMS.registerPreviewStyle('/css/responsive_main.css')
CMS.registerPreviewStyle(
  'https://fonts.googleapis.com/css?family=Montserrat:300,400,500'
)
CMS.registerPreviewStyle(
  'https://fonts.googleapis.com/css?family=Oswald:400,500,600,900'
)
CMS.registerPreviewStyle('/admin/cms.bundle.css')

window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})
