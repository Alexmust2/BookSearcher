import React, {useEffect} from 'react';
import './BookList.css'
import BookCard from '../BookCard/BookCard';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../store/slice/books';

const BookList = (props) => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()


    useEffect(() => {
        {dispatch(getBooks())}
    }, [])

    if(state.books.isLoading) {
        return <h1>Loading....</h1>
    }



    return (
        <div className='list_container'>
            {
                state.books.data && state.books.data.map(book => {
                    return <BookCard 
                                key={book.id} 
                                title={book.volumeInfo.title} 
                                category={book.volumeInfo.categories}
                                bookImg={book.volumeInfo.imageLinks.smallThumbnail}
                                authors={book.volumeInfo.authors}    
                            />
                })
            } 
        </div>
    );
};

export default BookList;