import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stopwatch">Stopwatch</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
