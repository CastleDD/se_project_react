export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/sunny.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../images/day/cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../images/day/rainy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../images/day/stormy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../images/night/snowy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/night.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../images/night/cloudynight.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../images/night/rainynight.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../images/night/stormynight.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../images/night/snownight.png", import.meta.url).href,
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Beanie",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Beanie.png?etag=bc10497cc80fa557f036e94f9999f7b2",
    likes: [],
  },
  {
    _id: 1,
    name: "Boot",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Boot.png?etag=0953a2ea59f1c6ebc832fabacdc9c70e",
    likes: [],
  },
  {
    _id: 2,
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    likes: [],
  },
  {
    _id: 3,
    name: "Coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    likes: [],
  },
  {
    _id: 4,
    name: "Dress",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Dress.png?etag=1f9cd32a311ab139cab43494883720bf",
    likes: [],
  },
  {
    _id: 5,
    name: "Hoodie",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    likes: [],
  },
  {
    _id: 6,
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    likes: [],
  },
  {
    _id: 7,
    name: "Jeans",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jeans.png?etag=58345e8bef1ce5f95ac882e71d309e6c",
    likes: [],
  },
  {
    _id: 8,
    name: "Loafers",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Loafers.png?etag=dc2d6e1ca7b297597406e35c40aef030",
    likes: [],
  },
  {
    _id: 9,
    name: "Sandals",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sandals.png?etag=9bea85a77c0306586d2b71a33b626d41",
    likes: [],
  },
  {
    _id: 10,
    name: "Scarf",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Scarf.png?etag=74efbee93810c926b5507e862c6cb76c",
    likes: [],
  },
  {
    _id: 11,
    name: "Shorts",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Shorts.png?etag=d728c496643f610de8d8fea92dd915ba",
    likes: [],
  },
  {
    _id: 12,
    name: "Skirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Skirt.png?etag=27a6bea7e1b63218820d615876fa31d1",
    likes: [],
  },
  {
    _id: 13,
    name: "Sneakers",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    likes: [],
  },
  {
    _id: 14,
    name: "Sunglasses",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sunglasses.png?etag=a1bced9e331d36cb278c45df51150432",
    likes: [],
  },
  {
    _id: 15,
    name: "Sweatshirt",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sweatshirt.png?etag=008a9674757bea2e0bdb31242e364be0",
    likes: [],
  },
  {
    _id: 16,
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    likes: [],
  },
  {
    name: "Beanie ",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_LyFE8AbxFga6e031BkleGyuE93O3ZP-hQ&s",
    weather: "cold",
    _id: 17,
    likes: [],
  },
];

export const coordinates = {
  latitude: 41.8552,
  longitude: -87.6283,
};

export const APIkey = "74e9c0360a66a567fe0767fb562455f2";
