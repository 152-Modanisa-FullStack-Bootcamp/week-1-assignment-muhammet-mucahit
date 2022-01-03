import "./styles.css";
import axios from "axios";

const getProductCard = ({name, image}) =>
  // Return one product card html with name and image information
  `<div class="product-card">
     <img src="${image}" alt="image-alt">
     <h3>${name}</h3>
   </div>`;

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    console.log(response)
    // inspect the response and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response.data;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((item) => console.log(item.name));

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = products
      .filter(item => item.name.includes("Şal"))
      .map(item => ({name: item.name, image: item.image}));

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    let productsArrayHtml = ""
    mappedProducts.forEach(item => productsArrayHtml += getProductCard(item));
    let productsDiv = document.getElementById("products");
    productsDiv.innerHTML = productsArrayHtml
  });
