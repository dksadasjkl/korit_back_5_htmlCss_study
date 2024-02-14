async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products")
        if(!response) {
            throw await response.json();
        }
        const responseData = await response.json();
        const productList = document.querySelector(".product-list");
        productList.innerHTML += ``;

        for(let product of responseData.data) {
            productList.innerHTML += `
            <tr>
                <td>${product.productId}</td>
                <td>${product.productName}</td>
                <td>${product.productPrice}원</td>
                <td>${product.productSize}</td>
            </tr>
            `;
        }

    } catch (error) {
        console.log(error);
    }


}