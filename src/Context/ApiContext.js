import axios from "axios";
import { createContext } from "react";






export const ApiContext = createContext();

export function ApiContextProvider({ children }) {


    async function getProduct() {

     let data = await axios.get("https://route-ecommerce.onrender.com/api/v1/products")
      
     return {data}
    }


//// this is headers for add to cart 

    let headers = {

        token: localStorage.getItem('userdata')
    };
    // Get Logged user cart

    function addToCart(productId) {


        return axios.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
            {
                productId: productId
            },
            {
                headers: headers
            }
        ).then((response) => response).catch((error) => error)
    }


    ////// fristProductFor cart 


    /*
    
      انك تعمل متغير   
    
    
    */

    async function addProduct() {

        let { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/cart`, {

            headers: {
                
                token: localStorage.getItem("userdata"),
            }
        })
        return { data };
    };


  async  function deleteProduct(prodId){

let {data} = await axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${prodId}`,
{
    headers:{
        token:localStorage.getItem('userdata')
    }
});

return {data}
    };


    // up data product fro count 

    async function upDateProduct( producId , count ){

      let {data} = await axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${producId}`,
        {
            "count" : count
        },{
            headers:{

                token:localStorage.getItem('userdata')

            }
        }
        )

        return {data}
 }



 async  function removeProduct(){

            let {data} = await axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart` ,
            {
                headers: {
                    token:localStorage.getItem('userdata')
                }
            }
            )
            return {data}

}




/// show product 
 async function  showProduct(){
 let data =  await  axios.get(`https://route-ecommerce.onrender.com/api/v1/products`)


 return {data}
}
function handleLogOut(){
    localStorage.removeItem("userdata");
    
}



    return <>
        <ApiContext.Provider value={{ getProduct, addToCart, handleLogOut  ,showProduct, addProduct,deleteProduct ,upDateProduct ,removeProduct}}>
            {children}
        </ApiContext.Provider>
    </>

}