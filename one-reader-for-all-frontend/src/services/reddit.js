import axios from "axios"

const getAllReddit = async () => {
    const request = await axios.get('https://one-reader-for-all.herokuapp.com/reddit')
    return request.data
}
export default getAllReddit
