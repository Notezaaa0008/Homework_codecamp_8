import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPostPage from "./pages/AddPostPage";
import SinglePostPage from "./pages/SinglePostPage";
import CounterPage from "./pages/CounterPage";
import { CounterProvider } from "./contexts/context"
import "./App.css";
import DesignSystemPage from "./pages/DesignSystemPage";

function App() {
  return (
    <div>
      {/* ต้องมี CounterProvider คลุมไว้ เพื่อจะได้เรียกใช้ useCounter ในแต่ละ Route ได้ */}
      <CounterProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/design-system" component={DesignSystemPage} />
            <Route path="/counter" component={CounterPage} />
            <Route path="/post/:postId" component={SinglePostPage} />
            <Route path="/addpost" component={AddPostPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </CounterProvider>

    </div>
  );
}

export default App;
