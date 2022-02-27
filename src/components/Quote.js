import { useState } from 'react';
import React from 'react';
import quotes from '../quotes.json'
import getRandom from '../utils/getRandom';
import CardFooter from './CardFooter';

const colors =[ "#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871" ]

const Quote = () => {

    const [quote, setQuote] = useState(quotes[getRandom()]);

    const changeQuote = () =>{
        setQuote(quotes[getRandom()])
    }

    const color = colors[Math.floor(Math.random() * 6)];
    document.body.style = `background: ${color}`

    return (
        <div className="card" style={{color:color}}>
            <div className="card-quotes">
                <i className="fa-solid fa-quote-left"></i>
                <p>{quote.quote}</p>
            </div>

            <CardFooter quote={quote} changeQuote={changeQuote} color={color} /> 
        </div>
    );
};

export default Quote;