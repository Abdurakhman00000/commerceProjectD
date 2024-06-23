export const calcSubPrice = (product) => +product.count * +product.item.price;

export const totalSubPrice = (product) => {
    return product.reduce((acc, el) => {
        return +acc + +el.subPrice;
    }, 0)
}