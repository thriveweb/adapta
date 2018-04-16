import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import _merge from 'lodash/merge'
import _findIndex from 'lodash/findIndex'
import _kebabCase from 'lodash/kebabCase'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import Header from './components/Header'
import Home from './views/Home'
import Products from './views/Products'
import Product from './views/Product'
import Contact from './views/Contact'
import NoMatch from './views/NoMatch'
import Footer from './components/Footer'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import AOS from './components/AOS'
import Spinner from './components/Spinner'
import data from './data.json'
import { documentHasTerm, getCollectionTerms } from './util/collection'

class App extends Component {
  state = {
    data,
    loading: false
  }

  componentDidMount = () => {
    this.fetchPreviewContent()
  }

  fetchPreviewContent = () => {
    if (
      !window.netlifyIdentity ||
      !window.netlifyIdentity.currentUser() ||
      process.env.NODE_ENV === 'development'
    ) {
      return false
    }
    import('./util/fetch-content').then(({ fetchContent }) => {
      this.setState({ loading: true })
      fetchContent()
        .then(newData => {
          this.setState(prevState => {
            const data = _merge(prevState.data, newData)
            return { data, loading: false }
          })
        })
        .catch(() => this.setState({ loading: false }))
    })
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings
    const products = this.getDocuments('products')

    return (
      <Router>
        <div className='React-Wrap'>
          {this.state.loading && <Spinner />}
          <AOS options={{ duration: 250 }} />
          <ScrollToTop />
          <ServiceWorkerNotifications reloadOnUpdate />

          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
          <Meta
            title={siteTitle}
            url={siteUrl}
            description={siteDescription}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
            headerScripts={headerScripts}
          />

          <Header />

          <Switch>
            <Route
              path='/'
              exact
              render={props => (
                <Home page={this.getDocument('pages', 'home')} {...props} />
              )}
            />
            <Route
              path='/products/'
              exact
              render={props => (
                <Products
                  page={this.getDocument('pages', 'products')}
                  products={products}
                  product={this.getDocument('pages', 'product')}
                  {...props}
                />
              )}
            />
            <Route
              path='/products/:slug'
              exact
              render={props => {
                const slug = props.match.params.slug
                const product = products.find(
                  item => _kebabCase(item.title) === slug
                )

                if (!product) return <NoMatch siteUrl={siteUrl} />
                return <Product product={product} {...props} />
              }}
            />

            <Route
              path='/contact/'
              exact
              render={props => (
                <Contact
                  page={this.getDocument('pages', 'contact')}
                  siteTitle={siteTitle}
                  {...props}
                />
              )}
            />

            <Route render={() => <NoMatch siteUrl={siteUrl} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
