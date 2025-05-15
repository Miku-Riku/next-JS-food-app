import classes from "./page.module.css";
import Link from "next/link";

export default function Meals() {
  return (
    <>
      <header className = {classes.header}>
        <h1>Delicious Meals created <span className = {classes.highlight}>by you</span></h1>
        <p>Choowse your favourite recipe and cook it yourself.</p>
        <p className = {classes.cta}>
          <Link href = "/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className = {classes.main}></main>
    </>
  );
}
