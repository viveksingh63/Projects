(async () => {
    const url = "https://fakestoreapi.com/products";
    const fetchProducts = async () => {
        try {
            const res = await fetch(url);
            return await res.json();
        } catch (error) {
            return error;
        }
    };

    const containerEl = document.getElementById('container');
    const searchInputEl=document.getElementById('searchInput');

    const products = await fetchProducts();
    const generateProducts = (product) => {
        return `<div class="product-box">
<div class="img-container">
    <img src="${product.image}" alt="">
</div>
<div class="des-container">
    <h2>${product.title}</h2>
    <p>${product.description.split(" ").slice(0,20).join(" ")}</p>
    <button type="button">${product.price} $</button>
</div>
</div>`
    };
    const renderProducts = (products) => {
        containerEl.innerHTML = "";
        products.forEach(product => {
            containerEl.innerHTML += generateProducts(product);
        })
    };

    const filterHandler=(event)=>{
const searchText=event.target.value.toLowerCase();
    }

searchInputEl.addEventListener('keyup',filterHandler);

    renderProducts(products);
})();