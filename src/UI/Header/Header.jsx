import React from "react";
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
                        <option value="school_1">SCHOOL 2</option>
                    </select>
                </div>
                <div>
                    <span>ANALYTICS</span>
                </div>
                <div>
                    <span>GRADEBOOKS</span>
                </div>
                <div>
                    <span>TESTS</span>
                </div>
                <div>
                    <span>STUDENTS</span>
                </div>
                <div>
                    <span>TEACHERS</span>
                </div>
                <div>
                    <span>ARCHIVE</span>
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