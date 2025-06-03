// data.js

// Make sure imagePaths.js is loaded BEFORE this file in your HTML
// <script src="imagePaths.js"></script>
// <script src="data.js"></script>

const appData = {
    // ---- Company Info ----
    company: {
        name: "Loyapy",
        logoText: 'Loyapy',
        slogan: "High-quality electronics and accessories to elevate your digital life.",
        currencySymbol: "৳",
        freeShippingThreshold: 1500, // BDT
        contactEmail: "info@loyapy.com",
        whatsappNumber: "+8801735528254", // Example UAE number, replace with your actual number
        whatsappMessagePrefix: "Hello Loyapy, I'd like to order the following:\n\n",
        footerDesignedBy: "Designed by Loyapy.",
        facebookLink: "https://www.facebook.com/share/19Dbj1JNVL",
        twitterLink: "https://x.com/loyapy?t=AZ4Sp8zWW5G9XaWUPd8csQ&s=09",
        instagramLink: "https://www.instagram.com/loyapy24?igsh=dm9wYTF1Y2pqY2J2",
    },

    // ---- Navigation Links ----
    navLinks: [
        { name: "Home & Kitchen", href: "#" },
        { name: "Phones", href: "#" },
        { name: "Audio", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Support", href: "#" }
    ],

    footerShopLinks: [
        { name: "Home & Kitchen", href: "#" },
        { name: "Smartphones", href: "#" },
        { name: "Tablets", href: "#" },
        { name: "Audio Devices", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Deals", href: "#" }
    ],

    footerCustomerServiceLinks: [
        { name: "Contact Us", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Order Tracking", href: "#" },
        { name: "Shipping & Returns", href: "#" },
        { name: "Warranty Information", href: "#" },
        { name: "My Account", href: "#" }
    ],

    footerCompanyLinks: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press & Media", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" }
    ],

    // ---- Feature Highlights (Section below hero) ----
    featureHighlights: [
        { icon: "fas fa-truck-fast", title: "Fast & Free Delivery", description: "On orders over 1000৳" },
        { icon: "fas fa-headset", title: "Expert Support", description: "24/7 customer service" },
        { icon: "fas fa-shield-alt", title: "Official Retailer", description: "Genuine products guaranteed" },
        { icon: "fas fa-undo", title: "Easy Returns", description: "Hassle-free return policy" }
    ],

    // ---- Categories ----
    categories: [
        { name: "Home & Kitchen", imageUrl: imagePaths.categories.laptops, href: "#" },
        { name: "Smartphones", imageUrl: imagePaths.categories.smartphones, href: "#" },
        { name: "Tablets", imageUrl: imagePaths.categories.tablets, href: "#" },
        { name: "Audio", imageUrl: imagePaths.categories.audio, href: "#" },
        { name: "Accessories", imageUrl: imagePaths.categories.accessories, href: "#" }
    ],

    // ---- Products (Full Product Details) ----
    products: [
        {
            id: "product_1",
            name: "Smart Kitchen Trash Bin",
            shortDescription: "A compact, odor-free, and durable wall-mounted bin that doubles as storage for a clutter-free space.",
            longDescription: "Kitchen Trash Bin — the smart solution for keeping your kitchen, mess room, or study area organized and clutter-free. This wall-mounted plastic bin is cleverly designed to store both waste and essential items without occupying valuable space. Whether you need to stash utensils, important papers, tissue rolls, or poly bags, it handles it all efficiently. Its odor-sealing design ensures a fresh, clean environment while providing easy access for removing or replacing trash. Compact yet spacious, it blends seamlessly with any decor, making it perfect for placement near dining tables, study corners, or kitchen countertops. Simplify your daily routine with this all-in-one storage and trash solution. ### Why I Recommend It: I recommend the Kitchen Trash Bin because it’s more than just a waste container — it’s a smart, space-saving organizer that enhances both functionality and cleanliness. Its multifunctional design, compact size, and odor-free storage make it ideal for smaller spaces where efficiency matters. It's a practical addition to any modern home.",
            basePrice: 990.00,
            originalPrice: 1690.00,
            category: "Home & Kitchen",
            images: {
                "white": imagePaths.products.product_1.product_11,
                "light_beige": imagePaths.products.product_1.product_110,
                default: imagePaths.products.product_1.default,
            },
            thumbnails: [
                imagePaths.products.product_1.product_11,
                imagePaths.products.product_1.product_12,
                imagePaths.products.product_1.product_13,
                imagePaths.products.product_1.product_17,
                imagePaths.products.product_1.product_15,

            ],
            colors: [
                { name: "Light gray", hex: "#b3b3b5", imageKey: "white" },
                { name: "Light beige", hex: "#e5d7cd", imageKey: "light_beige" },
            ],
            specifications: [
                { label: "Brand", value: "DPEX" },
                { label: "Manufacturer", value: "DPEX" },
                { label: "Color", value: "Light gray & Light beige" },
                { label: "Model", value: "C-317" },
                { label: "Material", value: "Plastic" },
                { label: "Dimension", value: "24*16*26cm, The size of the folded is 24*8*26cm" }

            ],
            isFeatured: true
        },

        {
            id: "product_2",
            name: "Rechargeable Electric Cleaning Brush",
            shortDescription: "This versatile brush effortlessly cleans kitchen sinks, Hari Patil, sofas, tiles, meat fat, and Thai glass surfaces.",
            longDescription: "Introducing a powerful and versatile electronic cleaning brush designed to remove stubborn dirt and grime from every corner of your home or kitchen. Whether you're scrubbing the kitchen sink, Hari Patil, sofas, or tiles, the included Teflon brush makes the job effortless. Built for durability and performance, it features a brushless motor and a sturdy ABS plastic body. The built-in 2000mAh lithium battery offers extended use on a single charge, and USB charging ensures universal convenience. Fully waterproof, this cleaning brush is easy to clean and ready for any mess—wet or dry.",
            basePrice: 850.00,
            originalPrice: 1590.00,
            category: "Home & Kitchen",
            images: {
                "off_white": imagePaths.products.product_2.product_21,
                default: imagePaths.products.product_2.default,
            },
            thumbnails: [
                imagePaths.products.product_2.product_21,
                imagePaths.products.product_2.product_22,
                imagePaths.products.product_2.product_23,
                imagePaths.products.product_2.product_24,
                imagePaths.products.product_2.product_25,

            ],
            colors: [
                { name: "Off white", hex: "#b3b3b5", imageKey: "off_white" },
            ],
            specifications: [
                { label: "Brand", value: "RAYBIN" },
                { label: "Manufacturer", value: "RAYBIN" },
                { label: "Color", value: "Off-White" },
                { label: "Model", value: "RBSKA018-17" },
                { label: "Material", value: "ABS Plastic" },
                { label: "Dimension", value: " 17.5*7.4*26cm, weight: 372.5g" },


            ],
            isFeatured: true
        },

        {
            id: "product_3",
            name: "Folding Waste Bins Kitchen",
            shortDescription: "A compact, odor-free, and durable wall-mounted bin that doubles as storage for a clutter-free space.",
            longDescription: "Kitchen Trash Bin — the smart solution for keeping your kitchen, mess room, or study area organized and clutter-free. This wall-mounted plastic bin is cleverly designed to store both waste and essential items without occupying valuable space. Whether you need to stash utensils, important papers, tissue rolls, or poly bags, it handles it all efficiently. Its odor-sealing design ensures a fresh, clean environment while providing easy access for removing or replacing trash. Compact yet spacious, it blends seamlessly with any decor, making it perfect for placement near dining tables, study corners, or kitchen countertops. Simplify your daily routine with this all-in-one storage and trash solution. ### Why I Recommend It: I recommend the Kitchen Trash Bin because it’s more than just a waste container — it’s a smart, space-saving organizer that enhances both functionality and cleanliness. Its multifunctional design, compact size, and odor-free storage make it ideal for smaller spaces where efficiency matters. It's a practical addition to any modern home.",
            basePrice: 990.00,
            originalPrice: 1690.00,
            category: "Home & Kitchen",
            images: {
                "white": imagePaths.products.product_1.product_12,
                "light_beige": imagePaths.products.product_1.product_110,
                default: imagePaths.products.product_1.product_12,
            },
            thumbnails: [
                imagePaths.products.product_1.product_16,
                imagePaths.products.product_1.product_12,
                imagePaths.products.product_1.product_13,
                imagePaths.products.product_1.product_18,
                imagePaths.products.product_1.product_15,

            ],
            colors: [
                { name: "Light gray", hex: "#b3b3b5", imageKey: "white" },
                { name: "Light beige", hex: "#e5d7cd", imageKey: "light_beige" },
            ],
            specifications: [
                { label: "Brand", value: "DPEX" },
                { label: "Manufacturer", value: "DPEX" },
                { label: "Color", value: "Light gray & Light beige" },
                { label: "Model", value: "C-317" },
                { label: "Material", value: "Plastic" },
                { label: "Dimension", value: "24*16*26cm, The size of the folded is 24*8*26cm" }

            ],
            isFeatured: true
        },

        {
            id: "product_4",
            name: "Electric Household Cleaning Brush",
            shortDescription: "This versatile brush effortlessly cleans kitchen sinks, Hari Patil, sofas, tiles, meat fat, and Thai glass surfaces.",
            longDescription: "Introducing a powerful and versatile electronic cleaning brush designed to remove stubborn dirt and grime from every corner of your home or kitchen. Whether you're scrubbing the kitchen sink, Hari Patil, sofas, or tiles, the included Teflon brush makes the job effortless. Built for durability and performance, it features a brushless motor and a sturdy ABS plastic body. The built-in 2000mAh lithium battery offers extended use on a single charge, and USB charging ensures universal convenience. Fully waterproof, this cleaning brush is easy to clean and ready for any mess—wet or dry.",
            basePrice: 850.00,
            originalPrice: 1590.00,
            category: "Home & Kitchen",
            images: {
                "off_white": imagePaths.products.product_2.product_23,
                default: imagePaths.products.product_2.product_23,
            },
            thumbnails: [
                imagePaths.products.product_2.product_23,
                imagePaths.products.product_2.product_22,
                imagePaths.products.product_2.product_21,
                imagePaths.products.product_2.product_24,
                imagePaths.products.product_2.product_25,

            ],
            colors: [
                { name: "Off white", hex: "#b3b3b5", imageKey: "off_white" },
            ],
            specifications: [
                { label: "Brand", value: "RAYBIN" },
                { label: "Manufacturer", value: "RAYBIN" },
                { label: "Color", value: "Off-White" },
                { label: "Model", value: "RBSKA018-17" },
                { label: "Material", value: "ABS Plastic" },
                { label: "Dimension", value: " 17.5*7.4*26cm, weight: 372.5g" },


            ],
            isFeatured: true
        },
        {
            id: "product_5",
            name: "Foldable Trash Can Collapsible Garbage Can for Home",
            shortDescription: "A compact, odor-free, and durable wall-mounted bin that doubles as storage for a clutter-free space.",
            longDescription: "Kitchen Trash Bin — the smart solution for keeping your kitchen, mess room, or study area organized and clutter-free. This wall-mounted plastic bin is cleverly designed to store both waste and essential items without occupying valuable space. Whether you need to stash utensils, important papers, tissue rolls, or poly bags, it handles it all efficiently. Its odor-sealing design ensures a fresh, clean environment while providing easy access for removing or replacing trash. Compact yet spacious, it blends seamlessly with any decor, making it perfect for placement near dining tables, study corners, or kitchen countertops. Simplify your daily routine with this all-in-one storage and trash solution. ### Why I Recommend It: I recommend the Kitchen Trash Bin because it’s more than just a waste container — it’s a smart, space-saving organizer that enhances both functionality and cleanliness. Its multifunctional design, compact size, and odor-free storage make it ideal for smaller spaces where efficiency matters. It's a practical addition to any modern home.",
            basePrice: 990.00,
            originalPrice: 1690.00,
            category: "Home & Kitchen",
            images: {
                "white": imagePaths.products.product_1.product_13,
                "light_beige": imagePaths.products.product_1.product_110,
                default: imagePaths.products.product_1.product_13,
            },
            thumbnails: [
                imagePaths.products.product_1.product_19,
                imagePaths.products.product_1.product_12,
                imagePaths.products.product_1.product_13,
                imagePaths.products.product_1.product_11,
                imagePaths.products.product_1.product_15,

            ],
            colors: [
                { name: "Light gray", hex: "#b3b3b5", imageKey: "white" },
                { name: "Light beige", hex: "#e5d7cd", imageKey: "light_beige" },
            ],
            specifications: [
                { label: "Brand", value: "DPEX" },
                { label: "Manufacturer", value: "DPEX" },
                { label: "Color", value: "Light gray & Light beige" },
                { label: "Model", value: "C-317" },
                { label: "Material", value: "Plastic" },
                { label: "Dimension", value: "24*16*26cm, The size of the folded is 24*8*26cm" }

            ],
            isFeatured: true
        },

        {
            id: "product_6",
            name: "Electric Cleaning Brush for Kitchen",
            shortDescription: "This versatile brush effortlessly cleans kitchen sinks, Hari Patil, sofas, tiles, meat fat, and Thai glass surfaces.",
            longDescription: "Introducing a powerful and versatile electronic cleaning brush designed to remove stubborn dirt and grime from every corner of your home or kitchen. Whether you're scrubbing the kitchen sink, Hari Patil, sofas, or tiles, the included Teflon brush makes the job effortless. Built for durability and performance, it features a brushless motor and a sturdy ABS plastic body. The built-in 2000mAh lithium battery offers extended use on a single charge, and USB charging ensures universal convenience. Fully waterproof, this cleaning brush is easy to clean and ready for any mess—wet or dry.",
            basePrice: 850.00,
            originalPrice: 1590.00,
            category: "Home & Kitchen",
            images: {
                "off_white": imagePaths.products.product_2.product_24,
                default: imagePaths.products.product_2.default,
            },
            thumbnails: [
                imagePaths.products.product_2.product_24,
                imagePaths.products.product_2.product_22,
                imagePaths.products.product_2.product_21,
                imagePaths.products.product_2.product_23,
                imagePaths.products.product_2.product_25,

            ],
            colors: [
                { name: "Off white", hex: "#b3b3b5", imageKey: "off_white" },
            ],
            specifications: [
                { label: "Brand", value: "RAYBIN" },
                { label: "Manufacturer", value: "RAYBIN" },
                { label: "Color", value: "Off-White" },
                { label: "Model", value: "RBSKA018-17" },
                { label: "Material", value: "ABS Plastic" },
                { label: "Dimension", value: " 17.5*7.4*26cm, weight: 372.5g" },


            ],
            isFeatured: true
        },
        {
            id: "product_7",
            name: "Trash Bin",
            shortDescription: "A compact, odor-free, and durable wall-mounted bin that doubles as storage for a clutter-free space.",
            longDescription: "Kitchen Trash Bin — the smart solution for keeping your kitchen, mess room, or study area organized and clutter-free. This wall-mounted plastic bin is cleverly designed to store both waste and essential items without occupying valuable space. Whether you need to stash utensils, important papers, tissue rolls, or poly bags, it handles it all efficiently. Its odor-sealing design ensures a fresh, clean environment while providing easy access for removing or replacing trash. Compact yet spacious, it blends seamlessly with any decor, making it perfect for placement near dining tables, study corners, or kitchen countertops. Simplify your daily routine with this all-in-one storage and trash solution. ### Why I Recommend It: I recommend the Kitchen Trash Bin because it’s more than just a waste container — it’s a smart, space-saving organizer that enhances both functionality and cleanliness. Its multifunctional design, compact size, and odor-free storage make it ideal for smaller spaces where efficiency matters. It's a practical addition to any modern home.",
            basePrice: 990.00,
            originalPrice: 1690.00,
            category: "Home & Kitchen",
            images: {
                "white": imagePaths.products.product_1.product_17,
                "light_beige": imagePaths.products.product_1.product_110,
                default: imagePaths.products.product_1.product_17,
            },
            thumbnails: [
                imagePaths.products.product_1.product_17,
                imagePaths.products.product_1.product_12,
                imagePaths.products.product_1.product_13,
                imagePaths.products.product_1.product_11,
                imagePaths.products.product_1.product_15,

            ],
            colors: [
                { name: "Light gray", hex: "#b3b3b5", imageKey: "white" },
                { name: "Light beige", hex: "#e5d7cd", imageKey: "light_beige" },
            ],
            specifications: [
                { label: "Brand", value: "DPEX" },
                { label: "Manufacturer", value: "DPEX" },
                { label: "Color", value: "Light gray & Light beige" },
                { label: "Model", value: "C-317" },
                { label: "Material", value: "Plastic" },
                { label: "Dimension", value: "24*16*26cm, The size of the folded is 24*8*26cm" }

            ],
            isFeatured: true
        },

        {
            id: "product_8",
            name: "Electric Cleaning Brush",
            shortDescription: "This versatile brush effortlessly cleans kitchen sinks, Hari Patil, sofas, tiles, meat fat, and Thai glass surfaces.",
            longDescription: "Introducing a powerful and versatile electronic cleaning brush designed to remove stubborn dirt and grime from every corner of your home or kitchen. Whether you're scrubbing the kitchen sink, Hari Patil, sofas, or tiles, the included Teflon brush makes the job effortless. Built for durability and performance, it features a brushless motor and a sturdy ABS plastic body. The built-in 2000mAh lithium battery offers extended use on a single charge, and USB charging ensures universal convenience. Fully waterproof, this cleaning brush is easy to clean and ready for any mess—wet or dry.",
            basePrice: 850.00,
            originalPrice: 1590.00,
            category: "Home & Kitchen",
            images: {
                "off_white": imagePaths.products.product_2.product_24,
                default: imagePaths.products.product_2.product_24,
            },
            thumbnails: [
                imagePaths.products.product_2.product_26,
                imagePaths.products.product_2.product_22,
                imagePaths.products.product_2.product_21,
                imagePaths.products.product_2.product_23,
                imagePaths.products.product_2.product_25,

            ],
            colors: [
                { name: "Off white", hex: "#b3b3b5", imageKey: "off_white" },
            ],
            specifications: [
                { label: "Brand", value: "RAYBIN" },
                { label: "Manufacturer", value: "RAYBIN" },
                { label: "Color", value: "Off-White" },
                { label: "Model", value: "RBSKA018-17" },
                { label: "Material", value: "ABS Plastic" },
                { label: "Dimension", value: " 17.5*7.4*26cm, weight: 372.5g" },


            ],
            isFeatured: true
        },


    ],

    footerShopLinks: [
        { name: "All Products", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "On Sale", href: "#" },
        { name: "Best Sellers", href: "#" },
    ],
    footerCustomerServiceLinks: [
        { name: "Help Center", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Order Status", href: "#" },
        { name: "Shipping Info", href: "#" },
    ],
    footerCompanyLinks: [
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
    ]
};

