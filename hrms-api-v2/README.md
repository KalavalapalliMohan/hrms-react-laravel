<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


# 🚀 HRMS API V2 - day 3

DAY 3 GOAL – HRMS API V2
📌 Project: HRMS API V2

Today I started building the foundation of the HRMS API V2 project using Laravel.

✅ Tasks Completed
Created a new Laravel project for HRMS API V2
Configured database connection
Set up Laravel Sanctum for API authentication
Published Sanctum configuration and migrations
Migrated database tables
Prepared the project structure for REST APIs
Tested API routes using Postman
📚 What I Learned
Laravel Project Setup
Creating a new Laravel application
Understanding project structure
Environment configuration using .env
Laravel Sanctum
Installing Sanctum
Publishing Sanctum assets
Running migrations
Understanding token-based authentication
Preparing APIs for secure access
API Development Preparation
Route organization
API testing with Postman
Backend architecture planning
🛠️ Commands Used
composer create-project laravel/laravel hrms-api-v2

composer require laravel/sanctum

php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

php artisan migrate

php artisan serve
🎯 Next Goal (Day 4)
Register API
Login API
Logout API
Profile API
Sanctum Token Authentication
🚀 Learning Journey

Building HRMS API V2 step by step while learning Laravel API development, authentication, and production-level project structure.

#Laravel #PHP #RESTAPI #LaravelSanctum #BackendDevelopment #WebDevelopment #HRMS #SoftwareDeveloper #LearningInPublic #FullStackDeveloper #GitHubJourney



DAY 4 GOAL – Laravel API Authentication
📌 Project: HRMS API V2

Today I focused on implementing authentication APIs using Laravel Sanctum. The goal was to secure the application and understand how token-based authentication works in real-world REST APIs.

✅ Features Implemented
Authentication APIs
Register API
Login API
Logout API
Profile API
Sanctum Token Authentication
Security
Password Hashing
Token Generation
Protected Routes using Middleware
Authenticated User Access
📚 What I Learned
Laravel Sanctum
How Sanctum provides lightweight API authentication
Creating and managing access tokens
Protecting API routes with auth:sanctum
Revoking tokens during logout
API Authentication Flow
User registers an account
User logs in with credentials
Sanctum generates an access token
Token is sent with API requests
Protected routes verify the token
Logout removes the active token
API Testing
Tested APIs using Postman
Sent Bearer Tokens in request headers
Verified authentication and authorization flow
🛠️ APIs Created
Public Routes
POST /api/register
POST /api/login
Protected Routes
GET /api/profile
POST /api/logout
🧑‍💻 Technologies Used
Laravel 12
Laravel Sanctum
MySQL
Postman
REST API
🎯 Interview Questions Covered
What is Laravel Sanctum?

Laravel Sanctum is a lightweight authentication package used for securing APIs and SPA applications using token-based authentication.

Difference Between Session Auth and Token Auth?
Session Authentication stores user information on the server.
Token Authentication uses access tokens and is mainly used for APIs.
What is API Authentication?

API Authentication verifies the identity of users before allowing access to protected API endpoints.

What is Middleware?

Middleware filters HTTP requests and can be used for authentication, authorization, logging, and more.

Why Use REST APIs?

REST APIs provide a standard way for frontend and backend applications to communicate using HTTP methods.

🚀 Next Goal (Day 5)
Employee CRUD APIs
Form Request Validation
API Resources
Error Handling
Postman API Testing
💡 Learning Journey

Today was all about understanding real-world API authentication using Laravel Sanctum. Building secure authentication APIs helped me learn how modern applications manage user access and protect sensitive data.

#Laravel #LaravelSanctum #PHP #RESTAPI #BackendDevelopment #APIAuthentication #WebDevelopment #SoftwareDeveloper #LearningInPublic #FullStackDeveloper #HRMSProject #GitHubJourney


# Day 5 Goal - Laravel Employee CRUD API

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

# Day 8 - Laravel API Resources

## Objective

Learn and implement Laravel API Resources to create consistent and reusable API responses.

## Topics Covered

### Laravel API Resources

Created a resource using:

```bash
php artisan make:resource EmployeeResource
```

### Employee Resource

Used EmployeeResource to transform employee data before sending API responses.

Example:

```php
return response()->json([
    'status' => true,
    'data' => new EmployeeResource($employee)
]);
```

### Consistent JSON Response Structure

Standardized all Employee API responses with a common format.

Example Response:

```json
{
  "status": true,
  "data": {
    "id": 1,
    "name": "Mohan"
  }
}
```

## Implemented Features

* EmployeeResource created
* Employee List response using Resource Collection
* Employee Details response using Resource
* Employee Create response using Resource
* Employee Update response using Resource
* Consistent API response format
* Cleaner and maintainable API structure

## Day 8 Outcome

✅ Laravel API Resources

✅ Consistent JSON Response Structure

✅ Employee Resource Collection

✅ Standardized API Responses

✅ Better API Response Management

✅ Improved Code Maintainability

## Technologies Used

* Laravel 12
* PHP
* API Resources
* MySQL
* REST API
