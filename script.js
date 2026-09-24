const productsList = document.querySelector('.products-list');

const showAllButton = document.querySelector('.show-all')

const discountButton = document.querySelector('.discount')

const sumAllButton = document.querySelector('.sum-all')

const veganButton = document.querySelector('.vegan')



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

function sumAll() {

    const totalValue = menuOptions.reduce((acc, product) => acc + product.price, 0)

    const discountedTotal = totalValue * 0.7

    productsList.innerHTML = `
    <li class="total-card">
        <p class="total-title">FULL MENU VALUE</p>
        <p class="total-price">R$ ${totalValue.toFixed(2)}</p>
        <p class="discount-label">[ 30% OFF ]</p>
        <p class="total-discount">R$ ${discountedTotal.toFixed(2)}</p>
        <img src="./assets/full-menu.png" alt="full-menu-image">
     </li>
    `
}

sumAllButton.addEventListener('click', sumAll)

function filterVegan() {

    const veganProducts = menuOptions.filter(product => product.vegan)

    showAll(veganProducts)

}

veganButton.addEventListener('click', filterVegan)