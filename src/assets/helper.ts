import type { Product } from "./interface";

export const categoriesData = [
  {
    imgPath: "/images/categories/organic_vegitable_image.png",
    backgroundColor: "#fff6da",
    text: "Organic Vegies",
    link: "/category/vegetables",
    categoryName: "Vegetables",
  },
  {
    imgPath: "/images/categories/fresh_fruits_image.png",
    backgroundColor: "#fee0e0",
    text: "Fresh Fruits",
    link: "/category/fresh-fruits",
    categoryName: "Fruits",
  },
  {
    imgPath: "/images/categories/bottles_image.png",
    backgroundColor: "#f0f5de",
    text: "Cold Drinks",
    link: "/category/cold-drinks",
    categoryName: "Drinks",
  },
  {
    imgPath: "/images/categories/maggi_image.png",
    backgroundColor: "#e1f5eb",
    text: "Instant Food",
    link: "/category/instant-food",
    categoryName: "Instant",
  },
  {
    imgPath: "/images/categories/dairy_product_image.png",
    backgroundColor: "#fee6cd",
    text: "Dairy Products",
    link: "/category/dairy-products",
    categoryName: "Dairy",
  },
  {
    imgPath: "/images/categories/bakery_image.png",
    backgroundColor: "#e0f6fe",
    text: "Bakery & Breads",
    link: "/category/bakery-breads",
    categoryName: "Bakery",
  },
  {
    imgPath: "/images/categories/grain_image.png",
    backgroundColor: "#f2e2f9",
    text: "Grains & Cereals",
    link: "/category/grains-cereals",
    categoryName: "Grains",
  },
];

export const stars = [
  "/images/updated-svg/star_icon.svg",
  "/images/updated-svg/star_icon.svg",
  "/images/updated-svg/star_icon.svg",
  "/images/updated-svg/star_icon.svg",
  "/images/updated-svg/star_icon.svg",
];

export const bannerTwoContent = [
  {
    imgPath: "/images/updated-svg/delivery_truck_icon.svg",
    title: "Fastest Delivery",
    text: "Groceries delivered in under 30 minutes.",
  },

  {
    imgPath: "/images/updated-svg/leaf_icon.svg",
    title: "Freshness Guaranteed",
    text: "Fresh produce straight from the source.",
  },

  {
    imgPath: "/images/updated-svg/coin_icon.svg",
    title: "Affordable Prices",
    text: "Quality groceries at unbeatable prices.",
  },

  {
    imgPath: "/images/updated-svg/trust_icon.svg",
    title: "Trusted by Thousands",
    text: "Loved by 10,000+ happy customers.",
  },
];

