export default function priceFormat(value){
    return new Intl.NumberFormat().format(value);
  }