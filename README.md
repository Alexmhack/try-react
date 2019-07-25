# try-react
learning the basics of react for integrating it with django later on.

### Installation
First of all make sure you have installed [NodeJS](https://nodejs.org/en/) after which you will
be able to use the commands `npm` and `npx` in your *command prompt* or *shell*.

### First react app
Simply run `npx create-react-app try-react`. Here the `try-react` is the name of the react 
app, npx will do its thing and create a folder named `try-react` inside the directory from 
which the command is run.

This folder contains all the necessary files for your react app to run.

If you open **try-react/package.json** file and scroll down to key named *scripts*, you will
find some commands listed out there like `start` which starts the development server for the
react app, `build` creates a build directory which contains all the production files for app.

If you are using a git repository then add **node_modules** to the **.gitignore** file so that
the dependency files for the react app does not get uploaded to github since it is of no use 
there and will only increase the repository size, you just need **package.json** file and the
actual src folder and run `npm install` to install all the dependencies in your local machine.

### Start React
Run `npm start` inside the try-react folder and your default browser will open with the default
react page. As the page says you can edit the **src/App.js** file for example change the html content and see the changes occuring 
at real time in browser.

Create new folder inside **src** named **data** and add the file **posts.json** which the 
content from this repo.

Create another folder named **posts** inside **src** and create a file named **PostList.js**
with the same code as the **App.js** file, you just need to make few changes like removing
the import for `logo` and the html content after the `return`. 

Add any html tag like header tag. Now change the function name from `App` to `PostList` and
export the same `export default PostList`

Now to render the `PostList` inside **App.js** file, relative import it and use it as a html 
tag,

```
import PostList from './posts/PostList'
function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <PostList />
      </header>
    </div>
  )
}
```

Now if your server is running checkout your browser or start it with `npm start`. You should 
see you `PostList` content rendered on the page.

### Components
By default the current version of npx creates a react app with functions and not classes
so to convert them into classes extending or basically inheriting classes you need,

```
import React, { Component } from 'react'

class ExampleClass extends Component {
	render () {
		return (
			<div >
				<h1>Hello from React.</h1>
			</div>
		)
	}
}

export default ExampleClass
```

Now since we are using Component class we can use the `this` keyword for referencing 
**props** and **state** and other method of a component class.

Component class also has a `constructor` which is called at the very first when the class is
initiated and the method `render` is called at the last which renders the component in the
webpage. Constructor takes the props as the argument.

### States
With the help of states in React we can easily store data and render it from our component.
Remember state belongs to a particular component and every component has its own.

You can define the state inside the `constructor`, using
```
...
class PostDetail extends Component {
	constructor (props) {
		// needed for initializing other props (properties)
		super(props)

		this.state = {
			postItem: null
		}
	}
}
...
```

Now to set the state we have a predefined method, `setState` which is called using,

```
...
const newItem = {
	title: 'New title'
}
this.setState({
	postItem: newItem
})
...
```

Now on accessing the `postItem` from state we get the object `newItem`.

To access the `postItem` you have two ways,

```
// this maps the postItem from state automatically
const {postItem} = this.state


// or you can also use dot notation
const item = this.state.postItem
```

### Props
We can define our custom properties or props by simply,

```
...
	handleDataCallback (header) {
		console.log(header)
	}
...
	render () {
		return (
			<div>
				{postItem !== null ? 
					<div >
						<h2 dataCallback={this.handleDataCallback}>Hello World</h2>
					</div>
				: ''}
			</div>
		)
	}
```

We can store values inside props and render them using html.

Take another example using our source code context for posts,

In **posts/PostList.js** we have imported **PostDetail** and pass in the props
with key **post** and value of the current item that we map from the json data.

In **posts/PostDetail.js** we simple access the **post** using, `const {post} = this.props`
or we can also use `const post = this.props.post`.

### Events
Just like vanilla javascript has `onclick=somefunc()`, React uses somewhat similar,
`onClick={this.handleButtonCallback}`, for example

```
<button onClick={this.handleButtonCallback}></button>
```

Now in your component you need to define this callback,

```
class PostDetail extends Component {
	...

	handleButtonCallback (event) {
		event.preventDefault()	// prevents the default behaviour of a button
		// set or change state or update backend using api or something else
	}
	...
}
```

When you call `event.preventDefault()` the *event.target* or accessing *event* does not
work, so for that we need to bind this callback inside our constructor using,

```
	constructor (props) {
		super(props)

		// binding enables accessing the props in methods (eventpreventDefault removes this)
		this.handleButtonCallback = this.handleButtonCallback.bind(this)
	}
```

Now we can simply use `this.props.someValue` inside our callback method.

### Component Methods
**componentDidMount** is a predefined method which is called before the component is 
rendered.
