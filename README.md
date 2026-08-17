# E-Commerce Product Management System

## Project Overview

This project is an E-Commerce Product Management System built with TypeScript. It retrieves product information from the DummyJSON Products API, creates Product objects, calculates discounts and taxes, and displays product information in a simple user interface.

## Technologies Used

- TypeScript
- JavaScript
- Vite
- Tailwind CSS
- Fetch API
- DummyJSON Products API
- HTML

## Project Plan

### Project Goal

The goal of this project is to build an E-Commerce Product Management System using TypeScript. The application will retrieve product information from the DummyJSON Products API, create Product objects, calculate discounts and taxes, and display the results to the user.

### Step 1: Project Setup

- Create a TypeScript project using Vite.
- Configure TypeScript.
- Configure Tailwind CSS.
- Organize the project into models, services, and utility folders.

### Step 2: API Research

- Research the DummyJSON Products API.
- Identify the product information returned by the API.
- Determine which product properties are needed.

### Step 3: Product Class

- Create a Product class.
- Add product properties.
- Create a `displayDetails()` method.
- Create a `getPriceWithDiscount()` method.

### Step 4: Utility Functions

- Create a discount calculator.
- Create a tax calculator.
- Apply a 4.75% standard tax rate.
- Apply a 3% tax rate to groceries.

### Step 5: API Service

- Use the Fetch API to retrieve products.
- Use Promises and `async/await`.
- Handle failed API requests.

### Step 6: Error Handling

- Create a custom error class.
- Create an error handling function.
- Use `try/catch` for errors.

### Step 7: Main Application

- Fetch product data.
- Create Product objects.
- Calculate discounts.
- Calculate taxes.
- Calculate final prices.
- Display the products.

### Step 8: User Interface

- Create a simple product display.
- Use Tailwind CSS for styling.
- Display product pricing information.

### Step 9: Testing

- Test API requests.
- Test discount calculations.
- Test tax calculations.
- Test grocery tax calculations.
- Test error handling.
- Check for TypeScript errors.


Reflection

For this project, I built an E-Commerce Product Management System using TypeScript, object-oriented programming, asynchronous programming, and API interaction. I used TypeScript to define the structure and types of the product data. I created a Product class with properties such as the product ID, title, price, discount percentage, category, and thumbnail. The class also includes methods for displaying product details and calculating the price after a discount.

I separated the application into different modules to keep the code organized and easier to maintain. The discount calculator determines the dollar amount of a product's discount, while the tax calculator applies a 4.75% tax rate to standard products and a 3% tax rate to groceries. This helped me practice creating reusable functions instead of placing all of the calculations in one file.

One challenge I encountered was configuring the TypeScript, Vite, and Tailwind CSS environment. I had to resolve configuration issues involving module settings and the PostCSS and Tailwind configuration files. I also had to troubleshoot TypeScript errors related to CSS imports and variable scope. I resolved these issues by updating the project configuration and making sure variables were used within the correct scope.

For asynchronous operations, I used the Fetch API with async/await to retrieve product information from the DummyJSON Products API. I used try/catch blocks to handle errors and created a custom AppError class to provide more organized error handling.

Overall, this project helped me better understand how TypeScript can be used to build a structured application. It also gave me more practice with classes, modules, asynchronous programming, API requests, error handling, and separating application logic into reusable components.