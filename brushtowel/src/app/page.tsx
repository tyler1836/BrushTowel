"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [learnMore, setLearnMore] = useState(false)
  function openLink(url:string) {
    window.open(url, "_blank")
  }
  return (
    <div className={`${styles.background} "container-fluid"`} >
      <div className="row-center align-items-center">
        <h4 className="row-center text-center text-light">Welcome To</h4>
        <h1 className="row-center text-center text-light">BrushTowel</h1>
        <h6 className="row-center text-center text-light">Make your next shot always count</h6>
      </div>
      <div className="row-center align-items-center text-center">
        <button type="button" className="btn btn-dark" style={{margin: "10px"}} onClick={() => {setLearnMore(!learnMore), console.log(learnMore)}}>Learn more</button>
        <button type="button" className="btn btn-dark" style={{margin: "10px"}} onClick={() => openLink("https://www.amazon.com/dp/B0F8116H1H")}>Buy Now</button>
      </div>
    </div>
  );
}
