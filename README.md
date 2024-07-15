<p align="center"><img align="centre" width="830" alt="image" src="https://github.com/user-attachments/assets/a15982e7-ac7e-49ce-9c8a-46728b070298"></p>


# Blog API Project

This project is a simple blog API built with Node.js and Express. It allows you to perform CRUD operations on blog posts via HTTP requests. The front-end for this project is pre-built and connects to the back-end API to display, create, edit, and delete blog posts.

## Features

- **GET** all blog posts
- **GET** a specific blog post by ID
- **POST** a new blog post
- **PATCH** a specific blog post by ID
- **DELETE** a specific blog post by ID

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:

    $ `git clone https://github.com/amlansahoo07/blog-api-project.git`

2. Navigate to the project directory:

    $ `cd blog-api-project`

3. Install the dependencies:

    $ `npm install`

### Running the Project

1. Start the API server:

    $ `nodemon index.js`

2. Open a new terminal and start the front-end server:

    $ `nodemon server.js`

3. Open your browser and navigate to `http://localhost:3000` to see the blog.

### API Endpoints

- **GET /posts**

  Retrieve all blog posts.

  Example request:

  $ `curl -X GET http://localhost:4000/posts`

- **GET /posts/:id**

  Retrieve a specific blog post by ID.

  Example request:

  $ `curl -X GET http://localhost:4000/posts/1`

- **POST /posts**

  Create a new blog post.

  Example request:

  $ `curl -X POST -H "Content-Type: application/json" -d '{"title": "New Post", "content": "This is a new post.", "author": "John Doe"}' http://localhost:4000/posts`

- **PATCH /posts/:id**

  Update a specific blog post by ID.

  Example request:

  $ `curl -X PATCH -H "Content-Type: application/json" -d '{"title": "Updated Post"}' http://localhost:4000/posts/1`

- **DELETE /posts/:id**

  Delete a specific blog post by ID.

  Example request:

  $ `curl -X DELETE http://localhost:4000/posts/1`

## File Structure

- **index.js**: Contains the API server and the routes for handling CRUD operations.
- **server.js**: Contains the front-end server that renders the pages and interacts with the API.
- **views/**: Contains the EJS templates for the front-end.
  - **index.ejs**: The main page displaying the list of blog posts.
  - **modify.ejs**: The page for creating or editing a blog post.
- **public/**: Contains static files such as CSS.
  - **styles/**: Contains the CSS files.
    - **main.css**: The main stylesheet for the project.

## Comments and Documentation

The code in `index.js`, `server.js`, `index.ejs`, and `modify.ejs` is well-commented to enhance readability and understanding. Each section of the code includes comments explaining the functionality and purpose.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project is part of the coursework for [Angela Yu's Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) on Udemy.
