import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1976d2",
    color: "white",
    padding: "10px 20px",
  };

  const linkStyle = {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: 500,
  };

  return (
    <nav style={navStyle}>
      <h1>Mini Blog</h1>
      <div>
        <Link to="/" style={linkStyle}>
          Trang chủ
        </Link>
        <Link to="/add" style={linkStyle}>
          Đăng bài
        </Link>
      </div>
    </nav>
  );
}
