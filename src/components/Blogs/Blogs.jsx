import { useEffect, useState } from "react";


const Blogs = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('blogs.json',)
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  return (
    

    <div>
      
    </div>
  );
};

export default Blogs;