# MechKeyMart

### Live URL: &nbsp; &nbsp; [mechkeymart-server.vercel.app](https://mechkeymart-server.vercel.app/)

### CLIENT REPO: &nbsp; &nbsp; [github.com/mdsejan/mechkeymart](https://github.com/mdsejan/mechkeymart)

## Introduction

MechKeyMart is a modern e-commerce platform dedicated to mechanical keyboards. It is designed to provide a seamless shopping experience for keyboard enthusiasts, featuring easy product browsing, detailed product pages, and a smooth cart system.

## Project Description

MechKeyMart is built using React, Redux, Mongoose, and Express. This e-commerce site allows users to browse and purchase mechanical keyboards with ease. It includes powerful admin tools for product management, advanced search and filtering options, and optional integration with Stripe for secure payments.

## Features

- **Homepage**: Includes a visually appealing hero section, service advertisements, featured products, top brands, customer reviews, and additional sections about mechanical keyboards.
- **Products Page**: Displays all products with search, filtering, and sorting options.
- **Product Details Page**: Shows detailed information about each product with an "Add to Cart" feature.
- **Cart Page**: Manages items in the cart, allows quantity adjustments, and proceeds to checkout.
- **Checkout Page**: Collects user details and offers payment methods including Cash on Delivery and Stripe.
- **Product Management/Dashboard Page**: Provides tools for managing products, including updating, deleting, and adding new products.
- **About Us Page**: Showcases information about the company with attractive designs.
- **Contact Us Page**: Provides contact information and encourages user feedback.
- **UI/UX**: Emphasizes a smooth and intuitive user experience with responsive design.
- **Other Features**: Includes debounced API calls, page refresh warnings, and micro-animations.

## Technology Stack

- **Frontend**: React, Redux, Vite, TypeScript, RTK Query
- **Backend**: Node.js, Express, MongoDB, Mongoose, TypeScript, Zod

## Installation Guideline

### Prerequisites

- react (v18 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mdsejan/mechkeymart-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mechkeymart-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables to the `.env` file:

   ```plaintext

    NODE_ENV=development
    PORT=5000
    DATABASE_URL=<Your_mongodb_URI>

   ```

### Running the Application

Start the server:

```bash
npm run start:dev
```

The server will start running at `http://localhost:5000`.
