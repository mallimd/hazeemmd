const blogPosts = [
  {
    title: "My First Blogs Post",
    author: "John Doe",
    date: "June 1, 2023",
    content:
      "Welcome to my first blog post! Today, I want to share my journey into the world of blogging...",
    isPrivate: true,
  },
  {
    title: "My Second Blog Post",
    author: "Jane Smith",
    date: "June 5, 2023",
    content:
      "In this post, I’m discussing the importance of work-life balance...",
    isPrivate: false,
  },
  {
    title: "A Day in the Life",
    author: "Alice Johnson",
    date: "June 10, 2023",
    content:
      "Ever wondered what a day in my life looks like? Join me...",
    isPrivate: false,
  },
  {
    title: "Tips for Healthy Eating",
    author: "Bob Lee",
    date: "June 15, 2023",
    content:
      "Eating healthy doesn’t have to be complicated...",
    isPrivate: true,
  },
  {
    title: "Traveling on a Budget",
    author: "Susan White",
    date: "June 20, 2023",
    content:
      "Dreaming of traveling the world but worried about the cost?...",
    isPrivate: false,
  },
];

function Header({ title, tagline }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{tagline}</p>
    </header>
  );
}

function BlogPost({ title, author, date, content, isPrivate }) {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p><em>By {author} on {date}</em></p>
      <p>{isPrivate ? "The content of this post is private" : content}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header title="My Blog" tagline="A blog about everything" />
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
      <footer>© 2024 My Blog. All rights reserved.</footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
