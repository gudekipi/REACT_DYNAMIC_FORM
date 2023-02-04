import axios from 'axios';
import { FormValues } from '../interfaces/index'

export const fetchData = async () => {
    try {
        const response = await axios.get('https://ulventech-react-exam.netlify.app/api/form');
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};


export const sendData = (data: FormValues) => {
    return axios.post('https://ulventech-react-exam.netlify.app/api/form', data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

export default { fetchData, sendData };