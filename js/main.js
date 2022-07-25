// render items in homepage
// display different categories in slides
const productCategories = ["handbags", "watches", "bracelets", "shades", "perfumes"]
const slidesContainer = document.querySelector('.other-sliders')
productCategories.map((product) => {
    slidesContainer.innerHTML += `
    <!-- single category slider -->
            <div class="slider slider-${product}">
                <h2>${product}</h2>
                <div class="slider-products">
                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${product}/item-1.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${product}/item-2.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${product}/item-3.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${product}/item-4.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${product}/item-5.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${product}/item-6.jpg" alt="">
                    </div>
                </div>

                <!-- redirect to ${product} page -->
                <div class="page-redirect redirect_to_${product}">
                    <a href="#">Click to see more ${product}</a>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>

            <!-- section break image -->
            <div class="section-break-pic">
                <img src="img/general/section png.png" alt="">
            </div>
    `
})

function loadNewPage(whichProduct) {
   return `<header>
    <!-- top contacts section -->
    <div class="contacts">
        <div class="phone-email">
            <i class="fa-solid fa-phone"></i></i> : <span>+254746671803</span></p>
            <i class="fa-solid fa-envelope"></i></i><span> : davismeru911@gmail.com</span>
        </div>

        <div class="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
        </div>
    </div>

    <!-- section break image -->
    <div class="section-break-pic">
        <img src="img/general/section png 1.png" alt="">
    </div>

    <!-- header-title -->
    <div class="header-title">
        <h1>ROYCE SCENTS</h1>
    </div>

    <!-- page banner -->
    <div class="page-banner">
        <div class="banner-header">
            <h2>${whichProduct}</h2>
        </div>
    </div>

    <!-- section break image -->
    <div class="section-break-pic">
        <img src="img/general/section png 1.png" alt="">
    </div>

</header>

<!-- product best sellers categories -->
<div class="slider best-sellers">
    <h2>BEST <span>${whichProduct}</span></h2>
    <div class="slider-products">
        <!-- individual item in the best seller section -->
        <div class="slider-item">
            <img src="img/${whichProduct}/item-1.jpg" alt="">
        </div>

        <!-- individual item in the best seller section -->
        <div class="slider-item">
            <img src="img/${whichProduct}/item-2.jpg" alt="">
        </div>

        <!-- individual item in the best seller section -->
        <div class="slider-item">
            <img src="img/${whichProduct}/item-3.jpg" alt="">
        </div>

        <!-- individual item in the best seller section -->
        <div class="slider-item">
            <img src="img/${whichProduct}/item-4.jpg" alt="">
        </div>
    </div>
</div>

<!-- section break image -->
<div class="section-break-pic">
    <img src="img/general/section png 1.png" alt="">
</div>

<div class="slider slider-${whichProduct}">
                <h2>${whichProduct}</h2>
                <div class="slider-products">
                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${whichProduct}/item-1.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${whichProduct}/item-2.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${whichProduct}/item-3.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${whichProduct}/item-4.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${whichProduct}/item-5.jpg" alt="">
                    </div>

                    <!-- individual item in the best seller section -->
                    <div class="slider-item">
                        <img src="img/${whichProduct}/item-6.jpg" alt="">
                    </div>
                </div>
            </div>`
}

const  wrapper = document.querySelector('.wrapper')
const productsContainer = document.querySelector('.products-container')
const nav = document.querySelector('nav')
const navLinks = nav.querySelectorAll('a')
navLinks.forEach((link)=> {
    link.addEventListener('click', (e)=> {
        e.preventDefault()
        const selectedProduct = e.currentTarget.innerText
        wrapper.classList.add('not-active')
        productsContainer.classList.remove('not-active')
        productsContainer.innerHTML = loadNewPage(selectedProduct)


        const bannerHeader = document.querySelector('.banner-header')
        bannerHeader.style.background = `url(img/bracelets/banner-img.jpg) center`
        bannerHeader.style.backgroundSize = "cover"
    })
})

