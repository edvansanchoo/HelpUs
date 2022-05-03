
import React, {useState} from 'react';
import logoImg from '../../assets/logoHelpUs.png';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';


export default function NewIncident(){

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    
    

    async function handlerNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };
        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                    
                }
            });
            alert('Cadastro realizado com sucesso');
            history.push('/profile');
        }catch(erro){
            alert('Erro ao cadastrar novo caso, tente novamente')
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src = {logoImg} alt= "Be The Heroes" width="420" height="120"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhado para encontrar um herói para resolver isso.</p>
                
                <Link className="back-link"  to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home 
                </Link>
            </section>

            <form onSubmit= {handlerNewIncident}>
                <input 
                    placeholder="Título do caso"
                    value= {title}
                    onChange= {e => setTitle(e.target.value)}
                />
                <textarea  
                    placeholder="Descrição"
                    value= {description}
                    onChange= {e => setDescription(e.target.value)}
                />
                <input 
                    placeholder="Valor em reais"
                    value= {value}
                    onChange= {e => setValue(e.target.value)}
                />
                
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}