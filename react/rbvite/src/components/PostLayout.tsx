import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PostType } from './Post';
import { useSession } from '../contexts/session-context';
import { useFetch } from '../hooks/fetch';
const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const PostLayout = () => {
  const {
    session: { loginUser },
  } = useSession();
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<PostType[]>({
    url: `${BASE_URL}/posts?userId=${loginUser?.id}`,
    dependencies: [loginUser],
    defaultData: [],
  });
  const [currPost, setCurrPost] = useState<PostType | null>(null);
  const navigate = useNavigate();

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) return <h1>Loading...</h1>;

  const goPost = (post: PostType) => {
    setCurrPost(post);
    navigate(`/posts/${post.id}`);
  };

  return (
    <>
      <div className='flex'>
        <ul>
          {posts?.map((post) => (
            <li key={post.id} aria-hidden='true'>
              <button
                onClick={() => {
                  goPost(post);
                }}
                className='hover:text-blue-400'
              >
                {post.title}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <Outlet context={{ post: currPost }} />
        </div>
      </div>
    </>
  );
};
