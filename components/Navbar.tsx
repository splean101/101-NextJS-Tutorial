import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar = () => {
const {pathname} = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>splean101</div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => {
          return (
            <Link key={id} href={path} legacyBehavior>
                <a className={ pathname === path ? styles.active : undefined}>{title}</a>
              
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
