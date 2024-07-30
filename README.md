# Appeta Food Delivery Platform Admin Frontend

This repository contains the frontend code for the admin interface of the Appeta Food Delivery Platform. The admin frontend allows administrators to manage users, restaurants, items, and orders.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the admin frontend, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/admin_frontend_appeta.git
   cd admin_frontend_appeta
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Configuration

Before running the application, you need to configure the environment variables. Create a `.env` file in the root of your project and add the following variables:

```env
REACT_APP_BACKEND_URL=https://backend-appeta.onrender.com
```

Replace `https://backend-appeta.onrender.com` with your actual backend URL.

## Running the Application

To start the application, use the following command:

```sh
npm start
```

This will start the development server and open the application in your default browser. The application will be running at `http://localhost:3000`.

## Features

The admin frontend includes the following features:

### User Management

- **View Users**: View a list of all users registered on the platform.
- **Delete User**: Remove a user from the platform.

### Restaurant Management

- **View Restaurants**: View a list of all restaurants registered on the platform.
- **Delete Restaurant**: Remove a restaurant from the platform.

### Item Management

- **Add Item**: Add new items to be available for users to order.
- **View Items**: View a list of all items available on the platform.
- **Delete Item**: Remove an item from the platform.

### Order Management

- **View Orders**: View a list of all orders placed on the platform.
- **View Past Orders**: View a history of past orders.
- **Accept Order**: Accept an incoming order, changing its status to "Processing".
- **Decline Order**: Decline an incoming order, removing it from the list of active orders.

## Contributing

We welcome contributions to the Appeta Food Delivery Platform admin frontend! To contribute, follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

   ```sh
   git checkout -b my-feature-branch
   ```

3. **Make your changes.**
4. **Commit your changes:**

   ```sh
   git commit -m 'Add new feature'
   ```

5. **Push to the branch:**

   ```sh
   git push origin my-feature-branch
   ```

6. **Submit a pull request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
