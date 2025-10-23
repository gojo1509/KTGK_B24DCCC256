import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Post, uid } from "../data";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export default function PostForm({ posts, setPosts }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState<Post["category"]>("Công nghệ");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: uid(),
      title,
      author,
      thumbnail,
      category,
      content,
      createdAt: new Date().toISOString(),
    };
    setPosts([...posts, newPost]);
    navigate("/");
  };

  const formStyle = {
    maxWidth: "600px",
    margin: "20px auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  } as React.CSSProperties;

  const labelStyle = { fontWeight: 600, display: "block", marginTop: "10px" };
  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginTop: "4px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 15px",
    background: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2>Đăng bài viết mới</h2>

      <label style={labelStyle}>Tiêu đề</label>
      <input
        style={inputStyle}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label style={labelStyle}>Tác giả</label>
      <input
        style={inputStyle}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <label style={labelStyle}>Ảnh bài viết (URL)</label>
      <input
        style={inputStyle}
        type="text"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
        placeholder="Nhập link ảnh"
      />

      <label style={labelStyle}>Thể loại</label>
      <select
        style={inputStyle}
        value={category}
        onChange={(e) => setCategory(e.target.value as Post["category"])}
      >
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>

      <label style={labelStyle}>Nội dung</label>
      <textarea
        rows={8}
        style={inputStyle}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button style={buttonStyle} type="submit">
        Đăng bài
      </button>
    </form>
  );
}
