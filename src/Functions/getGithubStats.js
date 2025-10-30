import axios from "axios"

export const getGitHubStats = async (username) =>{
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        return response.data
    } catch (error) {
        return error.message
    }
}