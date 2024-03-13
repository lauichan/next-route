import Link from "next/link";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navigation}>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/report">report</Link>
      </li>
      <li>
        <Link href="/todos-csr">todos-csr</Link>
      </li>
      <li>
        <Link href="/todos-ssr">todos-ssr</Link>
      </li>
    </nav>
  );
}

export default Nav;
