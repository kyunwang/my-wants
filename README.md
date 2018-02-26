# my-wants
A application to keep track of what you want to buy. (Name is debatable)

In this document I record my process and decisions of the making of this application.

**Progress/Trello: [Here](#trello)**

## Table of content

- [Minimal functionality](#minimal-functionality)
- [Sitemap (Draft)](#sitemap-draft)
- [Technology choice](#technology-choices)
	- [Front-end](#front-end)
	- [Back-end](#back-end)
	- [Others](#others)
- [](#)


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

## Sitemap draft
A sitemap to get a overview of the basic structure at the start of the project.

## Technology choices
I need to make a decision of what technology/tools to use for the application.
And am looking into other stuff like Continious Integration. (maybe)


### Front-end
These are the ones I am considering to use. I already have some experience with *React-Native*

The choices/considerations:
- **React-Native (Web)**
- Weex (Web)
- Native-script (Web)
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
Maybe look into:
- [Pusher](#pusher)
- [FastLane](#fastlane)
- [Visual Studio App Center](#app-center)
- [](#)
- [](#)

Analytics options:
- [google-analytics](#google-analytics)
- [matomo](#matomo) possible to use with RN?
- [VS - App Center](#app-center-analytics)

Testing: 
- [Cavy](#cavy) Looks neat
- [Jest](#jest)

*What do I want ot test? Do I even need tests here?*

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