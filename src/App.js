import "./App.css";
import { AppProvider } from "./components/context";
import { Frame1 } from "./components/page/Frame1/Frame1";
import { Frame2 } from "./components/page/Frame2";
import { Frame3 } from "./components/page/Frame3/Frame3";
import { Frame4 } from "./components/page/Frame4/Frame4";
import { Frame5 } from "./components/page/Frame5/Frame5";
import { Frame6 } from "./components/page/Frame6/Frame6";
import { Frame7 } from "./components/page/Frame7";
import { Frame8 } from "./components/page/Frame8";
import { Frame9 } from "./components/page/Frame9/Frame9";
import { Frame10 } from "./components/page/Frame10/Frame10";
import { Test } from "./components/page/Test";
import { Frame5_A } from "./components/page/Frame5/Frame5_a";
import { Frame5_B } from "./components/page/Frame5/Frame5_b";
import { NavMenu } from "./components/common/sliderTab/NavMenu";

function App() {
  return (
    <AppProvider>
      <div className="containers">
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
        <Frame5_A />
        <Frame5_B />
        <Frame6 />
        <Frame7 />
        <Frame8 />
        <Frame9 />
        <Frame10 />
        {/* <Test /> */}

        {/* bottom bar */}
        {/* <NavMenu /> */}
      </div>
    </AppProvider>
  );
}

export default App;
