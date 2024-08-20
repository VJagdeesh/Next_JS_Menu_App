import classes from "./loading.module.css";
import Skeleton from "react-loading-skeleton";
export default function MealsLoading() {
  const skeletonItems = Array(6).fill(null);
  return (
    <main>
      <div className={classes.skeletonGrid}>
        {skeletonItems.map((_, index) => (
          <div key={index} className={classes.skeletonItem}>
            <Skeleton height={140} width={200} />
            <Skeleton height={20} width={180} style={{ marginTop: "10px" }} />
          </div>
        ))}
      </div>
    </main>
  );
}
