import React from "react";

//import icons
import search_icon from "../../IMG/search_icon.svg";
import upload_icon from "../../IMG/upload_icon.svg";
import sort_by_alpha from "../../IMG/sort_by_alpha.svg";

const Main = () => {
    return(
        <main>
            <div>
                <div><h2>Students</h2></div>
                <div>
                    <form>
                        <input type="text" placeholder="Enter Student Name, Parent or ID here"/>
                        <button><img src={search_icon} alt="search"/></button>
                    </form>
                </div>
                <div>
                    <button><img src={upload_icon} alt="upload"/> EXPORT CSV</button>
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