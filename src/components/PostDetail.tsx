import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../data";

interface Props {
  posts: Post[];
}

const PostDetail: React.FC<Props> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!post) return <h2>Không tìm thấy bài viết!</h2>;

  return (
    <div style={{ padding: 20 }}>
      <img
        src={post.thumbnail}
        alt={post.title}
        style={{
          width: "100%",
          maxHeight: 300,
          objectFit: "cover",
          borderRadius: 8,
        }}
      />
      <h2>{post.title}</h2>
      <p style={{ fontStyle: "italic", color: "#555" }}>{post.category}</p>
      <p>{post.content}</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: 10,
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        ⬅ Quay lại
      </button>
    </div>
  );
};

export default PostDetail;
