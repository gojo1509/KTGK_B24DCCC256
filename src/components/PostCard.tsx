import { Post } from "../data";
import { Link } from "react-router-dom";

export default function PostCard({ post }: { post: Post }) {
  const cardStyle = {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    padding: "15px",
    transition: "0.3s",
  } as React.CSSProperties;

  const imgStyle = { width: "100%", borderRadius: "10px" };
  const readMore = { color: "#1976d2", textDecoration: "none" };

  return (
    <div style={cardStyle}>
      <img src={post.thumbnail} alt={post.title} style={imgStyle} />
      <h3>{post.title}</h3>
      <p style={{ color: "#1976d2", fontWeight: 500 }}>{post.category}</p>
      <p>{post.content.slice(0, 100)}...</p>
      <Link to={`/post/${post.id}`} style={readMore}>
        Đọc thêm →
      </Link>
    </div>
  );
}
