# Day 1 - React Employee Dashboard

## Today's Work

- Started React frontend for the Laravel HRMS project
- Built Login UI using React components
- Created Dashboard UI layout
- Implemented reusable React components
- Organized frontend project structure


## Progress Update

Started developing the React frontend for the Laravel HRMS system. Completed the Login page and Dashboard UI using reusable React components.

# Day 2 - React Employee Dashboard

## Topics Learned

* Props
* State
* useState Hook
* Dynamic UI Rendering

## Features Added

* Employee Cards
* Employee Images
* Salary Field
* Active / Inactive Status
* Delete Button UI
* Search Input UI
* Responsive Card Layout

## Technologies Used

* React JS
* JavaScript
* CSS Inline Styling

## What I Practiced

* Passing data using props
* Managing data with useState
* Rendering components dynamically using map()
* Building reusable React components
* Designing simple UI layouts

## Project Goal

To improve React fundamentals by building a simple Employee Management UI using reusable components and dynamic rendering.

# HRMS API V2 - Day 3 Progress

## React

### Topics Covered

* Axios
* API Calling
* useEffect Hook
* Fetch Data from API

### Completed Tasks

* Integrated Axios for API requests
* Fetched employee data from API
* Displayed API data in React components
* Practiced useEffect for handling side effects

## Laravel

### Project Setup

* Created HRMS API V2 Project
* Configured database connection
* Created Employee Model and Migration

### Sanctum

* Setup Laravel Sanctum for API Authentication
* Configured authentication middleware

## Employee Module

### Database Fields

* Name
* Email
* Phone
* Department
* Designation
* Status

## Learning Outcome

* Understanding API integration in React
* Working with Axios and useEffect
* Building REST API structure in Laravel
* Setting up authentication using Sanctum

## Next Steps

* Create Employee CRUD APIs
* Connect React with Laravel APIs
* Implement Authentication Flow
* Build Employee Management Module



# Day 4 – Laravel API Authentication with Sanctum

## Overview

Today I focused on building secure API Authentication in Laravel using Sanctum. The goal was to understand how authentication works in REST APIs and how tokens are used to protect routes.

## Features Implemented

### ✅ Register API

* User registration endpoint
* Validation for user data
* Password hashing using Laravel's built-in security features

### ✅ Login API

* User authentication using email and password
* Sanctum token generation after successful login
* JSON response with authentication token

### ✅ Logout API

* Revoking current access token
* Secure user logout functionality

### ✅ Profile API

* Protected route accessible only to authenticated users
* Returns logged-in user details

### ✅ Sanctum Token Authentication

* Installed and configured Laravel Sanctum
* Protected API routes using `auth:sanctum` middleware
* Token-based authentication for secure API access

## Technologies Used

* Laravel 12
* Laravel Sanctum
* REST API
* Postman
* MySQL

## API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| POST   | /api/register | Register User    |
| POST   | /api/login    | Login User       |
| GET    | /api/profile  | Get User Profile |
| POST   | /api/logout   | Logout User      |

## What I Learned

* Difference between Session Authentication and Token Authentication
* How REST APIs work
* Laravel Middleware usage
* API Authentication concepts
* Sanctum Token Management
* Protecting routes with authentication middleware

## Testing

All endpoints were tested successfully using Postman.

## Next Steps

* Role-Based Authentication
* React + Laravel Authentication Integration
* CRUD APIs with Protected Routes
* API Resource Responses

# Day 5 Goal - React Forms and Laravel Employee CRUD API

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

#  Laravel Employee CRUD API

## Topics Covered

* Laravel Migration
* Eloquent Model
* RESTful API Development
* Form Request Validation
* API Resources

## Features Built

✅ Employee Migration

* Created employees table
* Added required fields:

  * Name
  * Email
  * Phone
  * Department
  * Salary

✅ Employee Model

* Created Employee Model
* Configured Fillable Properties

✅ Employee CRUD APIs

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | /api/employees      | Get All Employees   |
| POST   | /api/employees      | Create Employee     |
| GET    | /api/employees/{id} | Get Single Employee |
| PUT    | /api/employees/{id} | Update Employee     |
| DELETE | /api/employees/{id} | Delete Employee     |

✅ Form Request Validation

* Created StoreEmployeeRequest
* Created UpdateEmployeeRequest
* Validated:

  * Name
  * Email
  * Phone
  * Department
  * Salary

✅ API Resource

* Created EmployeeResource
* Returned standardized JSON responses
* Improved API response structure

## Learning Outcomes

* Understanding REST API Architecture
* Building Production-Ready CRUD APIs
* Implementing Request Validation
* Using API Resources for Clean Responses
* Following Laravel Best Practices

## Next Goal

* Connect React Frontend with Laravel Employee APIs
* Axios CRUD Operations
* Employee Create, Edit and Delete from React
