import React from "react";
import styles from "./Main.module.scss";

//import icons
import search_icon from "../../IMG/search_icon.svg";
import upload_icon from "../../IMG/upload_icon.svg";
import sort_by_alpha from "../../IMG/sort_by_alpha.svg";

const Main = () => {
    return(
        <main>
            <div className={styles.tools_flexWrap}>
                <div className={styles.tools_title}><h2>STUDENTS</h2></div>
                <div>
                    <form className={styles.tools_form}>
                        <input className={styles.tools_searchInput} type="text" placeholder="Enter Student Name, Parent or ID here"/>
                        <button className={styles.tools_searchButton}><img src={search_icon} alt="search"/></button>
                    </form>
                </div>
                <div>
                    <button className={styles.tools_csvButton}><img src={upload_icon} alt="upload"/><span>EXPORT CSV</span></button>
                </div>
            </div>
            <div>
                <div>
                    <input type="checkbox"/>
                </div>
                <div><span>NAME</span></div>
                <div><img src={sort_by_alpha} alt="sort by alpha"/></div>
            </div>
        </main>
    )
}

export default Main;