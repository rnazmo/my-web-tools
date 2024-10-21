import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">my web tool collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Stopwatch</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/stopwatch" className="text-blue-500 hover:underline">
              Try it
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Timer</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/timer" className="text-blue-500 hover:underline">
              Try it
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pomodoro Timer</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/pomodoro" className="text-blue-500 hover:underline">
              Try it
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
