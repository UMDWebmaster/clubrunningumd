import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const formData = new FormData();
      formData.append("post_id", id);

      try {
        const response = await axios.post(
          "https://marylandclubrunningblogapi.vercel.app/get_article",
          formData
        );
        setArticle(response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="page-shell">
        <div className="content-container">
          <div className="page-card">
            <p>Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="page-shell">
        <div className="content-container">
          <div className="page-card">
            <p>We couldn&apos;t find that article. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  const { clicks, contents, date, title, writer_id } = article;
  const cleanedContent = DOMPurify.sanitize(contents);

  return (
    <div className="page-shell">
      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">The Blog</span>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">
            Written by {writer_id} · {date}
          </p>
        </header>

        <section className="page-section">
          <div className="page-card">
            <div
              className="article-contents space-y-4 leading-relaxed text-neutral-700"
              dangerouslySetInnerHTML={{ __html: cleanedContent }}
            />
            <p className="mt-8 text-sm text-neutral-500">Views: {clicks}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