export const quickLinksData = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#" },
      { name: "Best Sellers", href: "#best-sellers" },
      { name: "Offers & Deals", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },

  {
    title: "Need help?",
    links: [
      { name: "Delivery Information", href: "#" },
      { name: "Return & Refund Policy", href: "#" },
      { name: "Payment Methods", href: "#" },
      { name: "Track your Order", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },

  {
    title: "Follow Us",
    links: [
      { name: "Instagram", href: "https://www.instagram.com/" },
      { name: "Twitter", href: "#" },
      { name: "Facebook", href: "https://www.facebook.com/" },
      { name: "YouTube", href: "https://www.youtube.com/" },
    ],
  },
];

export const allProductsContent = [
  {
    id: "potato57x9",
    imgPath: "/images/all-products/potato_image_1.png",
    categoryName: "Vegetables",
    productName: "Potato 500g",
    actualPrice: 35,
    oldPrice: 40,
  },

  {
    id: "tomato42z7",
    imgPath: "/images/all-products/tomato_image.png",
    categoryName: "Vegetables",
    productName: "Tomato 1kg",
    actualPrice: 28,
    oldPrice: 30,
  },

  {
    id: "carrot93pl",
    imgPath: "/images/best-sellers/carrot_image.png",
    categoryName: "Vegetables",
    productName: "Carrot 500g",
    actualPrice: 44,
    oldPrice: 50,
  },

  {
    id: "spinac88rt",
    imgPath: "/images/all-products/spinach_image_1.png",
    categoryName: "Vegetables",
    productName: "Spinach 500g",
    actualPrice: 15, 
    oldPrice: 18,
  },

  {
    id: "onion77lk",
    imgPath: "/images/all-products/onion_image_1.png",
    categoryName: "Vegetables",
    productName: "Onion 500g",
    actualPrice: 45,
    oldPrice: 50,
  },

  {
    id: "apple29mn",
    imgPath: "/images/best-sellers/apple_image.png",
    categoryName: "Fruits",
    productName: "Apple 1kg",
    actualPrice: 90,
    oldPrice: 100,
  },
  {
    id: "amul95jxq",
    imgPath: "/images/all-products/amul_milk_image.png",
    categoryName: "Dairy",
    productName: "Amul Milk 1L",
    actualPrice: 55,
    oldPrice: 60,
  },
  {
    id: "cocaco12aa",
    imgPath: "/images/all-products/coca_cola_image.png",
    categoryName: "Drinks",
    productName: "Coca-cola 1.5L",
    actualPrice: 75,
    oldPrice: 80,
  },
  {
    id: "basmat19bc",
    imgPath: "/images/all-products/basmati_rice_image.png",
    categoryName: "Grains",
    productName: "Basmati Rice 5kg",
    actualPrice: 520,
    oldPrice: 550,
  },
  {
    id: "brown36brd",
    imgPath: "/images/best-sellers/bakery_image.png",
    categoryName: "Bakery",
    productName: "Brown Bread 400g",
    actualPrice: 35,
    oldPrice: 40,
  },
  {
    id: "maggie82pk",
    imgPath: "/images/all-products/maggie-pack.png",
    categoryName: "Instant",
    productName: "Maggie Noodles 280g",
    actualPrice: 25,
    oldPrice: 30,
  },
  {
    id: "orange66xy",
    imgPath: "/images/all-products/orange_image.png",
    categoryName: "Fruits",
    productName: "Orange 1kg",
    actualPrice: 50,
    oldPrice: 65,
  },
  {
    id: "banana73zz",
    imgPath: "/images/all-products/banana_image_1.png",
    categoryName: "Fruits",
    productName: "Banana 1kg",
    actualPrice: 45,
    oldPrice: 50,
  },
  {
    id: "mango41mlk",
    imgPath: "/images/all-products/mango_image_1.png",
    categoryName: "Dairy",
    productName: "Mango 1kg",
    actualPrice: 80,
    oldPrice: 120,
  },
  {
    id: "grapes98hh",
    imgPath: "/images/all-products/grapes_image_1.png",
    categoryName: "Fruits",
    productName: "Grapes 500g",
    actualPrice: 65,
    oldPrice: 70,
  },
  {
    id: "paneer57qw",
    imgPath: "/images/all-products/paneer_image.png",
    categoryName: "Dairy",
    productName: "Paneer 200g",
    actualPrice: 85,
    oldPrice: 90,
  },
  {
    id: "eggs90bbq",
    imgPath: "/images/all-products/eggs_image.png",
    categoryName: "Dairy",
    productName: "Eggs 12 pcs",
    actualPrice: 50,
    oldPrice: 70,
  },
  {
    id: "cheese88xx",
    imgPath: "/images/best-sellers/cheese_image.png",
    categoryName: "Dairy",
    productName: "Cheese 200g",
    actualPrice: 100,
    oldPrice: 140,
  },
  {
    id: "sprite61pp",
    imgPath: "/images/all-products/sprite_image_1.png",
    categoryName: "Drinks",
    productName: "Sprite 1.5L",
    actualPrice: 80,
    oldPrice: 95,
  },
  {
    id: "seven34upg",
    imgPath: "/images/all-products/seven_up_image_1.png",
    categoryName: "Drinks",
    productName: "7 UP 1.5L",
    actualPrice: 85,
    oldPrice: 105,
  },
  {
    id: "fanta23ys",
    imgPath: "/images/all-products/fanta_image_1.png",
    categoryName: "Drinks",
    productName: "Fanta 1.5L",
    actualPrice: 90,
    oldPrice: 130,
  },
  {
    id: "wheat47flr",
    imgPath: "/images/all-products/wheat_flour_image.png",
    categoryName: "Grains",
    productName: "Wheat flour 5kg",
    actualPrice: 250,
    oldPrice: 300,
  },
  {
    id: "quinoa88gg",
    imgPath: "/images/best-sellers/quinoa_image.png",
    categoryName: "Grains",
    productName: "Organic Quinoa 500g",
    actualPrice: 420,
    oldPrice: 500,
  },
  {
    id: "brown59ric",
    imgPath: "/images/all-products/brown_rice_image.png",
    categoryName: "Grains",
    productName: "Brown Rice 1kg",
    actualPrice: 120,
    oldPrice: 140,
  },
  {
    id: "barley16ff",
    imgPath: "/images/all-products/barley_image.png",
    categoryName: "Grains",
    productName: "Barley 1kg",
    actualPrice: 140,
    oldPrice: 180,
  },
  {
    id: "butter35cr",
    imgPath: "/images/all-products/butter_croissant_image.png",
    categoryName: "Bakery",
    productName: "Butter Croissant 100g",
    actualPrice: 35,
    oldPrice: 40,
  },
  {
    id: "knorr64cup",
    imgPath: "/images/all-products/knorr_soup_image.png",
    categoryName: "Instant",
    productName: "Knorr Cup Soup 70g",
    actualPrice: 45,
    oldPrice: 60,
  },
];

// Filter products by category
export const filterByCategory = (category: string): Product[] => {
  return allProductsContent.filter(
    (item) => item.categoryName.toLowerCase() === category.toLowerCase()
  );
};

// Group products by category
export const groupByCategory = (): Record<string, Product[]> => {
  return allProductsContent.reduce((acc, product) => {
    if (!acc[product.categoryName]) {
      acc[product.categoryName] = [];
    }
    acc[product.categoryName].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
};
