import axios from 'axios';
import { useLoaderData } from "remix";

export const loader = async () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      return res.data;
    });
};

export default function News() {

  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );

} 