import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import store from '../redux'
import Head from './head'
import RepoList from './repo-list'
import RepoView from './repo-view'
import Header from './header'
import Footer from './footer'
import './home.scss'

const Home = () => {
  return (
    <Provider store={store}>
      <Head />
      <Header />
      <div className="home-bg page-wrap">
        <div className="container mx-auto pt-24 pb-8 ">
          <Route exact path="/:userName" component={() => <RepoList />} />
          <Route exact path="/:userName/:repositoryName" component={() => <RepoView />} />
        </div>
      </div>
      <Footer />
    </Provider>
  )
}
Home.propTypes = {}
export default Home
