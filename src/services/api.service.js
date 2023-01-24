import axios from "axios"

export const apiService  = (method, url) =>{
    try{

        switch (method) {
            case 'GET':
                return axios.get(url)
            case 'POST':
                return axios.post(url)
            default:
                break;
        }
    }catch(e){
        console.error(`Errorrrrr ${error}`)
    }
}