import React from "react";
import { Post } from "../data";
import { useNavigate } from "react-router-dom";

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách bài viết</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {posts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 16,
              width: 250,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              style={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <h3>{p.title}</h3>
            <p style={{ color: "#555" }}>{p.category}</p>
            <button
              onClick={() => navigate(`/posts/${p.id}`)}
              style={{
                marginTop: 8,
                padding: "6px 10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
