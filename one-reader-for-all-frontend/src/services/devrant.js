import axios from "axios"

const getAllDevrant = async () => {
    const request = await axios.get('https://one-reader-for-all.herokuapp.com/devrant')
    return request.data 
}

export default getAllDevrant