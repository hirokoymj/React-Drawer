// export class OutsideAlerter extends Component {
//   constructor(props) {
// 		super(props);
		
//     this.element = document.createElement("div");
//     this.element.setAttribute("class", "right-drawer-container");
		
// 		this.setWrapperRef = this.setWrapperRef.bind(this);
// 		this.handleClickOutside = this.handleClickOutside.bind(this);
// 	}

// 	componentDidMount() {
//     const body = document.getElementsByTagName("body")[0];
//     const root = document.getElementById("root");
// 		body.insertBefore(this.element, body.children[0]);
				
// 		document.addEventListener('mousedown', this.handleClickOutside);
// 	}

// 	componentWillUnmount() {
//     const body = document.getElementsByTagName("body")[0];
//     const root = document.getElementById("root");
// 		body.removeChild(this.element);
				
// 		document.removeEventListener('mousedown', this.handleClickOutside);
// 	}

// 	setWrapperRef(node) {
// 		this.wrapperRef = node;
// 	}

// 	handleClickOutside(event) {
// 		console.log(event.target);
// 		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
// 			alert('You clicked outside of me!');
// 		}
// 	}

// 	render() {
// 		return <div ref={this.setWrapperRef} >{this.props.children}</div>;
// 	}
// }