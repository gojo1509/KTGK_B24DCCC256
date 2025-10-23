import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Post, initialPosts } from "./data";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav style={{ marginBottom: 20, display: "flex", gap: 10 }}>
          <Link to="/">🏠 Trang chủ</Link>
          <Link to="/create">📝 Đăng bài</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route
            path="/create"
            element={<PostForm posts={posts} setPosts={setPosts} />}
          />
          <Route path="/posts/:id" element={<PostDetail posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
