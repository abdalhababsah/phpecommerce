function fetchProducts() {
    fetch('http://localhost/API/server/read_product.php') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('pro-container');

            data.forEach(product => {
                const card = document.createElement('div');
                card.className = 'pro';
                card.innerHTML =`
                <img src="images/${product.image}" alt="">
                <div class="des">
                    <span>${product.name}</span>
                    <h5> ${product.description} </h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$${product.price}</h4>
                    <a href="sproduct.html#${product.product_id}"><i class="fa-solid fa-shopping-cart"></i></a>
                   
                </div>
      
                `;
                productContainer.appendChild(card);
            });
            
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchProducts();


    // {
    //     "product_id": 3,
    //     "image": "image3.jpg",
    //     "name": "Updated Product Name",
    //     "description": "laith Product Name",
    //     "price": "60.00",
    //     "price_after_discount": "55.00",
    //     "category_id": 3,
    //     "gender": "Male",
    //     "created_at": "2023-11-08 18:37:52"
    // },



            
    document.addEventListener("DOMContentLoaded", function () {
        const priceRange = document.getElementById('price-range');
        const minPrice = document.getElementById('min-price');
        const maxPrice = document.getElementById('max-price');
        const products = document.querySelectorAll('.pro');
    
        priceRange.addEventListener('input', updatePriceRange);
        searchInput.addEventListener('input', filterProducts);
    
        function updatePriceRange() {
            const minValue = 0;
            const maxValue = 100;
            const rangeValue = priceRange.value;
        
            const minPriceValue = (minValue * 1 + (maxValue - minValue) * rangeValue / 100).toFixed(2);
            const maxPriceValue = (minValue * 1 + (maxValue - minValue) * rangeValue / 100).toFixed(2);
        
            console.log('minPriceValue:', minPriceValue);
            console.log('maxPriceValue:', maxPriceValue);
        
            products.forEach(product => {
                const productPrice = parseFloat(product.querySelector('.des h4').textContent.slice(1)); // Adjusted to start from index 1
                
                console.log('productPrice:', productPrice);
        
                if (productPrice >= minPriceValue && productPrice <= maxPriceValue) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            }); 
        }
        
        function filterProducts() {
            const searchInput = document.getElementById('searchInput');
            const searchTerm = searchInput.value.toLowerCase();
            const productCards = document.querySelectorAll('.pro');
    
            productCards.forEach(card => {
                const productName = card.querySelector('h5').innerText.toLowerCase();
                const shouldShow = productName.includes(searchTerm);
    
                // If the product name contains the search term, show the card; otherwise, hide it.
                card.style.display = shouldShow ? 'block' : 'none';
            });
        }
    });
    



    
    let signupButtonNav = document.getElementById('signupButtonNav');

    let loginButtonNav = document.getElementById('loginButtonNav');

    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedin');
    
    if (isLoggedIn === 'true') {
        // Change text and behavior for logged-in users
        loginButtonNav.textContent = 'Profile';
        signupButtonNav.textContent = 'Log out';
    
        signupButtonNav.addEventListener('click', (e) => {
            // Log out logic
            window.location.href = 'index.html';
            sessionStorage.setItem("isLoggedin","false");
        });
        
        loginButtonNav.addEventListener('click', (e) => {
            // Log out logic
            window.location.href = 'profile.html';
        });
    } else {
        // Logic for non-logged-in users
    }
  


    // 



    