import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/umd-fonts.css";
import fredHalfPic from "../Pictures/fredHalfTeam.JPG";

export default function BlogFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://marylandclubrunningblogapi.vercel.app/get_feed"
        );
        setPosts(response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={fredHalfPic}
          alt="Maryland Club Running celebrating after a race"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Stories</span>
          <h1 className="page-title">The Blog</h1>
          <p className="page-subtitle">
            Race recaps, training diaries, and community spotlights written by
            Terps for Terps.
          </p>
        </header>

        {loading ? (
          <section className="page-section">
            <div className="page-card">
              <p>Loading the latest posts...</p>
            </div>
          </section>
        ) : posts.length === 0 ? (
          <section className="page-section">
            <div className="page-card">
              <p>No posts yet. Check back soon!</p>
            </div>
          </section>
        ) : (
          <section className="page-section page-grid two">
            {posts.map((post) => {
              const preview =
                post.preview ||
                post.summary ||
                "Tap through to read the latest update from the team.";
              return (
                <article key={post.post_id} className="page-card">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span>{post.date}</span>
                      <span>{post.writer_id}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-800">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 leading-relaxed">{preview}</p>
                    <div className="mt-auto">
                      <Link
                        to={`/article/${post.post_id}`}
                        className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#f6a622] via-[#ff8fab] to-[#6a5cf6] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </div>
    </div>
  );
}
