import axios from "axios"

const getAllHackernews = async () => {
    const request = await axios.get('https://one-reader-for-all.herokuapp.com/hackernews')
    return request.data
}

export default getAllHackernews
