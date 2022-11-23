import { useQuery } from '@tanstack/react-query';

const useFetchAllPost = () => {
  const {} = useQuery({ queryKey: ['posts'], queryFn: () => {} });

  return {};
};

export default useFetchAllPost;
