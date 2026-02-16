# Dating Backend API

A comprehensive CRUD (Create, Read, Update, Delete) dating backend API built with NestJS and TypeORM.

## Features

- **User Management**: Complete CRUD operations for user profiles
- **Match System**: Create and manage matches between users
- **Messaging**: Send and receive messages between matched users
- **SQLite Database**: Lightweight database for easy setup and development
- **Validation**: Input validation using class-validator
- **RESTful API**: Clean and intuitive REST endpoints

## Tech Stack

- **NestJS**: Progressive Node.js framework
- **TypeORM**: Object-relational mapping
- **SQLite**: Embedded database
- **TypeScript**: Type-safe development
- **Class Validator**: DTO validation

## Installation

```bash
npm install
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Build
npm run build
```

The application will run on `http://localhost:3000`

## API Endpoints

### Users

- `POST /users` - Create a new user
  ```json
  {
    "email": "john@example.com",
    "name": "John Doe",
    "bio": "Looking for meaningful connections",
    "age": 28,
    "gender": "male",
    "location": "New York",
    "interests": "hiking, reading, music",
    "photoUrl": "https://example.com/photo.jpg"
  }
  ```

- `GET /users` - Get all users
- `GET /users?search=query` - Search users by name, location, or interests
- `GET /users/:id` - Get a specific user
- `PATCH /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

### Matches

- `POST /matches` - Create a new match
  ```json
  {
    "user1Id": "uuid-of-user-1",
    "user2Id": "uuid-of-user-2",
    "status": "pending"
  }
  ```

- `GET /matches` - Get all matches
- `GET /matches/:id` - Get a specific match
- `GET /matches/user/:userId` - Get all matches for a user
- `PATCH /matches/:id` - Update match status (accepted/rejected)
  ```json
  {
    "status": "accepted"
  }
  ```
- `DELETE /matches/:id` - Delete a match

### Messages

- `POST /messages` - Send a new message
  ```json
  {
    "senderId": "uuid-of-sender",
    "receiverId": "uuid-of-receiver",
    "content": "Hello! How are you?"
  }
  ```

- `GET /messages` - Get all messages
- `GET /messages/:id` - Get a specific message
- `GET /messages/user/:userId` - Get all messages for a user
- `GET /messages/conversation?user1Id=uuid1&user2Id=uuid2` - Get conversation between two users
- `PATCH /messages/:id` - Mark message as read
  ```json
  {
    "isRead": true
  }
  ```
- `DELETE /messages/:id` - Delete a message

## Database Schema

### User
- `id`: UUID (Primary Key)
- `email`: String (Unique)
- `name`: String
- `bio`: String (Optional)
- `age`: Integer (Optional, 18-100)
- `gender`: String (Optional)
- `location`: String (Optional)
- `interests`: String (Optional)
- `photoUrl`: String (Optional)
- `createdAt`: Timestamp
- `updatedAt`: Timestamp

### Match
- `id`: UUID (Primary Key)
- `user1Id`: UUID (Foreign Key)
- `user2Id`: UUID (Foreign Key)
- `status`: String (pending/accepted/rejected)
- `createdAt`: Timestamp

### Message
- `id`: UUID (Primary Key)
- `senderId`: UUID (Foreign Key)
- `receiverId`: UUID (Foreign Key)
- `content`: Text
- `isRead`: Boolean
- `createdAt`: Timestamp

## Project Structure

```
src/
├── main.ts                 # Application entry point
├── app.module.ts           # Root module
├── database/               # Database configuration
│   └── database.module.ts
├── users/                  # User module
│   ├── entities/
│   │   └── user.entity.ts
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── matches/                # Match module
│   ├── entities/
│   │   └── match.entity.ts
│   ├── dto/
│   │   ├── create-match.dto.ts
│   │   └── update-match.dto.ts
│   ├── matches.controller.ts
│   ├── matches.service.ts
│   └── matches.module.ts
└── messages/               # Message module
    ├── entities/
    │   └── message.entity.ts
    ├── dto/
    │   ├── create-message.dto.ts
    │   └── update-message.dto.ts
    ├── messages.controller.ts
    ├── messages.service.ts
    └── messages.module.ts
```

## Development

The application uses SQLite for easy development. The database file `dating.db` will be automatically created in the project root on first run.

### Example Usage Flow

1. Create two users
2. Create a match between them with status "pending"
3. Update the match to "accepted"
4. Send messages between the users
5. Retrieve conversation history

## License

ISC
