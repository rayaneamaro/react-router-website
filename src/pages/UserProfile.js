import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams(); // Obtém o parâmetro "id" da URL

  return (
    <div>
      <h1>Perfil do Usuário {id}</h1>
      <p>Exibindo informações para o usuário com ID: {id}</p>
    </div>
  );
};

export default UserProfile;
