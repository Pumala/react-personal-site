import React, { useEffect, useState } from 'react';
import './Quote.scss';
import axios from 'axios';
import * as CONSTANTS from '../../constants';

const Quote = () => {

    const[text, setText] = useState('');

    const [author, setAuthor] = useState('');

    const defaultQuote = {
        text: 'The greatest obstacle to connecting with our joy is resentment.',
        author: 'Pema Chodron'
    }

    useEffect(() => {
        const getQuote = async () => {

            try {
                const res = await axios.get(`${CONSTANTS.CORS_API}${CONSTANTS.QUOTE_API}/?method=getQuote&lang=en&format=json`);

                if (res.data && res.data.quoteText) {
                    setText(res.data.quoteText);
                    setAuthor(defaultQuote.author ? defaultQuote.author : 'Anonymous');
                } else {
                    setText(defaultQuote.text);
                    setAuthor(defaultQuote.author);
                }

            } catch (err) {
                setText(defaultQuote.text);
                setAuthor(defaultQuote.author);
            }

        }

        getQuote();
    })

    return (
        <section className="quote">
            <h2>Random Inspirational Quote to Make You Think</h2>
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
