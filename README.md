# WTWR (What to Wear?): Back End

This is the front end portion of the WTWR (What to Wear?) application, a project that provides a personalized clothing suggestion service based on the weather. This client side React application allows users to register, log in, and manage their virtual wardrobe by adding, liking, and deleting clothing items.

The front end interacts with the WTWR API server and provides a clean, responsive user interface for managing clothing based on current weather conditions.

## Features

-User registration and login (with token-based authentication)
-Add and delete clothing items
-Like or unlike items
-View suggestions based on real time weather
-Responsive modals for user interaction
-Profile editing and logout functionality
-Protected routes and conditional rendering based on auth state

### Technologies

-React.js – Front-end JavaScript library
-React Router – For client side routing
-Context API – Global state management for auth and user data
-Vite – Development bundler and build tool
-CSS – Styling and responsive layout
-ESLint – Linting for consistent code quality
-Postman – Used alongside for testing API integration
-Modular project structure

#### Running the Project

`npm install` - to install dependencies

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

##### link to Back-end application

Link - git@github.com:CastleDD/se_project_express.git

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
