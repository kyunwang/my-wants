# my-wants
A application to keep track of what you want to buy. (Name is debatable)

In this document I record my process and decisions of the making of this application.

**Progress/Trello: [Here](#trello)**

*Some more attachements will be placed in trello*

[Here a link](#anim1proto) to a small prototype for a animation

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
[Here the link](#anim1proto) to the animation prototype

Tried out Diya plugin of Sketch. It is pretty nice, but sadly the exporting to a interactive prototype didn't seem to work for some reason.



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
[cavy-prevent-leak]: https://github.com/TGPSKI/cavy/tree/add-jenkins-reporting/sample-app/EmployeeDirectory

[sitemap1]: https://github.com/kyunwang/my-wants/blob/master/doc-img/sitemap-draft.jpg

[sketch1]: https://github.com/kyunwang/my-wants/blob/master/doc-img/sk_layout.jpg
[sketch2]: https://github.com/kyunwang/my-wants/blob/master/doc-img/sk_comp.jpg

[anim1]: https://github.com/kyunwang/my-wants/blob/master/doc-img/animation1.gif
[screens1]: https://github.com/kyunwang/my-wants/blob/master/doc-img/screens1.png

[anim1proto]: http://project.kyunwang.nl/my-wants/anim/
