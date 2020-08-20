import axios from "axios";

import {
  ContainerClass,
  Breakpoint,
  FACEBOOK_PAGE_ACCESS_TOKEN,
  FACEBOOK_PAGE_ID,
} from "../site.config";

export default function Blog(props) {
  const posts = props.data;
  return (
    <div id="Blog" className={ContainerClass}>
      <h1>Blog</h1>
      <div className="row">
        {posts.map((post) => (
          <div className={`col-12 col-${Breakpoint}-6`} key={post.id}>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
    // fb returns {data: [posts], paging: [cursor]}
//   const props = (await axios.get(
//     `https://graph.facebook.com/v8.0/${FACEBOOK_PAGE_ID}/feed` +
//       `?fields=created_time,message,likes{id},actions,shares,comments{from,message}` +
//       `&access_token=${FACEBOOK_PAGE_ACCESS_TOKEN}`
//   )).data;
    const props = { data: [{id: 1, message: 'First Post'}, {id:2, message: 'Second Post'}] }

  return { props };
};
