function formatPrice(value) {
    const formattedPrice = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  
    return formattedPrice;
  }
  
  export default formatPrice;