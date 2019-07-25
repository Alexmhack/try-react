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
