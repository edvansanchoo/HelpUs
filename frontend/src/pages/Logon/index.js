

import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logoHelpUs.png';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = api.post('sessions', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', (await response).data.name);

            history.push('/profile');
        }catch(err){
            alert('Falha no login tente novamente');
        }
    }

    return (
        <div className="logon-conteiner">
            <section className="form">
                <img src = {logoImg} id="logoImg" alt= "Be The Heroes" width="420" height="120"/>

                <form onSubmit= {handleLogin}>
                    <h1>Faça seu login</h1>

                    <input 
                        placeholder="Sua ID"
                        value= {id}
                        onChange= {e => setId(e.target.value)} 
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link"  to="register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro.
                    </Link>
                </form>
            </section>
            <img src= {heroesImg}/>
        </div>
    );
}