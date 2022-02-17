import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.scss";

//import images & icons
import user_photo from "../../IMG/user_photo.jpg";
import dropdown_arrow from "../../IMG/dropdown_arrow.svg";
import close_icon from "../../IMG/close_icon.svg";

const Header = () => {
    return( 
        <header>
            <nav className={styles.header_NavBar}>
                <div>
                    <select name="Organization">
                        <option value="SCHOOL_1">SCHOOL 1</option>
                        <option value="SCHOOL_2">SCHOOL 2</option>
                    </select>
                </div>
                <div><NavLink to="#">ANALYTICS</NavLink></div>
                <div><NavLink to="#">GRADEBOOKS</NavLink></div>
                <div><NavLink to="#">TESTS</NavLink></div>
                <div><NavLink to="#">STUDENTS</NavLink></div>
                <div><NavLink to="#">TEACHERS</NavLink></div>
                <div><NavLink to="#">ARCHIVE</NavLink></div>
                <div className={styles.blockWithIcon}>
                    <div className={styles.loginPhoto}><img src={user_photo} alt="user_photo"/></div>
                    <div className={styles.iconFlexAndSize}><img src={dropdown_arrow} alt="dropdown menu arrow"/></div>
                </div>
            </nav>
            <div className={styles.header_SelectBar}>
                <select name="SHOW ALL">
                    <option value="SHOW_ALL">SHOW ALL</option>
                </select>
                <select name="ALL GRADES">
                    <option value="ALL_GRADES">ALL GRADES</option>
                </select>
                <select name="ALL CLASSES">
                    <option value="ALL_CLASSES">ALL CLASSES</option>
                </select>
                <select name="AV.SCORE">
                        <option value="AV.SCORE">AV.SCORE</option>
                </select>
                <select name="AV.SPEED">
                        <option value="AV.SPEED">AV.SPEED</option>
                </select>
                <select name="ALL CLASSES">
                    <option value="ALL_CLASSES">ALL CLASSES</option>
                </select>
                <div className={styles.blockWithIcon}>
                    <div className={styles.iconFlexAndSize}><img src={close_icon} alt="close_icon"/></div>
                    <div className={styles.closeButton}><div>CLEAR ALL</div></div>
                </div>
            </div>
        </header>
    )
}
export default Header;