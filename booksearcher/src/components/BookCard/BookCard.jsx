import React from 'react';
import './BookCard.css'

const BookCard = (props) => {
    return (
        <div className='card_container'>
            <img src={props.bookImg} className="book-img"/>
            <div className='book-category'>{props.category}</div>
            <h1 className='book-title'>{props.title}</h1>
            <div className='book-authors'>{props.authors}</div>
        </div>
    );
};

export default BookCard;