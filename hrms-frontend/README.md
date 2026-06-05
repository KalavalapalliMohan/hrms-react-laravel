# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Day 1 – React Learning Journey 🚀

## Today's Goal
Understand React basics and create a simple HRMS UI.

## Topics Covered

✅ React Project Setup  
✅ Understanding Components  
✅ JSX Basics  
✅ Login Page UI Design  
✅ Dashboard UI Design  

## Project Features

### Login Page
- Email Input
- Password Input
- Login Button
- Simple Responsive Layout

### Dashboard Page
- Header/Navbar
- Welcome Section
- Employee Statistics Cards
- Basic Dashboard Layout

## Technologies Used
- React.js
- JavaScript (ES6+)
- JSX
- CSS

## Learning Outcomes
- Learned how React applications are structured.
- Understood reusable components.
- Practiced writing JSX.
- Built a simple HRMS user interface.
- Improved frontend development skills.

## Next Steps
Day 2:
- React Hooks
- useState
- Forms Handling
- Employee Add Form
- Employee List UI

## Author


# Day 2 – React Learning Journey 🚀

## Today's Goal
Learn React Props, State, useState Hook, and Dynamic UI Rendering.

## Topics Covered

✅ Props  
✅ State  
✅ useState Hook  
✅ Dynamic UI Rendering  

## Practice Completed

### Props
- Passed data from parent component to child component
- Reused components with different data

### State
- Understood component state management
- Managed dynamic data inside components

### useState Hook
- Created state variables
- Updated state using setter functions
- Handled user interactions

### Dynamic UI Rendering
- Rendered data dynamically on the screen
- Updated UI based on state changes
- Displayed lists and conditional content

## Technologies Used
- React.js
- JavaScript (ES6+)
- JSX

## Learning Outcomes
- Learned how Props help components communicate.
- Understood State management in React.
- Practiced using the useState Hook.
- Built dynamic and interactive user interfaces.
- Improved React fundamentals.

## Next Steps
### Day 3 Goals
- Axios
- API Calling
- useEffect Hook
- Fetch Data from API
- Connect React with Laravel Backend

## Author


# Day 3 – React Learning Journey 🚀

## Today's Goal
Learn API integration in React using Axios, understand the useEffect Hook, and fetch data from APIs.

## Topics Covered

✅ Axios Setup  
✅ API Calling  
✅ useEffect Hook  
✅ Fetch Data from API  
✅ Display API Data in UI  

## Practice Completed

### Axios
- Installed and configured Axios
- Made GET requests to APIs
- Handled API responses and errors

### API Calling
- Connected React application with backend APIs
- Retrieved data from API endpoints
- Managed asynchronous operations

### useEffect Hook
- Understood component lifecycle behavior
- Used useEffect for API calls
- Controlled side effects in React components

### Fetch Data from API
- Fetched employee data from API
- Stored response data in state
- Rendered dynamic data on the screen

## Technologies Used
- React.js
- Axios
- JavaScript (ES6+)
- JSX

## Learning Outcomes
- Learned how frontend and backend communicate through APIs.
- Understood Axios for handling HTTP requests.
- Practiced using the useEffect Hook.
- Built dynamic UI using API data.
- Improved React and API integration skills.

## Next Steps
### Day 4 Goals
- Laravel API Authentication
- Laravel Sanctum
- Register API
- Login API
- Logout API
- Profile API

## Author
Mohan


# Day 4 – React Forms Learning Journey 🚀

## Today's Goal
Learn React Forms and Controlled Components.

## Topics Covered

✅ Forms in React  
✅ Controlled Components  
✅ Handling User Input  
✅ Form Submission  
✅ State Management with useState  

## Practice Completed

### Forms
- Created form elements using React
- Added input fields and submit buttons
- Managed form submissions

### Controlled Components
- Connected form inputs with React state
- Updated state using user input
- Maintained a single source of truth for form data

### User Input Handling
- Captured text input values
- Handled change events
- Managed multiple form fields

### Form Submission
- Prevented default form behavior
- Processed form data on submit
- Displayed entered information dynamically

## Technologies Used
- React.js
- JavaScript (ES6+)
- JSX
- useState Hook

## Learning Outcomes
- Learned how forms work in React.
- Understood the concept of Controlled Components.
- Practiced managing form data using state.
- Improved event handling skills.
- Built interactive and dynamic form-based UI.

