function fetchCategories() {
    fetch('http://localhost/API/serverside/read_category.php')
      .then(response => response.json())
      .then(data => {
        const categoryTableBody = document.getElementById('category-table-body');
        categoryTableBody.innerHTML = '';
  
        data.forEach(category => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${category.category_id}</td>
            <td>${category.category_name}</td>
            <td class="edit"><a href="edit1.html?category_id=${category.category_id}&category_name=${category.category_name}"><i class="fa-solid fa-pen"></i></a></td>
            <td class="delete"><i class="fa-solid fa-trash" onclick="deletecategory(${category.category_id})"></i></td>
            `;
          categoryTableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  window.onload = fetchCategories;
  