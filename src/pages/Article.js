import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { fetchPostById, fetchPostBySlug } from "../blog/api";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const bySlug = await fetchPostBySlug(slug);
        if (bySlug) {
          setArticle(bySlug);
          setError(null);
          return;
        }
        const byId = await fetchPostById(slug);
        if (byId) {
          setArticle(byId);
          setError(null);
        } else {
          setArticle(null);
          setError("We couldn’t find that article. Please try again later.");
        }
      } catch (err) {
        setError("Unable to load that article right now.");
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

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
            <p>{error || "We couldn&apos;t find that article. Please try again later."}</p>
          </div>
        </div>
      </div>
    );
  }

  const { content, publishedAt, title, authorDisplayName } = article;
  const cleanedContent = DOMPurify.sanitize(content);
  const formattedDate =
    publishedAt && typeof publishedAt.toDate === "function"
      ? publishedAt.toDate().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "Preview";

  return (
    <div className="page-shell">
      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">The Blog</span>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">
            Written by {authorDisplayName} · {formattedDate}
          </p>
        </header>

        <section className="page-section">
          <div className="page-card">
            <div
              className="article-contents space-y-4 leading-relaxed text-neutral-700"
              dangerouslySetInnerHTML={{ __html: cleanedContent }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
