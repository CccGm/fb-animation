import "./App.css";
import { AppProvider } from "./components/context";
import { Frame1 } from "./components/page/Frame1/Frame1";
import { Frame2 } from "./components/page/Frame2";
import { Frame3 } from "./components/page/Frame3";
import { Frame4 } from "./components/page/Frame4/Frame4";
import { Frame5 } from "./components/page/Frame5/Frame5";
import { Frame6 } from "./components/page/Frame6";
import { Frame7 } from "./components/page/Frame7";
import { Frame8 } from "./components/page/Frame8";
import { Frame9 } from "./components/page/Frame9/Frame9";
import { Frame10 } from "./components/page/Frame10/Frame10";
import { Test } from "./components/page/Test";

function App() {
  return (
    <div>
      <AppProvider>
        {/* <Frame1 /> */}
        {/* <Frame2 /> */}
        {/* <Frame3 /> */}
        <Frame4 />
        {/* <Frame5 /> */}
        {/* <Frame6 /> */}
        {/* <Frame7 /> */}
        {/* <Frame8 /> */}
        {/* <Frame9 /> */}
        {/* <Frame10 /> */}
        {/* <Test /> */}
      </AppProvider>
    </div>
  );
}

export default App;
