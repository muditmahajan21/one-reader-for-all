import axios from "axios"

const getAllCodeforces = async () => {
    const request = await axios.get(`https://one-reader-for-all.herokuapp.com/codeforces`)
    return request.data
}

export default getAllCodeforces
