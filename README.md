# Book Search Engine

## Description

This project refactors an existing Google Books API search engine from a RESTful API to a GraphQL API using Apollo Server. The application is built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. The application allows users to search for books and save their favorite books to their profile.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/graphql-book-search.git
   
2. Navigate to the project directory:
   ```sh
   cd graphql-book-search
   
3. Install the dependencies for both the client and server:
   ```sh
   npm install
   cd client
   npm install
   cd ..
   cd server
   npm install

4. Create a .env file in the server directory and add your MongoDB Atlas connection string and <vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'> secret</vscode_annotation>JWT:
   ```sh
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>


## Usage

1. Start the development server:
   ```sh
   npm run develop
   
2. Open your browswer and navigate to http://localhost:3000 to use the application



## Deployment 
The application is awaiting deployment to Render with a MongoDB database using MongoDB Atlas


## License
This project is licensed under the MIT License.
