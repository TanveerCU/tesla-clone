import Header from "./components/Header";
import Body from "./components/Body";
import React, { useEffect, useState } from "react";

const carData = [
  {
    id: 0,
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    image: "model-s.jpg",
    range: "390",
    time: "1.99",
    topSpeed: "200",
    peakPower: "1,020",
  },
  {
    id: 1,
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    image: "model-3.jpg",
    range: "400",
    time: "2.99",
    topSpeed: "180",
    peakPower: "900",
  },
  {
    id: 2,
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    image: "model-x.jpg",
    range: "350",
    time: "1.55",
    topSpeed: "150",
    peakPower: "1,130",
  },
  {
    id: 3,
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    image: "model-y.jpg",
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
  },
  {
    id: 4,
    title: "Solar Roof",
    description: "Order Online for Touchless Delivery",
    image: "solar-roof.jpg",
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
  },
  {
    id: 5,
    title: "Accessories",
    description: "Order Online for Touchless Delivery",
    image: "accessories.jpg",
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
  },
];

function App() {
  const [offset, setOffset] = useState(0);

  const scrollCalculate = () => {
    setOffset(window.pageYOffset);
  };
  console.log(offset);
  useEffect(() => {
    const scrollY = () => {
      window.addEventListener("scroll", scrollCalculate);
    };
    scrollY();

    return () => {
      window.removeEventListener("scroll", scrollCalculate);
    };
  }, []);

  return (
    <>
      <Header />
      {carData.map((element) => {
        return (
          <Body
            scroll={offset}
            cardata={element}
            key={element.id}
            image={element.image}
          />
        );
      })}
    </>
  );
}

export default App;
