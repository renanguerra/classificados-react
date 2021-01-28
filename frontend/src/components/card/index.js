import React from 'react'

import './card.css'

export default function Card(props) {
    const dataPost = new Date(props.date)
    const dataPostagem = ((dataPost.getDate())) + "/" + ((dataPost.getMonth() + 1)) + "/" + dataPost.getFullYear();
    
    return(
        <div className='card'>
            <div className='card-header'>
                <span>{props.title}</span>
            </div>

            <div className='card-body'>
                <span className='card-date'>Data: {dataPostagem}</span>
                <span>{props.description}</span>
            </div>
        </div>
    )
}