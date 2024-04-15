import BlogPost from "./BlogPost";

const Blog = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Successful Farming",
      author: "John Doe",
      date: "April 1, 2024",
      content:
        "<p>Here are 10 tips to help you achieve success in farming:</p><ul><li>Choose the right crops for your region</li><li>Invest in soil health</li><li>Implement efficient irrigation systems</li><li>Monitor and manage pests proactively</li><li>...</li></ul>",
    },
    {
      id: 2,
      title: "Case Study: Sustainable Ranching Practices",
      author: "Jane Smith",
      date: "April 5, 2024",
      content:
        "<p>Explore the success story of a ranch that has implemented sustainable practices to improve productivity while preserving the environment.</p><p>The ranch utilized rotational grazing, reforestation efforts, and water conservation techniques to achieve remarkable results.</p>",
    },
    // Add more blog post data as needed
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">Welcome to Our Blog!</h1>
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Blog;
