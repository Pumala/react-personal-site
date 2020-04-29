import React, { useEffect, useReducer } from 'react';
import './Quote.scss';
import axios from 'axios';
import * as CONSTANTS from '../../constants';

const defaultQuote = {
    text: 'The greatest obstacle to connecting with our joy is resentment.',
    author: 'Pema Chodron'
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_QUOTE_SUCCESS':
            return {
                isLoading: false,
                ...action.payload
            };
        case 'FETCH_QUOTE_ERROR':
            return {
                isLoading: false,
                text: defaultQuote.text,
                author: defaultQuote.author
            };
        default:
            return state;
    }
}

const Quote = () => {

    const [state, dispatch] = useReducer(reducer, {
        text: '',
        author: '',
        isLoading: true
    });

    useEffect(() => {
        const getQuote = async () => {
            try {
                const res = await axios.get(`${CONSTANTS.CORS_API}${CONSTANTS.QUOTE_API}/?method=getQuote&lang=en&format=json`);

                if (res.data && res.data.quoteText) {
                    dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: {
                        text: res.data.quoteText,
                        author: defaultQuote.author ? defaultQuote.author : 'Anonymous'
                    } });
                } else {
                    dispatch({ type: 'FETCH_QUOTE_ERROR' });
                }

            } catch (err) {
                dispatch({ type: 'FETCH_QUOTE_ERROR' });
            }

        }

        getQuote();
    }, []);

    const { text, author, isLoading } = state;
    return (
        <section className="quote">
            <h2>Get Inspired</h2>
            {
                isLoading ? (<div className="loading"></div>) : (
                    <>
                        <p className="text">'{text}'</p>
                        <p className="author">- {author}</p>
                    </>
                )
            }
      </section>
    );
}

export default Quote;
