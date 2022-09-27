let updateButton = `<button id="mainUpdateButtonId" onclick="submit();updateMainButton();" class="btn btn-outline-warning my-3">Update</button>`
let addbuttom = `<button onclick="submit()" type="submit" class="btn btn-primary my-3 btn-block">Add</button>`


document.getElementById('mainButtonId').innerHTML = addbuttom
function submit() {
    let productName = document.getElementById('productNameId').value;
    let productPrice = (Number(document.getElementById('productPriceId').value));

    resetElementById('productNameId', 'productPriceId'); //reset input values after clicking submit

    createProduct(productName, productPrice); //create object using product data  

}

function resetElementById() { //function takes Id of element to reset it's value
    for (var i = 0; i < arguments.length; ++i) {
        document.getElementById(arguments[i]).value = '';
    }
}
function updateElementById() { //function takes Id of element to update it's value
    for (var i = 0; i < arguments.length; i = i + 2) {
        document.getElementById(arguments[i]).value = (arguments[i + 1]);
    }
}

productsContainer = []; //saves all the products' data

(function checkLocalStorgeForPreviousData() { //auto run function to check if user has previous data stored
    if (localStorage.getItem('allProducts') != null) {
        productsContainer = (JSON.parse(localStorage.getItem('allProducts')));// why = not push!!!!
        readProduct();
    }
})();

function createProduct(productName, productPrice) { //function that 1.takes product data 2.create object of data 3.push it to productsContainer
    let product = { name: productName, price: productPrice };

    productsContainer.push(product);
    localStorage.setItem('allProducts', JSON.stringify(productsContainer));
    readProduct();

}

function readProduct() {
    let content = ``
    productsContainer.forEach(product => {
        content +=
            `<tr>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td><button id="updateButtonId" onclick="updateProduct(${productsContainer.indexOf(product)});" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="deleteProduct(${productsContainer.indexOf(product)});" class="btn btn-outline-danger">Delete</button></td>
            </tr>`
    });//// indexOf()!!!!!!!!!!!!!!        
    document.getElementById('tableBodyId').innerHTML = content;
}

function deleteProduct(indexOfProduct) {
    productsContainer.splice(indexOfProduct, 1);
    localStorage.setItem('allProducts', JSON.stringify(productsContainer));
    readProduct();
}

function searchProduct(nameOfProduct) {
    let content = ``
    for (let i = 0; i < productsContainer.length; i++) {
        const product = productsContainer[i];
        if ((product.name).toLowerCase().includes(nameOfProduct.toLowerCase())) {
            content +=
                `<tr>
            <td>${product.name}</td>    
            <td>$${product.price}</td>
            <td><button id="updateButtonId" onclick="updateProduct(${productsContainer.indexOf(product)});" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="deleteProduct(${productsContainer.indexOf(product)});" class="btn btn-outline-danger">Delete</button></td>
            </tr>`
        }
    }
    document.getElementById('tableBodyId').innerHTML = content;
}

function updateProduct(indexOfProduct) {
    currentProductNameId = productsContainer[indexOfProduct].name
    currentProductPriceId = productsContainer[indexOfProduct].price
    updateElementById('productNameId', currentProductNameId, 'productPriceId', currentProductPriceId);
    deleteProduct(indexOfProduct);
    updateMainButton(indexOfProduct);
}
function updateMainButton(indexOfProduct) {
    document.getElementById('mainButtonId').innerHTML = addButton
    document.getElementById('mainButtonId').innerHTML = updateButton

};






// function searchProduct() {
//     let nameOfProduct = document.getElementById('searchInputId').value
//     productsContainer.forEach(product => {
//         if (product.name == nameOfProduct) {
//             let indexOfProduct = productsContainer.map(product => product.name).indexOf(nameOfProduct)
//             console.log(indexOfProduct)
//             let test = productsContainer.slice(indexOfProduct,indexOfProduct)
//             console.log(test)
//         }
//     });
//     readProduct();
// }

// function searchProduct() {
//     let nameOfProduct = document.getElementById('searchInputId').value
//     productsContainer.slice(productsContainer.indexOf(nameOfProduct));
//     console.log(productsContainer.indexOf(nameOfProduct))
//     readProduct();
// }