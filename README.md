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

## References
- [React Router: BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)
- [React Router: Route](https://reacttraining.com/react-router/web/api/Route)
- [Last segment of URL](https://stackoverflow.com/questions/4758103/last-segment-of-url)
- [MDN: URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams)
- [MDN: String.substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

