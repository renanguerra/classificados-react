import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

import './header.css'

export default function Header(props){
    const [classificados,setClassificados] = useState({
        title: '',
        description:'',
    })

     function addClassificado(){
        Swal.fire({
            title: 'Novo Classificado',
            html:
              '<input id="swal-input1" class="swal2-input" placeholder="Título">' +
              '<input id="swal-input2" class="swal2-input" placeholder="Descrição">',
            focusConfirm: false,
            preConfirm: () => {
              if (document.getElementById('swal-input2').value && document.getElementById('swal-input1').value ) {
                return [
                  setClassificados({
                  title: document.getElementById('swal-input1').value,
                  description: document.getElementById('swal-input2').value
                  }),
                ]
             } else {
               Swal.showValidationMessage('Preencha todos os campos!')   
             }
            }
          })
        }

      useEffect((e)=>{
          if( classificados.title !=='' && classificados.description !==''){
            axios.post('http://localhost:3333/create',classificados)
              .then(e =>{
                Swal.fire({
                    icon: 'success',
                    title: 'Oba!',
                    text: 'Seu classificado foi criado com sucesso!',
                    preConfirm: () => {
                      window.location.reload();
                    }
                  })
              })
          }
      },[classificados])

    return(
        <div className='header'>
            <h2 className='logo'>Classificados</h2>

            <div className="header-nav">
                {props.children}
                <span className='header-menu' onClick={addClassificado}><i className='fas fa-plus' style={{color:"white"}}></i> <span className="text-header"> Adicionar Classificado </span> </span>
            </div>
        </div>
    )
}