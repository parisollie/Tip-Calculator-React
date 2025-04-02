//Vid 119, es tipo numero
export function formatCurrency(quantity: number) {
    // Lo formateamos en ingles, y lo convertimos en dolares
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}
