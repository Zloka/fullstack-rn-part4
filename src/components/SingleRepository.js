import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  return (
    <>
      <RepositoryItem isViewingSingleRepo {...repository}/>
    </>
  );
};

export default SingleRepository;