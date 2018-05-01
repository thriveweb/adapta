import React from 'react'

import '../src/globalStyles.css'
import Home from '../src/views/Home'

const HomePagePreview = ({ entry, widgetFor, getAsset }) => {
  const page = entry.toJS().data
  return <Home page={page} />
}

const CMS = window.CMS

CMS.registerPreviewTemplate('home-page', HomePagePreview)
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
