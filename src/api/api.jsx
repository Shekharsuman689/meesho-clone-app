//This file contains the api link of products
import axios from "axios";

export async function productsData(){
    const products = await axios.get(
            "https://fakestoreapiserver.vercel.app/amazonproducts"
        // "https://api.escuelajs.co/api/v1/products"
    );
        
    return products
}
