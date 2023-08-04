import React from "react";
import axios from "axios";
export default function BlogListingPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://example.com/wp-json/wp/v2/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Blog Listing</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
}