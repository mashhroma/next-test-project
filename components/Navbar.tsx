import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
    const navigation = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'Posts', path: '/posts' },
        { id: 3, title: 'Contacts', path: '/contacts' }
    ];

    const { pathname } = useRouter();

    return (
        <nav className={styles.bar}>
            <div className={styles.logo}><Image src="/logo.png" alt="logo" width={100} height={70} /></div>
            <ul className={styles.links}>
                {
                    navigation.map(({ id, title, path }) =>
                        <li key={id}>
                            <Link href={path} className={path === pathname ? styles.active : ''}>{title}</Link>
                        </li>)

                }
            </ul>
        </nav>
    )
}