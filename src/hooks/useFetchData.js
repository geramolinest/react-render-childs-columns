import { useEffect, useState } from "react"
import { Productos } from "../Models/Productos"
import { apiService } from "../services/api.service"

export const useFetchData = () =>{
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(()=>{
        setLoad(true);
        apiService('GET', 'https://fakestoreapi.com/products')
        .then(res => {
            const { data } = res;

            const productos = new Productos(data)

            productos.formatData()
                .then(res =>{
                    console.log(res)
                    setProducts(res)
                }).catch(error => console.error(error));    
                setLoad(false)        
        }).catch(error => console.error(error))
    }, [])


    return [products, load]
}