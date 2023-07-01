import axios from "axios"

const BASE_URL ="http://localhost:8000/"

const getBooks = async (userData) =>{
    const response = await axios.get(`${BASE_URL}books`);
    if(response.data){
        return response.data;
    }
};


export const bookService ={
getBooks
}