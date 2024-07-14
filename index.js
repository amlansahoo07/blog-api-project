import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store for blog posts
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2024-07-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2024-07-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2024-07-10T09:15:00Z",
  },
];

// Middleware to parse incoming JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// GET a specific post by ID
app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const specificPost = posts.find((post) => post.id === id);
  res.json(specificPost);
});

// POST a new post
app.post("/posts", (req, res) => {
  const newId = posts.length + 1;
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date()
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PATCH an existing post (update one or more fields)
app.patch("/posts/:id", (req, res) => {
  const existingId = parseInt(req.params.id);
  const existingPost = posts.find((post) => post.id === existingId);
  
  if (!existingPost) {
    return res.status(404).json({ error: "Post not found." });
  }

  const updatedPost = {
    id: existingId,
    title: req.body.title || existingPost.title,
    content: req.body.content || existingPost.content,
    author: req.body.author || existingPost.author,
    date: new Date()
  };
  
  const searchIndex = posts.findIndex((post) => post.id === existingId);
  posts[searchIndex] = updatedPost;
  res.status(200).json(updatedPost);
});

// DELETE a specific post by ID
app.delete("/posts/:id", (req, res) => {
  const deletionId = parseInt(req.params.id);
  const searchIndex = posts.findIndex((post) => post.id === deletionId);
  
  if (searchIndex > -1) {
    posts.splice(searchIndex, 1);
    res.sendStatus(200);
  } else {
    res.status(404).json({ error: "Post not found. No posts were deleted." });
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
