import React from 'react';
import { ItemRepoContainer } from './style';

function ItemRepo({repo, onClick}){
    return(<ItemRepoContainer>
             <h3>{repo.name}</h3>
             <p>{repo.full_name}</p>
             <a href={repo.html_url} target="_blank">ver repositório</a>
             <br />
             <a href="#" rel="norefer" onClick={() => onClick(repo.id)} className="remover">Remover repositório</a>
             <hr />         
           </ItemRepoContainer>);
}

export default ItemRepo;