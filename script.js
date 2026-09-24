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

    productsList.innerHTML = `
        <li>
            <p>FULL MENU VALUE</p>
            <p>R$ ${totalValue.toFixed(2)}</p>
        </li>
    `
}

sumAllButton.addEventListener('click', sumAll)

function filterVegan() {

    const veganProducts = menuOptions.filter(product => product.vegan)

    showAll(veganProducts)

    }

veganButton.addEventListener('click', filterVegan)