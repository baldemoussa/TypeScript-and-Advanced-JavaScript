import './style.css'
import Product from './models/Product'
import apiServices from './services/apiService'
import taxCalculator from './utils/taxCalculator'
import discountCalculator from './utils/discountCalculator'
import { NetworkError, DataError } from './utils/errorHandler'

let products: Product[] = [];

async function initApp() {
  try {
    // Await the promise to properly catch any errors in the catch block below
    const data: any = await apiServices();

    // Create instances of Product from the API data
    products = data.products.map((p: any) => new Product(
      p.id, p.title, p.description, p.category, p.price, p.discountPercentage,
      p.rating, p.stock, p.tags, p.brand, p.sku, p.weight, p.dimensions,
      p.warrantyInformation, p.shippingInformation, p.availabilityStatus,
      p.reviews, p.returnPolicy, p.minimumOrderQuantity, p.meta,
      p.thumbnail, p.images
    ));

    console.log('Products:', products);

    // Display first product as an example
    if (products.length > 0) {
      console.log('Displaying first product:');
      console.log(products[0].displayDetails());
      console.log('Price with discount:', products[0].getPriceWithDiscount());
    }

  } catch (error) {
    if (error instanceof NetworkError) {
      console.error('Network error: Please check your connection.', error.message);
    } else if (error instanceof DataError) {
      console.error('Data error: API did not return data.', error.message);
    } else {
      console.error('Unknown error: ', error);
    }
  }
}

//User Interface
function loadProductsWebsite() {
  const productsContainer = document.getElementById('products');
  const fragment = document.createDocumentFragment();
  products.forEach((product) => {
    let productDiv = document.createElement('div');
    productDiv.className = 'bg-white rounded-xl shadow-md border border-gray-200 p-5 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg';
    productDiv.innerHTML = `
    <h2 class="text-xl font-semibold text-gray-900 mb-2">${product.title}</h2>    
    <p class="text-gray-600 text-sm mb-1"><span class="font-medium text-gray-800">Price:</span> $${product.price}</p>    
    <p class="text-gray-600 text-sm mb-1"><span class="font-medium text-gray-800">Discount:</span> $${discountCalculator(product)}</p>
    <p class="text-gray-600 text-sm mb-1"><span class="font-medium text-gray-800">Final Price:</span> $${product.getPriceWithDiscount()}</p>    
    <p class="text-gray-600 text-sm mb-1"><span class="font-medium text-gray-800">Tax:</span> $${taxCalculator(product)}</p>
    <p class="text-gray-600 text-sm mb-4 line-clamp-5"><span class="font-medium text-gray-800">Details:</span> ${product.displayDetails()}</p>
    <img class="mt-auto w-full h-48 object-contain rounded-lg bg-gray-50" src="${product.thumbnail}" alt="${product.title}">`;

    fragment.appendChild(productDiv);
  });
  productsContainer.appendChild(fragment);
}

initApp().then(() => {
  loadProductsWebsite();
});

