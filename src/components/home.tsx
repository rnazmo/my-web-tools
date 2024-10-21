import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>my web tools</h1>
      <ul>
        <li>
          <Link to="/stopwatch">Go to stopwatch app page</Link>
        </li>
      </ul>
    </>
  );
}
