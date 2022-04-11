import axios from "axios"

export const getProjects = async () => {
    const {data} = await axios.get('https://webreznov-landing-site-request.herokuapp.com/api/portfolio/all');
    return data;
};
