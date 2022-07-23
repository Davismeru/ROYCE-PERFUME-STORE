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