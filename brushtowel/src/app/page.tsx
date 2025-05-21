"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  function openLink(url:string) {
    window.open(url, "_blank")
  }
  return (
    <div className={`${styles.background} "container-fluid`} >
      <div className="container text-center">
        <h4 className="row text-center">Welcome To</h4>
        <h1 className="row">BrushTowel</h1>
        <h6 className="row">Make your next shot always count</h6>
      </div>
      <div className="row">
        <button type="button" className="btn btn-dark col-3">Learn more</button>
        <></>
        <button type="button" className="btn btn-dark col-3" onClick={() => openLink("https://www.amazon.com/dp/B0F8116H1H")}>Buy Now</button>
      </div>
    </div>
  );
}
