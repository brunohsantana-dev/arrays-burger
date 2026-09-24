const productsList = document.querySelector('.products-list');

const showAllButton = document.querySelector('.show-all')

const discountButton = document.querySelector('.discount')

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

showAllButton.addEventListener('click', showAll)

function discountAll() {

    const discountedProducts = menuOptions.map(product => {

        return {
            ...product,
            price: product.price * 0.9
        }

    })

}

