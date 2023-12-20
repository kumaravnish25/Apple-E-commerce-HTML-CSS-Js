const products = [
    {
      id: 1,
      company: "Apple, I-Phone",
      name: "Apple iPhone 15 Pro Max (1 TB)",
      price: 199900,
      oldPrice: 229900,
      promotion: function () {
        return Math.round((this.price * 100) / this.oldPrice);
      },
      images: [
        { img: "./images/iphone-1.jpg", ["data-value"]: 1 },
        { img: "./images/iphone-2.jpg", ["data-value"]: 2 },
        { img: "./images/iphone-4.jpg", ["data-value"]: 3 },
        { img: "./images/iphone-3.jpg", ["data-value"]: 4 },
      ],
      snippet: ` New Apple iPhone 15 Pro Max. Aerospace-grade titanium design,
       making it both strong and light. USB-C connector. All-day battery life up
        to 29hrs video playback. 48MP main camera with multiple focal lengths, like 
        having seven pro lenses in your pocket.
      `,
    },
    {
      id: 2,
      company: "Apple, i-Pad",
      name: "Apple 2022 iPad Pro 11th Gen (128GB)(4th Generation)",
      price: 78900,
      oldPrice: 81900,
      promotion: function () {
        return Math.round((this.price * 100) / this.oldPrice);
      },
      images: [
        { img: "./images/ipad-1.jpg", ["data-value"]: 1 },
        { img: "./images/ipad-2.jpg", ["data-value"]: 2 },
        { img: "./images/ipad-3.jpg", ["data-value"]: 3 },
        { img: "./images/ipad-4.jpg", ["data-value"]: 4 },
      ],
      snippet: `Apple's latest iPad Pro comes with the faster M2 processor and supports Wi-Fi 6E but otherwise shares the same design as its predecessor.`,
    },
    {
      id: 3,
      company: "Apple, MacBook",
      name: "Apple 2023 MacBook Pro (M3 Pro chip, 36GB, 512GB)",
      price: 289900,
      oldPrice: 329900,
      promotion: function () {
        return Math.round((this.price * 100) / this.oldPrice);
      },
      images: [
        { img: "./images/macbook-1.jpg", ["data-value"]: 1 },
        { img: "./images/macbook-2.jpg", ["data-value"]: 2 },
        { img: "./images/macbook-3.jpg", ["data-value"]: 3 },
        { img: "./images/macbook-4.jpg", ["data-value"]: 4 },
      ],
      snippet: `The unified memory architecture of M3 delivers high bandwidth, low latency, unmatched power efficiency, and supports up to 24GB of fast, unified memory. The unified memory architecture of M3 Pro supports up to 36GB of fast, unified memory, enabling larger projects to be tackled on MacBook Pro when users are on the go`,
    },
  ];
  
  export default products;