## Next Steps

### Day 5 Goals
- Employee Add Form
- Form Validation
- Props & State Revision
- Employee List Rendering
- Basic CRUD UI

## Author
Mohan


# Day 5 Goal - React Forms

## Topics Covered

- React Forms
- useState
- Controlled Components
- onChange Event
- onSubmit Event

## Features Built

✅ Employee Add Form

- Name
- Email
- Department
- Submit Button

✅ Employee Table View

- Display Employee Data
- Add New Employee Locally
- Dynamic Rendering using map()

## Note

Currently the form works with React State only.
API Integration will be added in upcoming days using Laravel Backend.

# Day 6 Goal - React API Integration

## Topics Covered

* Axios POST Request
* Form Submit Handling
* Local Storage
* Token Storage

---

## Axios POST Request

Learned how to send data from React to a backend API using Axios.

Example:

```javascript
axios.post("http://localhost:8000/api/login", {
    email,
    password
});
```

---

## Form Submit

Handled form submissions using React events.

Example:

```javascript
const handleSubmit = async (e) => {
    e.preventDefault();

    // API call
};
```

---

## Local Storage

Learned how to store data in the browser using Local Storage.

Store data:

```javascript
localStorage.setItem("token", token);
```

Get data:

```javascript
const token = localStorage.getItem("token");
```

Remove data:

```javascript
localStorage.removeItem("token");
```

---

## Token Storage

After successful login, authentication token is stored in Local Storage.

Example:

```javascript
const response = await axios.post(
    "http://localhost:8000/api/login",
    loginData
);

localStorage.setItem("token", response.data.token);
```

This token can be used for accessing protected APIs.

Example:

```javascript
axios.get("http://localhost:8000/api/profile", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});
```

---

## Learning Outcome

✅ Connected React forms with Laravel APIs

✅ Sent POST requests using Axios

✅ Stored authentication tokens

✅ Managed user sessions using Local Storage

✅ Prepared foundation for protected routes and authentication flow

#React #Laravel #Axios #API #Authentication #WebDevelopment #FullStackDeveloper


# Day 8 - React Router Setup

## Objective

Learn and implement React Router for navigation between different pages in the Employee Management System.

## Topics Covered

### React Router DOM

Installed React Router DOM package:

```bash
npm install react-router-dom
```

### Routes Created

#### Login Route

```jsx
<Route path="/" element={<Login />} />
```

#### Dashboard Route

```jsx
<Route path="/dashboard" element={<Dashboard />} />
```

#### Employees Route

```jsx
<Route path="/employees" element={<Employees />} />
```

### App Routing Configuration

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Features Implemented

* React Router DOM Installation
* Login Page Routing
* Dashboard Page Routing
* Employees Page Routing
* Navigation Between Pages
* Organized Route Structure
* Improved User Experience

## Day 8 Outcome

✅ React Router Setup

✅ Login Route Created

✅ Dashboard Route Created

✅ Employees Route Created

✅ Client-Side Routing

✅ Better Navigation Flow

✅ Improved Application Structure

## Technologies Used

* React.js
* React Router DOM
* JavaScript
* JSX
# Day 9 - React Employee List & Pagination

## Goal

Integrate Employee List API with React and implement Pagination Navigation.

## React Tasks

### Employee List API Call

Fetch employee data from Laravel API using Axios.

```jsx
const [employees, setEmployees] = useState([]);
```

### Display Employee Data

Render employee records dynamically using:

```jsx
employees.map(...)
```

## Features Implemented

### Employee List

* Fetch employee data from API
* Store response in React state
* Display employee records in table format

### Pagination

Created pagination controls:

* Previous Button
* Page Number Buttons
* Next Button

### Navigation Features

* Previous button disabled on first page
* Next button disabled on last page
* Current page highlighted
* Dynamic API calls on page change
* Smooth page navigation experience

## Learning Outcomes

✅ React API Integration

✅ Axios GET Requests

✅ State Management with useState

✅ Dynamic Rendering using map()

✅ Pagination Logic

✅ Page Navigation Controls

✅ Professional Frontend Data Handling

## Technologies Used

* React JS
* Axios
* JavaScript (ES6)
* Laravel API

## Project Progress

Successfully implemented employee listing and pagination functionality for the Employee Management System.

### Author

Mohan

Full Stack Laravel + React Learning Journey 🚀
