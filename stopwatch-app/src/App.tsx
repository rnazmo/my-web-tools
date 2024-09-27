import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Stopwatch from "./components/stopwatch";
import Timer from "./components/timer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Ref: https://github.com/remix-run/react-router/blob/8b31f25afffcd9b5b9ea88e36ea776d40c07b0cf/examples/basic/src/App.tsx */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/timer" element={<Timer />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
