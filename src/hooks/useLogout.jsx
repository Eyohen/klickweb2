export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('cart');
    localStorage.removeItem('authTokens');
    localStorage.removeItem('cartId');
    localStorage.removeItem('walletId');
    localStorage.removeItem('deliveryAddresses');
};