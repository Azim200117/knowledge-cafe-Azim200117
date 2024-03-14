import { useEffect, useState } from "react";


const Blogs = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('blogs.json',)
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  return (
    
    <div className="w-2/3">
      <h1 className="text-4xl">Blogs : {books.length}</h1>
    </div>
  );
};

export default Blogs;