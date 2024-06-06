import Image from "next/image";
import styles from "./page.module.css";
import ImageList from "./components/ImageList";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageList />
    </main>
  );
}
