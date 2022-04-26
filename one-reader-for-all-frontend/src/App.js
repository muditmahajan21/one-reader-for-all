import React, {useState, useEffect} from 'react'

import {
  Route,
  Routes,
} from 'react-router-dom'

import getAllReddit from './services/reddit'
import getAllCodeforces from './services/codeforces'
import getAllHackernews from './services/hackernews'
import getAllStackexchange from './services/stackexchange'
import getAllDevrant from './services/devrant'


import Toolbar from '@mui/material/Toolbar'

import NavBar from './components/NavBar'
import AllPosts from './components/AllPosts'

const App = () => {
  const [redditPosts, setRedditPosts] = useState([])
  const [codeforcesPosts, setCodeforcesPosts] = useState([])
  const [hackernewsPosts, setHackernewsPosts] = useState([])
  const [stackexchangePosts, setStackexchangePosts] = useState([])
  const [devrantPosts, setDevrantPosts] = useState([])

  const getAllRedditPosts = async (event) => {
    const redditPosts = await getAllReddit()
    setRedditPosts(redditPosts)
  }

  const getAllCodeforcesPosts = async (event) => {
    const codeforcesPosts = await getAllCodeforces()
    setCodeforcesPosts(codeforcesPosts)
  }

  const getAllHackerNewsPosts = async (event) => {
    const hackernewsPosts = await getAllHackernews()
    setHackernewsPosts(hackernewsPosts)
  }

  const getAllStackexchangePosts = async (event) => {
    const stackexchangePosts = await getAllStackexchange()
    setStackexchangePosts(stackexchangePosts)
  }

  const getAllDevrantPosts = async (event) => {
    const devrantPosts = await getAllDevrant()
    setDevrantPosts(devrantPosts)
  }

  useEffect(() => {
    getAllRedditPosts()
    getAllCodeforcesPosts()
    getAllHackerNewsPosts()
    getAllStackexchangePosts()
    getAllDevrantPosts()
  }, [])

  return (
    <div>
      <NavBar />
      <Toolbar />
      <Routes>
        <Route path="/" element={<AllPosts redditPosts={redditPosts} stackexchangePosts={stackexchangePosts} hackernewsPosts={hackernewsPosts} codeforcesPosts={codeforcesPosts} devrantPosts={devrantPosts} /> } />
        <Route path="/reddit" element={<AllPosts redditPosts={redditPosts} /> } />
        <Route path="/stackexchange" element={<AllPosts stackexchangePosts={stackexchangePosts} />} />
        <Route path="/hackernews" element={<AllPosts hackernewsPosts={hackernewsPosts} /> } />
        <Route path="/codeforces" element={<AllPosts codeforcesPosts={codeforcesPosts} /> } />
        <Route path="/devrant" element={<AllPosts devrantPosts={devrantPosts} /> } />
      </Routes>
    </div>
  )
}

export default App
