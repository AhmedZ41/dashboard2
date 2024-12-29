// dummyData.js
// Dummy data for stores, categories, and products

const stores = [
    { id: 1, name: "Fitness Store", location: "New York, USA", category_id: 1 },
    { id: 2, name: "Tech Gadgets Shop", location: "San Francisco, USA", category_id: 2 },
    { id: 3, name: "Sports Gear Outlet", location: "London, UK", category_id: 3 }
];

const categories = [
    { id: 1, name: "Fitness", description: "Everything related to fitness and health." },
    { id: 2, name: "Electronics", description: "Latest tech gadgets and accessories." },
    { id: 3, name: "Sports", description: "Sports equipment and gear for all sports." }
];

const products = [
    { id: 101, name: "Dumbbells", store_id: 1, category_id: 1, price: 20, stock: 50 },
    { id: 102, name: "Resistance Bands", store_id: 1, category_id: 1, price: 15, stock: 75 },
    { id: 201, name: "Smart Watch", store_id: 2, category_id: 2, price: 100, stock: 30 },
    { id: 202, name: "Fitness Tracker", store_id: 2, category_id: 2, price: 50, stock: 60 },
    { id: 301, name: "Football", store_id: 3, category_id: 3, price: 25, stock: 100 },
    { id: 302, name: "Soccer Cleats", store_id: 3, category_id: 3, price: 40, stock: 40 }
];

module.exports = { stores, categories, products };
