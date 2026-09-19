# FoodHub

A scalable backend API for a food ordering platform. It provides a robust, role-based system allowing customers to browse meals and place orders, providers to manage their restaurant profiles, and administrators to oversee platform operations.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/PASTE_YOUR_POSTMAN_COLLECTION_ID_HERE)

> 📌 **TODO before publishing:** replace the Postman link above (or add a Swagger/OpenAPI link instead) so reviewers can test the API without cloning it.

## Features / Role-Based Access

- **CUSTOMER**: Browse available meals, place orders, view personal order history, and submit reviews.
- **PROVIDER**: Manage restaurant profiles, create menu items, and update outgoing order statuses.
- **ADMIN**: Global oversight, manage user access, and enforce platform authorization rules.

## Tech Stack

- **Node.js & Express.js**: Core application framework
- **TypeScript**: Static typing for reliable code
- **PostgreSQL**: Relational database
- **Prisma ORM**: Modern database toolkit with modular schemas
- **Better Auth**: Authentication and session management

## Project Architecture

The project follows a modular, feature-based architecture to separate concerns cleanly:

```
src/
├── lib/                     # External configurations (e.g., Better Auth)
├── middlewares/             # Global middlewares (auth, errors, 404)
├── modules/                 # Feature modules (admin, category, meal, order, provider, review, user)
├── app.ts                   # Express application setup
└── server.ts                # Entry point

prisma/
├── schema/                  # Modular Prisma schemas for distinct entities
└── schema.prisma            # Main Prisma schema file
```

## Database Schema (Key Entities)

- **User**: Core identity (Role, Status) and relations to profiles/orders.
- **ProviderProfile**: Restaurant-specific data (restaurantName, address).
- **Meal**: Menu items with pricing, category classification, and availability.
- **Order & OrderItem**: Point-in-time transactions tracking pricing, quantities, delivery address, and varying statuses (e.g., PENDING, DELIVERED).
- **Review**: Customer-generated ratings and commentary for meals.

## 💻 Prerequisites

Ensure you have the following installed before proceeding:

- Node.js (v18+)
- PostgreSQL (v14 or higher)

## 🚀 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/PASTE_YOUR_USERNAME/foodhub-server.git
   cd foodhub-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file at the root of the project:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/foodhub?schema=public"
   PORT=5000
   APP_URL="http://localhost:3000"
   BETTER_AUTH_SECRET="run: openssl rand -base64 32"
   BETTER_AUTH_URL="http://localhost:5000"
   ```

4. **Initialize the database:**

   Generate Prisma types and push changes to the database:

   ```bash
   npx prisma generate
   npx prisma db push
   # Optional: seed initial Admin structure if configured
   npm run seed
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

## 📡 API Overview

Authentication is handled via Better Auth. Requests mapped to restricted routes require a valid session context established via `/api/auth/*`.

> **Note:** Include cookies/tokens from Better Auth responses in the headers of consecutive requests.

### Key Endpoints

| Resource   | Method     | Endpoint              | Allowed Roles              |
|------------|------------|------------------------|-----------------------------|
| Users      | GET/PATCH  | `/api/users/:id`      | CUSTOMER, PROVIDER, ADMIN  |
| Providers  | GET        | `/api/provider/`      | Public                      |
| Meals      | POST       | `/api/meals/`         | PROVIDER, ADMIN            |
| Meals      | GET        | `/api/meals/`         | CUSTOMER, PROVIDER, ADMIN  |
| Categories | POST       | `/api/category/`      | Public                      |
| Orders     | POST       | `/api/orders/`        | CUSTOMER                    |
| Orders     | PATCH      | `/api/orders/:orderId`| PROVIDER, ADMIN            |
| Reviews    | POST       | `/api/review/`        | CUSTOMER                    |
| Admin      | GET        | `/api/admin/users`    | ADMIN                        |

## Security & Error Handling

- **Middleware RBAC**: Robust role-based access control prevents unauthorized endpoint interactions at the routing level.
- **Account Verification**: Verification status is checked before access is granted.
- **Centralized Errors**: A `globalErrorHandler` centrally intercepts issues (like Prisma `P2002` duplicate keys or validation constraints) and formats them into predictable, standardized HTTP responses.

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.