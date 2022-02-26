import axios, { AxiosInstance } from 'axios';

class HttpClient {

    protected instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: 'https://kouhai-api.herokuapp.com/api/',
        });
    }

    async getRequest (endpoint: string) {
        try {
            const response = await this.instance.get(endpoint)

            return response.data;
        } catch (error) {
            console.log('Request Error!')
        }
    }
}

export default HttpClient;