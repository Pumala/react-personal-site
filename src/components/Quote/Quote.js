import React, { useEffect, useState } from 'react';
import './Quote.scss';
import axios from 'axios';
import * as CONSTANTS from '../../constants';

const Quote = () => {

    const[text, setText] = useState('');

    const [author, setAuthor] = useState('');

    useEffect(() => {
        const getQuote = async () => {

            // const res = await axios.get(`${CONSTANTS.CORS_API}${CONSTANTS.QUOTE_API}/?method=getQuote&lang=en&format=json`);

            const res = await axios.get(`${CONSTANTS.QUOTE_API}/?method=getQuote&lang=en&format=json`);

            try {
                // console.log('res quote:', res.data);
                setText(res.data.quoteText);
                setAuthor(res.data.quoteAuthor);
            } catch (err) {
                // console.log('err', err);
            }

        }

        getQuote();
    })

    return (
        <section className="quote">
        {
            text && <p className="text">
          '{text}'
        </p>
        }
        {
            author && <p className="author">- {author}</p>
        }
      </section>
    );
}

export default Quote;
