import { useMutation } from "@apollo/react-hooks";
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const retVal = await mutate({ variables: { repositoryName, ownerName, rating, text }});
    const repoId = retVal.data.createReview.repository.id;

    return repoId;
  };

  return [createReview, result];
};

export default useCreateReview;
