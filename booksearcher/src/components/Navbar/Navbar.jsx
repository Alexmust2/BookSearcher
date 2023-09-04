import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className='search_input-container'>
                <input placeholder='Search book...' className='search_input'></input>
                <button className='search_button'>Search</button>
            </div>
            <div className='search_tags'>
                <div className="categories_filter-container">
                    <label htmlFor="categories_filter">Categories</label>
                    <select id='categories_filter' defaultValue="all">
                        <option value="all">all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="history">history</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                    </select>
                </div>
                <div className="date_filter-container">
                    <label htmlFor="date_filter">Sorting by</label>
                    <select id='date_filter' defaultValue="relevance">
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;