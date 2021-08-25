
import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';
function Home(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('') //estado inicial
//onChange captura alteracoes
  const [erro, setErro] = useState(false);

    function handlePesquisa()
    {
      axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repo = response.data;
        const repoName = [];
        repo.map((repository) =>  {
          repoName.push(repository.name);
        }); 
        localStorage.setItem('repoName', JSON.stringify(repoName));
        setErro(false);
        history.push('/repositories');
      }).catch(err =>{
          setErro(true);
      });
    }
  return (
    <S.HomeContainer>
      <S.Contente>
        <S.Input className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Usuário"/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Contente>

      {erro ? <S.ErrorMsg>Ocorreu um erro! tente novamente</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

export default Home;
