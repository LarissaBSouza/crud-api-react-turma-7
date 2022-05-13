import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import UsuarioForm from './Form/UsuarioForm'
import UsuarioList from './List/UsuarioList'
import { baseUrl } from '../../environments'

function Usuario(props) {

    const URL = `${baseUrl}/customer`
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getUsuarios()
    }, [])

    const getUsuarios = () => {
        axios.get(`${URL}`).then((response) => {
            setUsuarios(response.data)
        })
    }

    const editUsuario = (usuario) => {
        
        if (usuario.name === '' || usuario.age === '' || usuario.document === '' || usuario.tel === '') {
            return
        }

        axios.put(`${URL}/${usuario.id}`, usuario).then((response) => {
            getUsuarios()
        })
    }

    const deletarUsuario = (id) => {

        axios.delete(`${URL}/${id}`).then((response) => {
            getUsuarios()
        })
    }

   

    return(
        <>
            <UsuarioList usuarios={usuarios} editar={editUsuario} deletar={deletarUsuario}/>
        </>
    )
}

export default Usuario