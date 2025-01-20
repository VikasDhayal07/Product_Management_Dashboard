# Product_Management_Dashboard
## Overview
A React.js application built with Next.js and Redux Toolkit to manage a list of products. The dashboard allows users to view, filter, sort, and add products to their favorites. The application uses Redux for global state management and includes routing via Next.js.

#### Core Features
1. *List Display*:
   - Fetch a list of products from a mock API ([FakeStoreAPI](https://fakestoreapi.com/products)).
   - Display the following details for each product:
     - Product Title
     - Price
     - Category

2. *Add to Favorites*:
   - Each product has a button to mark it as a "favorite."
   - Use Redux Toolkit to manage the list of favorite products.

3. *Filter Products*:
   - Users can filter products by category using a dropdown or select input.

4. *Sort Products*:
   - Users can sort products by price in ascending or descending order.

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VikasDhayal07/Product_Management_Dashboard.git
npm install

npm run dev
