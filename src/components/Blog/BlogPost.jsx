const BlogPost = ({ title, author, date, content }) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-2 text-orange-800">{title}</h2>
      <div className="text-gray-600 mb-2">Author: {author}</div>
      <div className="text-gray-600 mb-4">Date: {date}</div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default BlogPost;
