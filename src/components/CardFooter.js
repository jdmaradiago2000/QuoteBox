import React from 'react';


const CardFooter = ({quote, changeQuote, color}) => {          // Se pasa el nombre antes del igual ---> Ej: quote={quote}
    return (
        <div className="card-last">
            <p>{quote.author}</p>
            <i className="fa-solid fa-circle-chevron-right button"  onClick={changeQuote} style={{color:color}}></i>
        </div>
    );
};

export default CardFooter; 

