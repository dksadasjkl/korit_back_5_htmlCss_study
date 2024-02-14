/*
servlet 프로젝트명: product
group_id: com.study
artifact_id: product
name: product
jdk: 11

dependencies
1. lombok
2. jsp
3. Gson
4. mysql

package
    com.study.product
        config      - DBConfig
        dao         - ProductDao
        entity      - Product
        filter      - CommonFilter  
        servlet     - InsertProductServlet(/product, POST), SerachProductServlet(/product, GET)

DB
    db_study
    table(product_tb)
    product_id, product_name(유니크), product_price, product_size(SS, S, M, L, XL, XXL)
*/           

async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs");

    const data = {
        productName: productInputs[0].value,
        productPrice: productInputs[1].value,
        productSize: productInputs[2].value
    };

    const jsonData = JSON.stringify(data);
    
    const option = {
        method:"post",
        Headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }

    try {
        const response = await fetch("http://localhost:8080/product/product", option)
        if(!response) {
            throw await response.json();
        }

        const data = await response.json();
        console.log(data);
        

    } catch (error){
        console.log(error);
        alert(error.errorMessege);
    }
}