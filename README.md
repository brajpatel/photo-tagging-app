# Photo Tagging App
![preview-img1](https://github.com/brajpatel/photo-tagging-app/blob/main/src/preview/preview-img1.jpg)
![preview-img2](https://github.com/brajpatel/photo-tagging-app/blob/main/src/preview/preview-img2.jpg)
![preview-img3](https://github.com/brajpatel/photo-tagging-app/blob/main/src/preview/preview-img3.jpg)
![preview-img4](https://github.com/brajpatel/photo-tagging-app/blob/main/src/preview/preview-img4.jpg)
## About
This app was created for The Odin Project's [JavaScript and the Backend section](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript#javascript-and-the-backend) and was created using React and Firebase. It was a great opportunity to practice working with a 'Backend as a Service'(I.e. Firebase) and hooking up the front end functionality to the backend. The app wass inspired by the popular puzzle series 'Where's Waldo?' (or Wally, depending where you're from) but features a different image style with five characters to find.
<br/>
After the player enters their name and clicks play, a timer will begin and they must find each character as fast as possible. Hovering over each name will display an image of the corresponding character that still nedds to be found and clicking on the image will show a marker for the area they clicked in and a menu of the characters that still need to be found. If the selected area and character match, the character will be marked as found and will be removed from the menu. Once all five characters have been found, the Firebase Firestore Database will come in to play and store the player's name and time. If the player's time was fast enough, it will be displayed among the top five fastest times.
<br/><br/>
These are some of the challenges I faced while making this project:
- Implementing a map with areas for each character so unique positions could be given to them
- Retrieving data from the database so it could be displayed
- Building and deploying the app for hosting with firebase
## View Project
You can view and have a go trying to get your name on the leaderboard of the Photo Tagging project by clicking [here](https://phototaggingapp-9587f.firebaseapp.com/).
