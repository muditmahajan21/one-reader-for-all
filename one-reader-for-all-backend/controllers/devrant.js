const devrantRouter = require('express').Router()
const axios = require('axios')

let finalDevrantData = []

const getDevrantData = async () => { 
    try {
        const response = await axios.get('https://devrant.com/api/devrant/weekly-rants?app=3&week=week&sort=top&limit=20&skip=0')
        let modifiedDevrantData = response.data.rants
        finalDevrantData = []
        for(let i = 0; i < Math.min(20, modifiedDevrantData.length); i++) {
            let devrantObject = {
                title: modifiedDevrantData[i].text.slice(0, Math.min(100, modifiedDevrantData[i].text.length)),
                author: modifiedDevrantData[i].user_username,
                url: `https://devrant.com/rants/${modifiedDevrantData[i].id}`,
                source: 'devrant'
            }
            finalDevrantData.push(devrantObject)
        }
    }
    catch(error) {
        console.log(error)
    }
}

devrantRouter.get('/', async (request, response) => {
    await getDevrantData()
    response.json(finalDevrantData)   
})

module.exports = devrantRouter