const productsList = document.querySelector('.products-list');

const showAllButton = document.querySelector('.show-all')

const discountButton = document.querySelector('.discount')

function showAll(productsArray) {

    let productsHTML = ""

    productsArray.forEach(product => {

        productsHTML += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p>R$ ${product.price.toFixed(2)}</p>
            </li>
        `
    })

    productsList.innerHTML = productsHTML
}

showAllButton.addEventListener('click', () => showAll(menuOptions))

function discountAll() {

    const discountedProducts = menuOptions.map(product => {

        return {
            ...product,
            price: product.price * 0.9
        }

    })

    showAll(discountedProducts)

}

discountButton.addEventListener('click', discountAll)
