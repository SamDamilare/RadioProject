import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="Body">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} {...route} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
