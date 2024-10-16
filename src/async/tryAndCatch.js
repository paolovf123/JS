import fetch from "node-fetch";
const API = 'http://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFuntion = async (urlApi)=>{
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log("_______________________________________________________");
        console.log(product);
        console.log("_______________________________________________________");
        console.log(product.title);
        console.log("_______________________________________________________");
        console.log(category.name);
    } catch (error){
        console.error(error)

    }
}