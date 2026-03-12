// Wix E-com service disabled for GitHub Pages
export const ecom = {
getCart: () => Promise.resolve(null),
addToCart: () => Promise.resolve({}),
checkout: () => Promise.resolve({ checkoutUrl: '#' }),
listProducts: () => Promise.resolve({ items: [] }),
getProduct: () => Promise.resolve(null),
};
export default ecom;
