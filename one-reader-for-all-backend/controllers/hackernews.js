const hackernewsRouter = require('express').Router()
const axios = require('axios')

let finalHackernewsData = []

const getHackerNewsData = async () => {
    try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        let modifiedHackerNewsData = response.data
        finalHackernewsData = []
        
        for(let i = 0; i < Math.min(20, modifiedHackerNewsData.length); i++) {
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${modifiedHackerNewsData[i]}.json`)
            const hackernewsItem = response.data
            const hackernewsObject = { 
                title: hackernewsItem.title,
                author: hackernewsItem.by,
                url: hackernewsItem.url,
                number_comments: hackernewsItem.kids ? hackernewsItem.kids.length : 0,  
                source: 'hackernews'
            }
            finalHackernewsData.push(hackernewsObject)
        }
    }
    catch (error) {
        console.log(error)
    }
}

hackernewsRouter.get('/', async (request, response) => {
    await getHackerNewsData()
    response.json(finalHackernewsData)
})

module.exports = hackernewsRouter