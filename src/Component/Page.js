import Sitebar from "./Sitebar";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Alluser from "./Alluser";
import Edit from "./Edit";
import Adduser from "./Adduser";

const Page = () => {
  return (
    <div className="App">
      <div className="Layout">
        <Sitebar />
      </div>
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={Adduser} />
          <Route exact path="/Alluser" component={Alluser} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Edit/:id" component={Edit} />
        </Switch>
      </div>
    </div>
  );
};

export default Page;
