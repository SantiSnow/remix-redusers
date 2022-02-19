import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Bienvenido:</h1>
      <ul>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/posts">Latest News</Link>
        </li>
      </ul>
    </div>
  );
}
