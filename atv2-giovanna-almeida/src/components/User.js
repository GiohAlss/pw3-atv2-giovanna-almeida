import {useState} from 'react';

function User() {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [telAluno, setTelAluno] = useState('');
    const [telResponsavel, setTelResponsavel] = useState('');
    const [email, setEmail] = useState('');
    const [dataNasc, setDataNasc] = useState('');

    function User(event){
        
        event.preventDefault();
        
        let User = JSON.stringify({name:name, cpf:cpf, rg:rg, telAluno:telAluno, telResponsavel:telResponsavel, email:email, dataNasc:dataNasc})
        console.log(User)
        alert(User)
    }

    return(

        <form onSubmit={User} className='form'>

            <h1>CADASTRO DE ALUNO</h1>

            <input
                type='text' placeholder='Nome do Aluno'
                value={name} onChange={(event)=>{setName(event.target.value)}} 
            />
             <input
                type='text' placeholder='CPF' 
                value={cpf} onChange={(event)=>{setCpf(event.target.value)}} 
            />
            <input
                type='text' placeholder='RG' 
                value={rg} onChange={(event)=>{setRg(event.target.value)}} 
            />
            <input
                type='text' placeholder='Telefone do Aluno' 
                value={telAluno} onChange={(event)=>{setTelAluno(event.target.value)}} 
            />
            <input
                type='text' placeholder='Telefone do Responsável' 
                value={telResponsavel} onChange={(event)=>{setTelResponsavel(event.target.value)}} 
            />
            <input
                type='text' placeholder='Email' value={email} 
                onChange={(event)=>{setEmail(event.target.value)}} 
            />
            <input
                type='date' placeholder='Data de Nascimento' 
                value={dataNasc} onChange={(event)=>{setDataNasc(event.target.value)}} 
            />

            <button className='button' type='submit'>CADASTRAR</button>

            </form>
    );
} 

export default User;
