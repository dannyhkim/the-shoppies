# The Shoppies
Managing movie nominations for The Shoppies: Movie awards for entrepreneurs. 
![The Shoppies](https://user-images.githubusercontent.com/43249425/117595064-aff9b180-b10d-11eb-83eb-ecdce42e1c12.png)

[Deployed Version](https://the-shoppies-movie-nominations.herokuapp.com/)

## The Challenge 
We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.


## Technical Requirements
1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.

## Extras
For my Shoppies movie nomination website, I decided to include extra features including:
1. Saving the nomination list in the case that the user leaves the page with `localStorage` for persistent storage 
2. Creating a polished design with CSS and [MDBootstrap for React](https://mdbootstrap.com/docs/b5/react/)
3. Adding animations for loading, adding/deleting movies and nominations with [React Transition Group](https://reactcommunity.org/react-transition-group/)

## Technologies Used
- React.js
- Redux
- OMDB API
- MDBootstrap 
- React Transition Group 
- Heroku 
- CSS
- Sketch 

## Process
To develop a rough design of the platform, I used Sketch to brainstorm component placement, design, fonts, and styling. I used React in order to develop the various UI components to be displayed to the user based on different states. In hand with React, I used Redux and developed action creators, reducers, and action types to better manage the app's movie and nomination states. For the implementation of the design I used CSS and a CSS framework called MDBootstrap for React to leverage layout responsiveness and components. For animations of the loading, adding, and deleting, I used MDBootstrap and React Transition Group. For nomination list storage persistence when the user leaves the page, I used `localStorage` to store an array of the nominations in the browser.
