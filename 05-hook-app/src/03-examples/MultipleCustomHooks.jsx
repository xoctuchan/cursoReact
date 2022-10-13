import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from './';
//import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
    const {counter, incrementar} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />
            {
                isLoading 
                ?<LoadingQuote/>
                : <Quote quote={quote} author={author}/>
            }
            <button className="btn btn-primary" 
                onClick={() =>incrementar()}
                disabled={isLoading}
            >
                Next Quote 
            </button>
        </>
    )
}
