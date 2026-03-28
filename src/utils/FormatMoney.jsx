export function FormatMoney(priceCent){
    return `$${(Math.round(priceCent)/100).toFixed(2)}`;
}