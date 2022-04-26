const codeforcesRouter = require('express').Router()
const axios = require('axios')
const res = require('express/lib/response')

let finalCodeforcesData = []

const getCodeforcesData = async () => {
    try {
        const response = await axios.get(' https://codeforces.com/api/recentActions?maxCount=20')
        let modifiedCodeforcesData = response.data.result

        finalCodeforcesData = []

        for(let i = 0; i < Math.min(20, modifiedCodeforcesData.length); i++) {
            let codeforcesObject = {
                title: modifiedCodeforcesData[i].blogEntry.title,
                author: modifiedCodeforcesData[i].blogEntry.authorHandle,
                url: `https://codeforces.com/blog/entry/${modifiedCodeforcesData[i].blogEntry.id}`,
                source: 'codeforces'
            }
            finalCodeforcesData.push(codeforcesObject)
        }
    }
    catch(error) {
        console.log(error)
    }
}

codeforcesRouter.get('/', async (request, response) => {
    await getCodeforcesData()
    response.json(finalCodeforcesData)
})

module.exports = codeforcesRouter