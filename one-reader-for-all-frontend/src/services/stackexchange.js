import axios from "axios"

const getAllStackexchange = async () => {
    const request = await axios.get('https://one-reader-for-all.herokuapp.com/stackexchange')
    return request.data
}

export default getAllStackexchange
