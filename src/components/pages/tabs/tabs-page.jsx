import React from "react";
import Tabs, {MovieCardNav} from "./tabs";
import TabsItems from "../../constants/tabs";

const style = {backgroundColor: `#e1b0b2`, maxWidth: `1300px`, marginLeft: `auto`, marginRight: `auto`, padding: `0 75px`};

const TabsPage = ()=> {
  return (
    <div className="movie-card__desc" style={style}>
      <Tabs />
    </div>
  );
};

export default TabsPage;
