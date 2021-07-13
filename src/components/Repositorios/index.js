import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositorios() {
    const history = useHistory();
    const [ repositorios, setRepositorios] = useState([]);

    useEffect(() => {
        let repositoriosName = localStorage.getItem('repositoriosName');
        if(repositoriosName != null) {
            repositoriosName = JSON.parse(repositoriosName);
            setRepositorios(repositoriosName);
            localStorage.clear();
        } else {
            history.push('/')
        }

    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositorios.map(repository => {
                    return (
                        <S.ListItem> Repositorio: { repository } </S.ListItem>
                    )
                }) }
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

