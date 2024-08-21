import styles from "../styles/Header.module.scss"

export function Iconsvg({ iconClass, iconName }) {
  return (
    <svg className={`${iconClass} cursor-point`}>
      <use xlinkHref={`./public/icons/${iconName}.svg#icon-${iconName}`}></use>
    </svg>
  )
}

export default function Header() {
  return (
    <header className={styles["site-header"]}>
      <div className={`${styles["header-container"]} mx-auto`}>
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" className={styles["navbar-toggle"]} type="checkbox" />
        <label htmlFor="navbar-toggle" className={styles["burger-container"]}>
          <Iconsvg iconClass="icon-toggle" iconName="toggle"/>
        </label>

        {/* <!-- navbar-menu --> */}
        <nav className={styles["navbar-menu"]}>
          <ul className={`${styles["nav-list"]} ${styles["site-menu-list"]} mr-auto`}>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href="#">男款</a>
            </li>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href="#">女款</a>
            </li>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href="#">最新消息</a>
            </li>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href="#">客製商品</a>
            </li>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href="#">聯絡我們</a>
            </li>
          </ul>
          <ul className={`${styles["nav-list"]} ${styles["site-action-list"]}`}>
            {/* <!-- search --> */}
            <li className={styles["nav-item"]}>
              <Iconsvg iconClass={styles["nav-icon"]} iconName="search"/>
            </li>
            {/* <!-- cart --> */}
            <li className={styles["nav-item"]}>
              <Iconsvg iconClass={styles["nav-icon"]} iconName="cart"/>
            </li>
            <li id="theme-toggle" className={styles["nav-item"]}>
              {/* <!-- moon --> */}
              <Iconsvg iconClass={styles["nav-icon"]} iconName="moon"/>
              {/* <!-- sun --> */}
              <Iconsvg iconClass={styles["nav-icon"]} iconName="sun"/>
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className={styles["header-logo-container"]} href="#">
          <Iconsvg iconClass={styles["icon-logo"]} iconName="logo"/>
        </a>
      </div>
    </header>
  )
}