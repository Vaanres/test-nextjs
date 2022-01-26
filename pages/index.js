import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={`${styles.element} ${styles.dot_pattern} h-screen`}></div>
    </div>
  );
}
