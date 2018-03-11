# my-wants
A application to keep track of what you want to buy. (Name is debatable)

The back-end for the application - [my-wants-server][server]

In this document I record my process and decisions of the making of this application.

**Progress/Trello: [Here](#trello)**

*Some more attachements will be placed in trello*

## Table of content

- [Minimal functionality](#minimal-functionality)
- [Sitemap (Draft)](#sitemap-draft)
- [Technology choice](#technology-choices)
	- [Front-end](#front-end)
	- [Back-end](#back-end)
	- [Others](#others)
- [The look](#the-look)
	- [Sketches](#sketches)
	- [Screens](#screens)
- [Start](#start)
	- [Setting up Cavy](#setting-up-cavy)
	- [Setting up a Router](#setting-up-a-router)
	- [Redux](#redux)


## Minimal Functionality
The minimal function wanted/needed for this application are:

**Main**
- Items
	- Adding
	- Updating
	- Deleting/Removing
	- Completing

**Extra**
- Filtering items
- Sorting items
- Change order (on drag)
- Swipe card (inline in context menu) ?
- Ongoing section
- Completed section

**Extra of Extra** 😅
Depends on the backend choice
- Sync across account/platforms

**Maybe fun to add**
- Change colors (primary color or per item based)

## Sitemap draft
A sitemap to get a overview of the basic structure at the start of the project.
This is to give myself a overview of the minimum needed for now.

<img src="https://github.com/kyunwang/my-wants/blob/master/doc-img/sitemap-draft.jpg" alt="A draft of the sitemap" height="">

## Technology choices
I need to make a decision of what technology/tools to use for the application.
And am looking into other stuff like Continious Integration. (maybe)


### Front-end
These are the ones I am considering to use. I already have some experience with *React-Native*

The choices/considerations:
- **React-Native (Cross)**
- Weex (Cross)
- Native-script (Cross)
- Flutter (Cross) - uses dart
- Swift (iOS)
- Objective-C (iOS)
- Kotlin (Android)
- Java (Android)

As I have noted before, I already have some experience with *React-Native* and will choose it to make this application.
The decisions is made, because I want to strengthen my foundation (at it), before delving into other Languages/Frameworks.

**Create-react-native-app(Expo)** will be used as the foundation for this application as it saves some time setting up and you can eject it when needed. Expo does have the constrain that you can only use JavaScript for the application and not Natively linked packages. As said you can eject whenever needed. Also, another reason for using Expo is that *upgrading React-Native is hellish* and this will make it much easier.

### Back-end
These are the storage options I am considering. Some of the options are local and some are with a server.

Just a place to store data for starters.

The choices/considerations:
- Localstorage / AsyncStorage (React-Native)
- Redux-Persist (React-Native)
- SQLite (Expo)
- Firebase/Firestore
- GraphCool
- GraphQL-Yoga
- Custom backend using
	- GraphQL + MongoDB or PostGresSQL

A custom backend feels like overkill for this small application, but who knows it might grow to the point it might need it.

Redux-persist seems unlikely as I might not really need Redux for this application at all.

Firebase seems like a sloid choice as the integration is pretty smooth, but scaling might be a problem. And maybe exporting to another database too. (At least I think it might be)

Never used the graphql option but they seem interesting.

**For starters, I will use `AsyncStorage` and build upon that later on with a cloudbased or maybe a custom backend**

**Creating a custom back-end anyway** Just because. Right [here](server)

Need to research how to have offline support.

### Others
**Maybe look into:**
- [Pusher](#pusher)
- [FastLane](#fastlane)
- [Visual Studio App Center](#app-center)
- [](#)
- [](#)

**Analytics options:**
- [google-analytics](#google-analytics)
- [matomo](#matomo) possible to use with RN?
- [VS - App Center](#app-center-analytics)

**Testing:**
- [Cavy](#cavy) Looks neat (E2E testing)
- [Jest](#jest) 
- [Enzyme]
- [Mocha/Chai]


First question: *What do I want to test? Do I even need tests here?*



Cavy talk at [React-Native-London](#rn-london)
- Cavy does **leak** to the production bundle - need to write a own config to bypass that

This is probably the wayt to prevent the leaking: [Here](#cavy-prevent-leak) and the [Example](#cavy-prevent-leak-repo)


## The look
Super brief: the design for now

### Sketches
Sketches of possible layouts and some components.

<img src="https://github.com/kyunwang/my-wants/blob/master/doc-img/sk_layout.jpg" alt="sketch 1" height="400">

Some sketches for possible layouts to use.

<img src="https://github.com/kyunwang/my-wants/blob/master/doc-img/sk_comp.jpg" alt="sketch 2" height="400">

A few sketches of components variations.
Yes I am being messy.

### Screens
The current screens.

<img src="https://github.com/kyunwang/my-wants/blob/master/doc-img/screens1.png" alt="first 4 screens" height="400">

The current screen for development. They will of course change along the way.
Some things are not realy consistent yet like the positioning of the buttons.

<img src="https://github.com/kyunwang/my-wants/blob/master/doc-img/animation1.gif" alt="a small prototype animation" height="">

Here a little animation, which I think I will implement. (well try to implement) 😉

Tried out Diya plugin of Sketch. It is pretty nice, but sadly the exporting to a interactive prototype didn't seem to work for some reason.

## Start
Gonna start the coding and juggle between code and design from here on out.


### Setting up Cavy
First of Using Cavy is going to change the way you are going to write the component a bit. Cavy needs to wrap the component in order to work so it is necessary to do so.

*It is not going to make too much of a difference but it is important to know.*

As the repo of [Cavy](#cavy) says, It abuses the `ref` to run tests.

> Cavy provides 3 tools to let you run integration tests:
> 1. A store of 'test hooks'; key-value pairs between a string identifier and a component somewhere in your app component tree.
> 2. A set of helper functions to write spec files.
> 3. A <Tester> component you wrap around your entire app to make the test hook store available, and autorun your test cases on boot.


#### First setup
Setup is based on [this pull request](#cavy-prevent-leak-repo)

1. Install it `npm i -D cavy`
2. We are going to create a wrapper for cavy in order to prevent cavy from leaking to the production build.
```
// helpers/cavy.js
	import { hook, wrap } from 'cavy';

	import GLOBAL from './globals';

	// We wrap the stateless components with this to allow the usage of refs
	function testWrapHook(component) {
		if (GLOBAL.TEST_ENABLED) {
			return hook(wrap(component));
		}
		return component;
	}

	// We wrap statefull component with this
	function testHook(component) {
		if (GLOBAL.TEST_ENABLED) {
			return hook(component);
		}
		return component;
	}

	export {
		testWrapHook,
		testHook,
	};
```
You hook up any component you want to test. Adding a `ref` and using the prop `generateTestProp`
3. Set up the test wrapper. Typically on the **top-level js file** e.g. `index.{ios,android}.js`
We will do it with the wrapper like so:
```


```

4. Create a test/spec file


### Setting up a Router

Thinking about using:
- [React native router flux](#router1)
Have used this before. Pretty easy syntax. Had some problems when needing som customisation
- [React navigation](#router2)
The syntax seems a bit verbose. (Pretty much the 'official' navigator)
- [React native navigation](#router3) By Wix
Seems pretty cool, Solid but a bit overwelming doc (Has a lot of issues active)

Have decided to use **React navigation** for now. Was caught in between react navigationa dn react native navigation.

**So we are using `react-navigation` for this project** 


#### Adding the navigation
We start with adding the package of course.

*A quick overview of a basic router setup with `react-navigation`.*

For a more in-depth overview check the [docs](#router2)

1. Install the package
```
// Install the package
npm i -S react-navigation
```

2. Importing the package
We will be using `StackNavigator` from `react-navigation` to start with. This may change depending on how it goes.
```
// you need to import React for it to work
import React from 'react';

// Import the StackNavigator first ofcourse
import { StackNavigator } from 'react-navigation';
```
3. Import the scenes
The we need to import the *Scenes* you want to navigate to
```
// Your scenes here
import Home from './routes/Home;
... more routes/scenes
```

4. Defining our navigator
Then we define the navigator.

We call the route `Home: { ... }` right here but it can be anything you want.
```
const RootStack = StackNavigator({
	Home: {
		screen: Home
	}
}, {
	// ...options can be added here like
	initialRouteName: 'Home'
});
```

5. Exporting the navigator
Now we export our navigation. This is my preferred way to do it, do it however you like to.
```
function RootNavigation() {
	return <RootStack />
}

export default RootNavigation;
```

6. Hooking up the navigator to the app
Last thing to do is to is to add this to your most top-level component, usually `App.js` e.g. your entry file.
```
// ... imports and such
class App extends Component {
	render() {
		return <RootNavigation />
	}
}
```

And voila, the router is connected!

*P.S. you can do this in the `App.js` file too if you like that better*

*In this case I had a `<Tester>` component which wrapped the `<RootNavigation>` that is why I imported it in `App.js`


### Redux
Decided to use `Redux` in for local usage then build up for later using a server. Need to figure out offline syncing when there is no network for later.

We need a store, reducers and actions.

#### Getting started

1. Install the packages using `npm install --save redux react-redux`

2. Wrap the App with `Provider` provided by `react-redux`
```
import { Provider } from 'react-redux;
import store from './store';

...
render() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
...

```

I like to keep the store in a seperate file to keep the App.js file cleaner.

3. Create a action
```
function newItem(data) {
	return {
		type: 'NEW_ITEM', // A standard to define it like this
		data: data // We pass the data as data to the reducer
	}
}
```
*Here we define the `type` of the action and pass data through to the reducer.*

4. Create a reducer
```
function myItems(state = [], action) {
	switch (action.type) {
		case 'NEW_ITEM':
			return {....}
		default:
			return state;
	}
}
```
*Here we manipulate the data. NOTE that redux follow the principle of immutability.*

`state = []` is were we set the default to a empty array.

`action` is what we returned in the Action

<!-- `myItems` is our `store` for the items. We can also make another one  -->



[server]: https://github.com/kyunwang/my-wants-server

[trello]: https://trello.com/b/4JgtyCTK

[pusher]: https://pusher.com
[fastlane]: https://fastlane.tools/
[app-center]: https://www.visualstudio.com/app-center/
[c]: c

[google-analytics]: https://github.com/idehub/react-native-google-analytics-bridge 
[matomo]: https://matomo.org/
[app-center-analytics]: https://docs.microsoft.com/en-us/appcenter/sdk/analytics/react-native
[c]: c

[cavy]: https://github.com/pixielabs/cavy
[jest]: https://facebook.github.io/jest/
[c]: c

[rn-london]: https://pusher.com/sessions/meetup/react-native-london/cavy-a-new-end-to-end-testing-framework-for-react-native?utm_source=reactnl&utm_medium=email
[cavy-prevent-leak]: https://github.com/pixielabs/cavy/pull/20
[cavy-prevent-leak-repo]: https://github.com/TGPSKI/cavy/tree/add-jenkins-reporting/sample-app/EmployeeDirectory

[sitemap1]: https://github.com/kyunwang/my-wants/blob/master/doc-img/sitemap-draft.jpg

[sketch1]: https://github.com/kyunwang/my-wants/blob/master/doc-img/sk_layout.jpg
[sketch2]: https://github.com/kyunwang/my-wants/blob/master/doc-img/sk_comp.jpg

[anim1]: https://github.com/kyunwang/my-wants/blob/master/doc-img/animation1.gif
[screens1]: https://github.com/kyunwang/my-wants/blob/master/doc-img/screens1.png

[router1]: https://github.com/aksonov/react-native-router-flux
[router2]: https://reactnavigation.org/
[router3]: https://wix.github.io/react-native-navigation/