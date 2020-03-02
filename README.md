This project is a split-off from [NDLON-TEST](https://github.com/Kyle-Simpson/ndlon-test).  See old repo for prior work.

---
# __National Day Laborer Organization Network (NDLON)__
## __Inglés para la Jardineria__  

### Purpose
Recreate "__Inglés para la Jardineria__ - Todo lo que usted necesita saber para hacer trabajos de jardinería" as an interactive website that guides users through Spanish-English translations with the aid of audio snippets and images.  

### Codebase
The web application is created using ReactJS (a Javascript framework built upon NodeJS) which combines the HTML, CSS, and Javascript languages to host and deploy web content.

#### Folder & Code Structure
The `src` folder contains all code used to build the website.  
- `PlainCard.js` contains the class for audio/text elements that do not have an associated image (for content like "good morning" where there is audio but no associated image).
- `ImgCard.js` contains the class for audio/text elements that do have an associated image (for content like "broom" where there is audio and an image associated).
- `App.js` contains the utilization of both of the above classes to organize the content of the website.  
- `serviceWorker.js` is automatically updated and does not need to be altered.
- The `.css` files do not need to altered.  

The `public` folder contains the non-code content that drive the website (i.e. the audio and images).  

The `build` and `node_modules` folders are updated automatically and do not need to be altered.  

The `package.json` and `package-lock.json` files do not need to be updated unless the website is moving to a new URL.

#### Updating content
Before content can be updated, you will need to clone this repository to your computer using the terminal (on Mac) or Git Bash (on Windows).  I always suggest placing the folder somewhere easy to locate (like your Desktop).  For help cloning the repository see the following link for reference: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository.  

Once you have cloned the repository the only content that will need to be updated would be in the `App.js` file or added to the `public > audio/images` folders.  

Once content has been updated, navigate back to the terminal/Git Bash, and path into the repository location (your Desktop folder or wherever you saved the files).  Type `git add .` to add all changes to your commit.  Type `git commit -m "Update files"`, and then type `git push`.  This saves your changes to GitHub but you will still need to re-publish the website changes.  To re-publish the website, type `npm run deploy` which will build and deploy the website to whichever URL is listed in the `package.json` file (which does not need to be updated unless the URL is being moved).


### Project Contacts
Emily Gaggia, Workforce Development Co-Coordinator - emily@ndlon.org  
Kyle Simpson, Contract Website Developer - kyle3381@gmail.com


---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
