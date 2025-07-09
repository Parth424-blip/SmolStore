A modern e-commerce web application built with Next.js and React, featuring digital products (such as planners and tech stickers) and seamless Stripe-powered checkout.
Features
Product Catalog: Browse a curated selection of digital products, including a Medieval Dragon Month Planner and custom tech logo stickers.
Product Details: View detailed descriptions, high-resolution images, and pricing for each product.
Shopping Cart: Add, remove, and update product quantities in a persistent cart.
Stripe Checkout: Secure, real-time payment processing using Stripe Checkout.
Order Success Page: Friendly confirmation page after successful purchase.
Responsive UI: Clean, modern design with responsive layouts for all devices.



Technologies Used
Next.js (App Router)
React
Stripe (for product management and checkout)
Context API (for cart state management)
CSS Modules
Getting Started
Prerequisites
Node.js (v18+ recommended)
npm or yarn


Project Structure
app/ – Main Next.js app directory (pages, API routes, styles)
api/products/ – Fetches product and price data from Stripe
api/checkout/ – Handles Stripe Checkout session creation
cart/ – Shopping cart page
success/ – Order confirmation page
components/ – UI components (Product listing, banners, etc.)
context/ – React Context for cart state
public/ – Static assets (images, icons)
envConfig.js – Loads environment variables

How It Works
Product Data: Fetched from Stripe using the /api/products endpoint.
Cart State: Managed globally with React Context (ProductContext.jsx).
Checkout: Cart items are sent to /api/checkout, which creates a Stripe Checkout session and redirects the user.
Success: After payment, users are redirected to a thank-you page.
Customization
Add or update products directly in your Stripe dashboard.
Update images in the public/low_res and public/med_res folders.


