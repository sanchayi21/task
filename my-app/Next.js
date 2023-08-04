import React from "react";
import axios from "axios";
export default async function App() {
  const data = await axios.get("https://example.com/api/posts");
  return (
    <div>
      <ul>
        {data.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

