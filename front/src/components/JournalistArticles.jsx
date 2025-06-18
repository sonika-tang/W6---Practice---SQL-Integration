import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function JournalistArticles() {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`/api/journalists/${id}/articles`)
      .then(res => res.json())
      .then(setArticles);
  }, [id]);

  return (
    <div>
      <h2>Articles by Journalist</h2>
      <ul>
        {articles.map(a => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
}
