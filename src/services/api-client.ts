import axios from "axios";

export default axios.create({
baseURL:'https://api.rawg.io/api',
    params:{
        key:'dacf342e34db4e9a9ec2898598c2243a'
    }
})