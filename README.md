# Drawer Component

![](/public/images/Drawer&#32;Architecture.png)

### Routers
- Main router : **localhost:3000/drawers**
- Drawer router 1: localhost:3000/drawers/**html**
- Drawer router 2: localhost:3000/drawers/**css**
- Drawer router 3: localhost:3000/drawers/**js**
  

### DrawerView
The page view component with all routers in the page.

```js
import { Route, Switch, Link } from "react-router-dom";

export class DrawerView extends Component{
  render(){
    return(
      <div>
        <Switch>
          <Route
            path={`/drawers/html`}
            component={DocumentInfoDrawer}
          />
          <Route
            path={`/drawers/css`}
            component={DocumentInfoDrawer}
          />
          <Route
            path={`/drawers/js`}
            component={DocumentInfoDrawer}
          />
        </Switch>
        <Link to="/drawers/html">HTML</Link>
        <Link to="/drawers/css">CSS</Link>
        <Link to="/drawers/js">JS</Link>
      </div>
    )
  }
}
```

### Drawer Component
- The closing function passes down to three drawers.

```js
class DocumentInfoDrawer extends Component{
  state = {
    documentName: ""
  };		

  constructor(props){
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    const url = new URL(window.location.href);
    const documentName = url.pathname.substring(url.pathname.lastIndexOf('/')+1);
    console.log(documentName);

    this.setState({
      documentName
    })
  }	
  
  onClose(){
    const { history } = this.props;
    history.push("/drawers");
  }

  buildDrawerComponent() {
    switch (this.state.documentName){
      case "html":
        return (
          <Fragment>
            <button onClick={this.onClose}>close</button>
            <h1>HTML</h1>
          </Fragment>
        );
      case "css":
        return (
          <Fragment>
            <button onClick={this.onClose}>close</button>
            <h1>CSS</h1>
          </Fragment>
        );
      case "js": 
        return (
          <Fragment>
            <button onClick={this.onClose}>close</button>
            <h1>JS</h1>
          </Fragment>
        );
    }
  }
  render() {
    return (
      <RightDrawer onClickedOutside={this.onClose}>
        <div className="drawer-container">
        {this.buildDrawerComponent()}
        </div>
      </RightDrawer>
    );
  }
}
```


### Right Drawer Component
```js
const RightDrawer = ({ children, onClose }) =>{
  return (
    <div className="right-drawer-container">
      <div className="right-drawer-inner">
        <button onClick={onClose}>close</button>
        {children}
      </div>
    </div>
  )
}
```

### Last segment of URL

**Example 1**
```js
console.log(this.href.substring(this.href.lastIndexOf('/') + 1));
```

**Example 2**
```js
var parts = 'http://mywebsite/folder/file'.split('/');
var lastSegment = parts.pop() || parts.pop();
console.log(lastSegment);
```

# React Router
### &lt;BrowserRouter&gt;
- A Router that uses the HTML5 history AP
- children: node: A **single child element** to render.

```js
<BrowserRouter>
  <App/>
</BrowserRouter>
```

```js
<BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/drawers" component={DrawerView} />
      <Route component={NoMatch}/>
    </Switch>
  </div>
</BrowserRouter>
```




<hr />

### &lt;Route&gt;
 To render some UI when a location matches the route’s path.
- component
- exact
- path

```js
<Switch>
  <Route
    path={`/drawers/html`}
    component={DocumentInfoDrawer}
  />
  <Route
    path={`/drawers/css`}
    component={DocumentInfoDrawer}
  />
  <Route
    path={`/drawers/js`}
    component={DocumentInfoDrawer}
  />
</Switch>
```


### &lt;Switch&gt;
- Renders the first child <Route> or <Redirect> that matches the location.
- children: node


### withRouter
You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component.

```js
import React from "react";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  render() {
    const { match, location, history } = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
```


<hr />

## References
- [React Router: BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)
- [React Router: Route](https://reacttraining.com/react-router/web/api/Route)
- [Last segment of URL](https://stackoverflow.com/questions/4758103/last-segment-of-url)
- [MDN: URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams)
- [MDN: String.substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

