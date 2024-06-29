import "./App.css";
import { AppProvider } from "./components/context";
import { Frame1 } from "./components/page/Frame1/Frame1";
import { Frame2 } from "./components/page/Frame2";
import { Frame3 } from "./components/page/Frame3";
import { Frame5 } from "./components/page/Frame5";
import { Frame6 } from "./components/page/Frame6";
import { Frame7 } from "./components/page/Frame7";
import { Frame8 } from "./components/page/Frame8";
import { Test } from "./components/page/Test";

function App() {
  return (
    <div>
      <AppProvider>
        <Frame1 />
        {/* <Frame2 /> */}
        {/* <Frame3 /> */}
        {/* <Frame5 /> */}
        {/* <Frame6 /> */}
        {/* <Frame7 /> */}
        {/* <Frame8 /> */}
        {/* <Test /> */}
      </AppProvider>
    </div>
  );
}

export default App;
