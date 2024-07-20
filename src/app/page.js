import Image from "next/image";
import styles from "./page.module.css";
import { getData } from "./lib/firebaseModel";

export default function Home() {
  console.log(getData());
  return <main className={styles.main}>Hello World</main>;
}
