
<div align="center">
  <img src="https://github.com/user-attachments/assets/2c78eac6-924d-4d6a-9236-5eae486b7763" alt="comment-extensible">
  <br><br>
</div>


# Nextjs Comment Extensible

This ReactJS package provides a comments component with one level deep replies. It is designed to be database agnostic, supporting MongoDB and PostgreSQL and more...

## Features

- 💬Commenting system with one level deep replies
- 📦Database agnostic: works with MongoDB, PostgreSQL and more...
- 🎉Easy to integrate into existing React projects

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
  - [MongoDB](#mongodb)
  - [PostgreSQL](#postgresql)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Installation

To install the package, use npm or yarn:

```bash
npm install comment-extensible
# or
yarn add comment-extensible
```

## Setup

### MongoDB

1. **Configure MongoDB Connection**

   Create a file `mongoConfig.ts`:

   ```typescript
   export const mongoConfig = {
     mongoDBUrl: "your-mongodb-url",
     dbName: "your-database-name",
     collectionName: "comments",
   };
   ```

2. **Ensure MongoDB is running** and the connection URL is correctly set.

### PostgreSQL

1. **Configure PostgreSQL Connection**

   Create a file `postgresConfig.ts`:

   ```typescript
   export const postgresConfig = {
     user: "your-db-user",
     host: "your-db-host",
     database: "your-database-name",
     password: "your-db-password",
     port: 5432,
   };
   ```

2. **Ensure PostgreSQL is running** and the connection parameters are correctly set.

## Usage

### Import and Use the Comment Component

Here's how you can use the Comment component in your React application for Mongo & Postgres:

```javascript
// App.js
"use client";

import { CommentSection, MongoCommentRepository } from "comment-extensible";

export default function Home() {
  const { mongoDBUrl, dbName, collectionName } = {
    mongoDBUrl: "mongodb://localhost:27017",
    dbName: "comment-extensible",
    collectionName: "comment",
  };

  const commentRepository = new MongoCommentRepository(
    mongoDBUrl,
    dbName,
    collectionName
  );

  return <CommentSection commentRepository={commentRepository} />;
}
```

```javascript
// App.js ⚠️⚠️⚠️ Work in progress - will be out in the next version
"use client";

import { CommentSection, PostgresCommentRepository } from "comment-extensible";

export default function Home() {
  const poolOptions = {
    user: "postgres",
    host: "localhost",
    database: "comment-extensible",
    password: "YOUR_PASSWORD",
    port: 5432,
  };

  const commentRepository = new PostgresCommentRepository(poolOptions);

  return <CommentSection commentRepository={commentRepository} />;
}
```

## Contribution

We welcome contributions to enhance this package. To contribute, follow these steps:

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/PiusLucky/comment-extensible.git
   ```

3. **Create a new branch** for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes** and commit them:

   ```bash
   git add .
   git commit -m "Add your commit message"
   ```

5. **Push your changes** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub.

### Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing to ensure respectful collaboration.

### Running Tests

Before submitting a pull request, ensure that all tests pass:

```bash
npm test
# or
yarn test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
