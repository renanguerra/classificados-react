import React from 'react'

import './header.css'

export default function Header(){
    return(
        <div className='header'>
            <h2 className='logo'>Classificados</h2>

            
            <div>
                <input type='text' placeholder='Pesquisar' className='header-input'/>
                <span className='header-menu'><i class='fas fa-angle-right' style={{color:"white"}}></i> Adicionar Classificado</span>
                <span className='header-menu'><i class='fas fa-angle-right' style={{color:"white"}}></i> Ver os mais recentes</span>
            </div>
        </div>
    )
}