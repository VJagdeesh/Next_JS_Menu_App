import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, Pages
          <span className={classes.highlight}>By You</span>
        </h1>
        <p>Choose your meal and cook it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
