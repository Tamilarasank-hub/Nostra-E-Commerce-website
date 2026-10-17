
document.addEventListener("DOMContentLoaded", function () {

    // Update the copyright year
    document.querySelectorAll("[data-year]").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // =========================
    // 1. MOBILE NAVIGATION
    // =========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
            menuToggle.textContent =
                navLinks.classList.contains("open") ? "✕" : "☰";
            menuToggle.setAttribute(
                "aria-expanded",
                navLinks.classList.contains("open")
            );
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // =========================
    // 2. PRODUCT DATA
    // =========================

    const products = [
        {
            id: 1,
            name: "Relaxed Linen Shirt",
            category: "Men",
            price: 1499,
            oldPrice: 1899,
            tag: "BESTSELLER",
            image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            name: "Everyday Tote Bag",
            category: "Accessories",
            price: 799,
            oldPrice: 999,
            tag: "POPULAR",
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            name: "Classic Denim Jacket",
            category: "Women",
            price: 2199,
            oldPrice: 2699,
            tag: "NEW",
            image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            name: "Minimal Crossbody Bag",
            category: "Accessories",
            price: 1299,
            oldPrice: 1599,
            tag: "JUST IN",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            name: "Soft Knit Sweater",
            category: "Women",
            price: 1799,
            oldPrice: 2199,
            tag: "FAVOURITE",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            name: "Everyday Sneakers",
            category: "Men",
            price: 2499,
            oldPrice: 2999,
            tag: "TRENDING",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7,
            name: "Sculpted Sunglasses",
            category: "Accessories",
            price: 899,
            oldPrice: 1199,
            tag: "NEW",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8,
            name: "Wide-Leg Trousers",
            category: "Women",
            price: 1999,
            oldPrice: 2399,
            tag: "BESTSELLER",
            image: "https://images.unsplash.com/photo-1506629905607-d9b1f4a8b8d9?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 9,
            name: "Essential Cotton Tee",
            category: "Men",
            price: 699,
            oldPrice: 899,
            tag: "EVERYDAY",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 10,
            name: "Shoulder Bag",
            category: "Accessories",
            price: 1899,
            oldPrice: 2299,
            tag: "NEW",
            image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 11,
            name: "Ribbed Tank Top",
            category: "Women",
            price: 599,
            oldPrice: 799,
            tag: "EVERYDAY",
            image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 12,
            name: "Weekend Overshirt",
            category: "Men",
            price: 1899,
            oldPrice: 2299,
            tag: "NEW",
            image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80"
        }
    ];

    // =========================
    // 3. CREATE PRODUCT CARDS
    // =========================

    function formatPrice(price) {
        return "₹" + price.toLocaleString("en-IN");
    }

    function createProductCard(product) {
        const card = document.createElement("article");
        card.className = "product-card";

        const imageWrap = document.createElement("div");
        imageWrap.className = "product-image-wrap";

        const image = document.createElement("img");
        image.className = "product-image";
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        image.addEventListener("error", function () {
            image.src =
                "https://placehold.co/600x740/f7f6f1/344c3e?text=Nostra";
        }, { once: true });

        const tag = document.createElement("span");
        tag.className = "product-tag";
        tag.textContent = product.tag;

        imageWrap.append(image, tag);

        const info = document.createElement("div");
        info.className = "product-info";

        const category = document.createElement("p");
        category.className = "product-category";
        category.textContent = product.category;

        const name = document.createElement("h3");
        name.className = "product-name";
        name.textContent = product.name;

        const bottom = document.createElement("div");
        bottom.className = "product-bottom";

        const price = document.createElement("p");
        price.className = "product-price";
        price.append(document.createTextNode(formatPrice(product.price)));

        const oldPrice = document.createElement("span");
        oldPrice.className = "product-old-price";
        oldPrice.textContent = formatPrice(product.oldPrice);

        price.appendChild(oldPrice);
        bottom.appendChild(price);
        info.append(category, name, bottom);
        card.append(imageWrap, info);

        return card;
    }

    function displayProducts(container, list) {
        container.replaceChildren();

        list.forEach(function (product) {
            container.appendChild(createProductCard(product));
        });
    }

    // =========================
    // 4. HOME PAGE PRODUCTS
    // =========================

    const homeProducts = document.querySelector("[data-home-products]");

    if (homeProducts) {
        displayProducts(homeProducts, products.slice(0, 4));
    }

    // =========================
    // 5. COLLECTIONS SEARCH
    // =========================

    const collectionGrid = document.querySelector(
        "[data-collection-products]"
    );

    if (collectionGrid) {
        const searchInput = document.querySelector("#product-search");
        const resultsMessage = document.querySelector(
            "[data-results-message]"
        );
        const sortSelect = document.querySelector("#sort-products");
        const emptyState = document.querySelector("[data-empty-state]");

        const categoryRadios =
            document.querySelectorAll('input[name="category"]');

        const priceRadios =
            document.querySelectorAll('input[name="price"]');

        // Read a category passed from the Home page URL.
        const params = new URLSearchParams(window.location.search);
        const requestedCategory = params.get("category");

        if (requestedCategory) {
            categoryRadios.forEach(function (radio) {
                if (radio.value === requestedCategory) {
                    radio.checked = true;
                }
            });
        }

        function getSelectedValue(name, defaultValue) {
            const selected = document.querySelector(
                'input[name="' + name + '"]:checked'
            );

            return selected ? selected.value : defaultValue;
        }

        // Price filter conditions
        function matchesPrice(product, selectedPrice) {
            if (selectedPrice === "under1000") {
                return product.price < 1000;
            }

            if (selectedPrice === "1000to2000") {
                return product.price >= 1000 &&
                       product.price <= 2000;
            }

            if (selectedPrice === "over2000") {
                return product.price > 2000;
            }

            return true;
        }

        // Search and apply every selected filter.
        function filterProducts() {
            const searchTerm = searchInput.value
                .trim()
                .toLowerCase();

            const selectedCategory =
                getSelectedValue("category", "All");

            const selectedPrice =
                getSelectedValue("price", "all");

            let filteredProducts = products.filter(function (product) {
                const searchableText =
                    (product.name + " " + product.category).toLowerCase();

                const matchesSearch =
                    searchableText.includes(searchTerm);

                const matchesCategory =
                    selectedCategory === "All" ||
                    product.category === selectedCategory;

                const matchesPriceRange =
                    matchesPrice(product, selectedPrice);

                return matchesSearch &&
                       matchesCategory &&
                       matchesPriceRange;
            });

            // Sort the matching products.
            if (sortSelect.value === "price-low") {
                filteredProducts.sort(function (a, b) {
                    return a.price - b.price;
                });
            } else if (sortSelect.value === "price-high") {
                filteredProducts.sort(function (a, b) {
                    return b.price - a.price;
                });
            } else if (sortSelect.value === "name") {
                filteredProducts.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                });
            } else {
                filteredProducts.sort(function (a, b) {
                    return a.id - b.id;
                });
            }

            displayProducts(collectionGrid, filteredProducts);

            resultsMessage.textContent =
                "Showing " + filteredProducts.length +
                " of " + products.length + " products";

            collectionGrid.hidden = filteredProducts.length === 0;
            emptyState.hidden = filteredProducts.length !== 0;
        }

        // Search while the user types.
        searchInput.addEventListener("input", filterProducts);

        // Filter whenever a radio option changes.
        categoryRadios.forEach(function (radio) {
            radio.addEventListener("change", filterProducts);
        });

        priceRadios.forEach(function (radio) {
            radio.addEventListener("change", filterProducts);
        });

        // Sort products.
        sortSelect.addEventListener("change", filterProducts);

        // Reset search, category, price and sorting.
        document.querySelectorAll("[data-reset-filters]")
            .forEach(function (button) {
                button.addEventListener("click", function () {
                    searchInput.value = "";

                    document.querySelector(
                        'input[name="category"][value="All"]'
                    ).checked = true;

                    document.querySelector(
                        'input[name="price"][value="all"]'
                    ).checked = true;

                    sortSelect.value = "featured";

                    filterProducts();
                });
            });

        // Display all products when page first loads.
        filterProducts();
    }

    // =========================
    // 6. CONTACT FORM VALIDATION
    // =========================

    const contactForm = document.querySelector("[data-contact-form]");

    if (contactForm) {
        const nameInput = contactForm.elements.name;
        const emailInput = contactForm.elements.email;
        const messageInput = contactForm.elements.message;

        const status = document.querySelector("[data-form-status]");

        function validateField(field, errorName) {
            const error = document.querySelector(
                '[data-error-for="' + errorName + '"]'
            );

            let message = "";

            if (errorName === "name" &&
                field.value.trim().length < 2) {
                message = "Please enter your name.";
            }

            if (errorName === "email" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                    field.value.trim()
                )) {
                message = "Please enter a valid email address.";
            }

            if (errorName === "message" &&
                field.value.trim().length < 10) {
                message = "Message must contain at least 10 characters.";
            }

            error.textContent = message;
            field.classList.toggle("invalid", message !== "");

            return message === "";
        }

        // Real-time validation while typing.
        nameInput.addEventListener("input", function () {
            validateField(nameInput, "name");
        });

        emailInput.addEventListener("input", function () {
            validateField(emailInput, "email");
        });

        messageInput.addEventListener("input", function () {
            validateField(messageInput, "message");
        });

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const validName =
                validateField(nameInput, "name");

            const validEmail =
                validateField(emailInput, "email");

            const validMessage =
                validateField(messageInput, "message");

            if (!validName || !validEmail || !validMessage) {
                status.textContent =
                    "Please correct the errors above.";

                status.className = "form-status error";
                return;
            }

            status.textContent =
                "Thank you! Your form has been validated successfully.";

            status.className = "form-status success";

            contactForm.reset();

            [nameInput, emailInput, messageInput]
                .forEach(function (field) {
                    field.classList.remove("invalid");
                });

            document.querySelectorAll(".field-error")
                .forEach(function (error) {
                    error.textContent = "";
                });
        });
    }

});
