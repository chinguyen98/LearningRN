import { useQuery } from '@tanstack/react-query';
import { fetchAllPostApi } from '../../apis/post.api';

const useFetchAllPost = () => {
  const data = useQuery({ queryKey: ['posts'], queryFn: fetchAllPostApi });
  return data;
};

export default useFetchAllPost;
