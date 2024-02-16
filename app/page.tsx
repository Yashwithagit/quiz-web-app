import Image from "next/image";
import styles from "./page.module.css";
import { ImagePath,ButtonName } from "@/app/lib/constant";
import Link from "next/link";



export default function Home() {
  const {LogoImage}=ImagePath
    const {Start}=ButtonName
  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <Image src={LogoImage}  alt="logo" className={styles.logo} width={20} height={20}/>
        upraised
      </div>
      <div className={styles.circle}>Quiz</div>
      <Link className={`btn__container ${styles.link__container}`} href={'/question'}><button className='btn'>{Start}</button></Link>
    </main>
  );
}
