import { isMobile } from "react-device-detect";

// web view
import { Frame1 } from "./components/page/Frame1/Frame1";
import { Frame2 } from "./components/page/Frame2";
import { Frame3 } from "./components/page/Frame3/Frame3";
import { Frame4 } from "./components/page/Frame4/Frame4";
import { Frame5 } from "./components/page/Frame5/Frame5";
import { Frame5_A } from "./components/page/Frame5/Frame5_a";
import { Frame5_B } from "./components/page/Frame5/Frame5_b";
import { Frame6 } from "./components/page/Frame6/Frame6";
import { Frame7 } from "./components/page/Frame7";
import { Frame8 } from "./components/page/Frame8";
import { Frame9 } from "./components/page/Frame9/Frame9";
import { Frame10 } from "./components/page/Frame10/Frame10";
import { NavMenu } from "./components/common/sliderTab/NavMenu";
import { FuggyText } from "./components/common/Fuggy/app";
import "./App.css";
import { Test } from "./components/page/Test";

// mobile view
import { MFrame2 } from "./components/mobile/Frame2/Frame2";
import { MFrame3 } from "./components/mobile/Frame3/Frame3";
import { MFrame4 } from "./components/mobile/Frame4/Frame4";
import { MFrame5_a } from "./components/mobile/Frame5/Frame5_a";
import { MFrame5_b } from "./components/mobile/Frame5/Frame5_b";
import { MFrame5_c } from "./components/mobile/Frame5/Frame5_c";
import { MFrame6 } from "./components/mobile/Frame6/Frame6";
import { MFrame7 } from "./components/mobile/Frame7/Frame7";
import { MFrame8 } from "./components/mobile/Frame8/Frame8";
import { MFrame9 } from "./components/mobile/Frame9/Frame9";
import { MFrame10 } from "./components/mobile/Frame10/Frame10";
import { MFrame1 } from "./components/mobile/Frame1/Frame1";

// const isMobile = (rdd.isMobile = true);
function App() {
  return isMobile ? (
    <div className="containers">
      <MFrame1 />
      <MFrame2 />
      <MFrame3 />
      <MFrame4 />
      <MFrame5_a />
      <MFrame5_b />
      <MFrame5_c />
      <MFrame6 />
      <MFrame7 />
      <MFrame8 />
      <MFrame9 />
      <MFrame10 />
      {/* <Test /> */}
    </div>
  ) : (
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
      <div className="flex justify-center">
        <NavMenu />
      </div>
      <div className="flex justify-end">
        <FuggyText />
      </div>
    </div>
  );
}

export default App;
