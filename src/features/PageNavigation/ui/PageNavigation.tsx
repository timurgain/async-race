import { NavLink } from 'react-router-dom';
import styles from './PageNavigation.module.scss';
import routes from '@/app/routes';
import clsx from 'clsx';

type Props = {};

export function PageNavigation({}: Props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li>
          <NavLink
            className={({ isActive }) => clsx(styles.link, { [styles.link_active]: isActive })}
            to={routes.garage}
          >
            GARAGE
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => clsx(styles.link, { [styles.link_active]: isActive })}
            to={routes.winners}
          >
            WINNERS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
