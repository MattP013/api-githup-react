import React, {useEffect, useState
} from 'react';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

//programacao declarativa -  descreve o que se espera que aconteça
export default function Repositories(props){
	 const history = useHistory();
	const [repositories, setRepositories] = useState([]);
	useEffect(()=>{
		let repoName = localStorage.getItem('repoName');
		if (repoName === null) {
			history.push('/');	
		} else {
			
			repoName = JSON.parse(repoName);
			setRepositories(repoName);
			localStorage.clear();
		}

	},[]);
return(
	<S.Container>
		<S.Title>Repositories</S.Title>
		<S.List>
		{
			repositories.map(repository =>{
				return (
					<S.ListItem>{repository}</S.ListItem>
				)
			})
		}
		   
		</S.List>
		<S.LinkHome to="/">Voltar</S.LinkHome>
	</S.Container>
	   )
}