const redditRouter = require('express').Router()
const axios = require('axios')

let finalRedditData = []

const getRedditData = async () => {
    try {
        const response = await axios.get('https://www.reddit.com/hot.json')
        let modifiedRedditData = response.data.data.children
        finalRedditData = []
        for(let i = 0; i < Math.min(20, modifiedRedditData.length); i++) {
            let redditObject = {
                title: modifiedRedditData[i].data.title,
                author: modifiedRedditData[i].data.author_fullname,
                url: modifiedRedditData[i].data.url,
                number_comments: modifiedRedditData[i].data.num_comments,
                source: 'reddit'
            }
            finalRedditData.push(redditObject)
        }
    }
    catch(error) {
        console.log(error)
    }
}

redditRouter.get('/', async (request, response) => {
    await getRedditData()
    response.json(finalRedditData)
})

module.exports = redditRouter