const products = [
    { id: "1", name: "polera", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw9775b184/images/large/MD625415-2.jpg?sw=1000&sh=1000&sm=fit", price: 15000, category: "mujer", description: "Polera de Mujer", stock: 15 },
    { id: "2", name: "Blusa", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw21cfe841/images/large/MD532238-2.jpg?sw=1000&sh=1000&sm=fit", price: 4500, category: "mujer", description: "Blusa de Mujer Casual", stock: 5 },
    { id: "3", name: "Blusa Tropical", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw6424e2ca/images/large/MD530906.jpg?sw=1000&sh=1000&sm=fit", price: 6800, category: "mujer", description: "Blusa estilo tropical mujer", stock: 2 },
    { id: "4", name: "Short", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dwcd0910e6/images/large/MD532434.jpg?sw=1000&sh=1000&sm=fit", price: 5300, category: "mujer", description: "Short Mujer Azul", stock: 3 },
    { id: "5", name: "Vestido", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dweae2aa6c/images/large/MD625267.jpg?sw=1000&sh=1000&sm=fit", price: 7800, category: "mujer", description: "Vestido liso de color azul, moda verano", stock: 8 },
    { id: "6", name: "Mochila", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw79c22318/images/large/PD580033.jpg?sw=1000&sh=1000&sm=fit", price: 6400, category: "infantil", description: "Mochila Unicornio", stock: 1 },
    { id: "7", name: "Lapiz", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw7f47c7f6/images/large/PD580029.jpg?sw=1000&sh=1000&sm=fit", price: 3000, category: "infantil", description: "Lapiz Unicornio Niña", stock: 0 },
    { id: "8", name: "Polera niño", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw45b5b01a/images/large/PD550291.jpg?sw=1000&sh=1000&sm=fit", price: 9000, category: "infantil", description: "Polera de niño roja", stock: 6 },
    { id: "9", name: "Polera niña", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dwc6fdb7d5/images/large/PD550243.jpg?sw=1000&sh=1000&sm=fit", price: 7500, category: "infantil", description: "Polera de niña sirena", stock: 20 },
    { id: "10", name: "Polera blanca", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw013312f1/images/large/MD540529.jpg?sw=1000&sh=1000&sm=fit", price: 12500, category: "hombre", description: "Polera de hombre blanca estampada", stock: 7 },
    { id: "11", name: "Polera negra", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw990ffef3/images/large/MD540449.jpg?sw=1000&sh=1000&sm=fit", price: 3700, category: "hombre", description: "Polera de hombre estamapdo de palabras", stock: 1 },
    { id: "12", name: "Poleron gris", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw42bdc8b7/images/large/MD133753.jpg?sw=1000&sh=1000&sm=fit", price: 6980, category: "hombre", description: "Poleron juvenil color gris, cierre en el centro", stock: 3 },
    { id: "13", name: "Jeans", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw44a6fd3d/images/large/MD217381.jpg?sw=1000&sh=1000&sm=fit", price: 4750, category: "hombre", description: "Jeans hombre azul estilo desgastado slim fit", stock: 7 },
    { id: "14", name: "Zapato hombre", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw3dbe600d/images/large/MD410973.jpg?sw=1000&sh=1000&sm=fit", price: 3700, category: "calzado", description: "Zapato mocasin casual gamuza", stock: 1 },
    { id: "15", name: "Zapatilla infantil", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dwf6d42b56/images/large/PD411011.jpg?sw=1000&sh=1000&sm=fit", price: 6980, category: "calzado", description: "zapatilla infantil unisex", stock: 3 },
    { id: "16", name: "Zapatilla", img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGHZ_STG/on/demandware.static/-/Sites-master-catalog-tricot/default/dw33db5673/images/large/MD415657.jpg?sw=1000&sh=1000&sm=fit", price: 7800, category: "calzado", description: "Zapatilla Juvenil Mujer Negra", stock: 8 },
];

export const getProducts = () => {
    return new Promise((resolve, rejects) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 1500);
        } else {
            rejects("Sin Stock! :( ");
        }
    });
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const product = products.find((p) => p.id === id);
            setTimeout(() => {
                if (!product) {
                    reject(`No se encuentra el producto con el id ${id}`);
                }
                resolve(product);
            }, 1500);
        } else {
            reject("No hay productos");
        }
    });
};
