import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-8">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/stopwatch" className="block px-4 py-2 hover:bg-gray-700">
            Stopwatch
          </Link>
          <Link to="/timer" className="block px-4 py-2 hover:bg-gray-700">
            Timer
          </Link>
          <Link to="/pomodoro" className="block px-4 py-2 hover:bg-gray-700">
            Pomodoro Timer
          </Link>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="bg-gray-100 p-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        </header>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
