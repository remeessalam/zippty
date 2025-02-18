import wirelessremotecontrol from "../assets/images/products/wireless-remote-control.jpeg";
import wirelessremotecontrol1 from "../assets/images/products/wireless-remote-control1.png";
import wirelessremotecontrol2 from "../assets/images/products/wireless-remote-control2.jpeg";
import wirelessremotecontrol3 from "../assets/images/products/wireless-remote-control3.jpeg";

// product images

import remotecar from "../assets/images/productlist/remote-control-car.png";
import catlaser from "../assets/images/productlist/catlaser.png";
import catelaserautomatic from "../assets/images/productlist/cat-laser-automatic.png";
import dogbed from "../assets/images/productlist/dog-bed.jpeg";
import dogbowl from "../assets/images/productlist/dog-bowl.jpeg";
import dogfood from "../assets/images/productlist/dog-food.jpeg";
import doghoodies from "../assets/images/productlist/dog-hoodies.jpeg";
import dogleash from "../assets/images/productlist/dog-leash.jpeg";
import premiumdogfood from "../assets/images/productlist/preimum-dog-food.jpeg";
import preimumcatfood from "../assets/images/productlist/premium-cat-food.jpeg";
import catbag from "../assets/images/productlist/cat-bag.jpeg";
export const productDetails = [
  {
    id: 1,
    productName: "E&E Bestlife Smart Car Remote Control",
    productImage: wirelessremotecontrol,

    discountPer: 61,
    actualPrice: 1998,
    mrp: 5100,
    images: [
      wirelessremotecontrol1,
      wirelessremotecontrol2,
      wirelessremotecontrol3,
    ],
    rating: 5,
    description: `The Zippty Interactive Laser Toy keeps your pets entertained, active, and healthy. Designed for both cats and dogs, it projects random laser patterns that trigger their natural chase instincts. Its durable, stable design ensures hours of safe and exciting playtime, making it perfect for energetic pets and multi-pet homes.`,
    additionalInformation: {
      "Pet toy type": "Excercise Toy",
      "Target Species": ["Cat", "Vehicle"],
      "Recommended Uses": "M",
      "For Product": "Playing",
      "Cartoon Character": "No",
      "Indoor/Outdoor Usage": [
        "Outdoor",
        "Blue",
        "Acrylonitrile Butadiene Styrene",
      ],
    },
  },
];

export const products = [
  {
    title: "Remote Control Cat Interactive Moving Toy with 2-Speed Adjustment",
    price: 29.99,
    image: remotecar,
    stock: false,
  },
  {
    title: "JoyZZZ Automatic Cat Laser Toy, Interactive Cat Toy",
    price: 19.99,
    image: catlaser,
    stock: false,
  },
  {
    title: "Cat Laser Toy, Automatic Rotating Laser Pointer for Cats",
    price: 25.99,
    image: catelaserautomatic,
    stock: true,
  },
  {
    title: "Premium Cat Food",
    price: 10.99,
    image: preimumcatfood,
    stock: true,
  },
  {
    title: "Dog Bowl",
    price: 4.99,
    image: dogbowl,
    stock: true,
  },
  {
    title: "Cat Bag Luggage",
    price: 49.99,
    image: catbag,
    stock: true,
  },
  {
    title: "Dog Leash",
    price: 9.95,
    image: dogleash,
    stock: true,
  },
  {
    title: "Dog Bed",
    price: 49.99,
    image: dogbed,
    stock: true,
  },
  {
    title: "Premium Dog Food",
    price: 59.99,
    image: premiumdogfood,
    stock: true,
  },
  {
    title: "Dog Hoodie",
    price: 29.99,
    image: doghoodies,
    stock: true,
  },
  {
    title: "Dog Food",
    price: 24.99,
    image: dogfood,
    stock: true,
  },
];
