const stackexchangeRouter = require('express').Router()
const axios = require('axios')

let finalStackexchangeData = []

const getStackexchangeData = async () => {
    try {
        const response = await axios.get('https://api.stackexchange.com/2.3/articles?order=asc&sort=activity&site=stackoverflow')
        let modifiedStackexchangeData = response.data.items
        finalStackexchangeData = []

        for(let i = 0; i < Math.min(20, modifiedStackexchangeData.length); i++) {
            let stackexchangeObject = {
                title: modifiedStackexchangeData[i].title,
                author: modifiedStackexchangeData[i].owner.display_name,
                url: modifiedStackexchangeData[i].link,
                source: 'stackexchange'
            }
            finalStackexchangeData.push(stackexchangeObject)
        }
    }
    catch (error) {
        console.log(error)
    }
}

stackexchangeRouter.get('/', async (request, response) => {
    await getStackexchangeData()
    response.json(finalStackexchangeData)
})

module.exports = stackexchangeRouter