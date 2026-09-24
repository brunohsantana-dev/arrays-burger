const productsList = document.querySelector('.products-list');

function showAll() {

    let productsHTML = ""

    menuOptions.forEach(product => {

        productsHTML += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p>R$ ${product.price}</p>
            </li>
        `
    })

    productsList.innerHTML = productsHTML
}

showAll()