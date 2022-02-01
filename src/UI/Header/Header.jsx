import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.scss";
import user_photo from "../../IMG/user_photo.jpg";
import dropdown_arrow from "../../IMG/dropdown_arrow.svg";

const Header = () => {
    return(
        <header>
            <div className={styles.headerNavBar}>
                <div>
                    <select className={styles.dropdown} name="Organization">
                        <option value="school_1">SCHOOL 1</option>
                        <option value="school_2">SCHOOL 2</option>
                    </select>
                </div>
                <div>
                    <NavLink className={styles.headerNavLink} to="#">ANALYTICS</NavLink>
                </div>
                <div>
                    <NavLink className={styles.headerNavLink} to="#">GRADEBOOKS</NavLink>
                </div>
                <div>
                    <NavLink className={styles.headerNavLink} to="#">TESTS</NavLink>
                </div>
                <div>
                    <NavLink className={styles.headerNavLink} to="#">STUDENTS</NavLink>
                </div>
                <div>
                    <NavLink className={styles.headerNavLink} to="#">TEACHERS</NavLink>
                </div>
                <div>
                    <NavLink className={styles.headerNavLink} to="#">ARCHIVE</NavLink>
                </div>
                <div className={styles.loginWrapp}>
                    <div className={styles.loginPhoto}><img src={user_photo} alt="user_photo"/></div>
                    <div className={styles.dropdown_arrow}><img src={dropdown_arrow} alt="dropdown_menu"/></div>
                </div>
            </div>
        </header>
    )
}
export default Header;