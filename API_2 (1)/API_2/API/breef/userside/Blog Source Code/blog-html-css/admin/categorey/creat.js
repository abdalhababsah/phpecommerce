const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', event => {
 event.preventDefault();
  
 const categoryName = input.value;
  
 if (categoryName) {
    const url = 'http://localhost/API/serverside/post_category.php';
    const data = JSON.stringify({ category_name: categoryName });
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
 } else {
    alert('Please enter a category name.');
 }
});
let update_btn=document.getElementById("update_btn")
update_btn.addEventListener("click",e=>{
  window.location.href = 'index.html';

});
