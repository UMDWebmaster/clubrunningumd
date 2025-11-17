import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { fetchPostsForProfile, fetchProfileBySlug } from "../blog/api";

export default function ProfilePage() {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      try {
        const [profileData, postData] = await Promise.all([
          fetchProfileBySlug(slug),
          fetchPostsForProfile(slug),
        ]);
        if (!profileData) {
          setError("That profile hasn’t been published yet.");
          setProfile(null);
          setPosts([]);
          return;
        }
        setProfile(profileData);
        setPosts(postData);
        setError(null);
      } catch (err) {
        setError("We couldn’t load that profile right now.");
        setProfile(null);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [slug]);

  const sanitizedBio = useMemo(() => {
    if (!profile?.bio) return null;
    return { __html: DOMPurify.sanitize(profile.bio) };
  }, [profile?.bio]);

  const formatDate = (timestamp) => {
    if (!timestamp || typeof timestamp.toDate !== "function") return "";
    return timestamp.toDate().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="page-shell">
        <div className="content-container">
          <div className="page-card">
            <p>Loading profile…</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="page-shell">
        <div className="content-container">
          <div className="page-card">
            <p>{error || "Profile unavailable."}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <div className="content-container space-y-10">
        <header className="page-header">
          <span className="page-eyebrow">Runner Profile</span>
          <h1 className="page-title">{profile.displayName}</h1>
          <p className="page-subtitle">
            {profile.team ? `${profile.team} · ` : ""}
            {profile.gradYear ? `Class of ${profile.gradYear}` : ""}
          </p>
        </header>

        <section className="page-section page-grid two gap-6">
          <div className="page-card space-y-4">
            {profile.photoUrl && (
              <img
                src={profile.photoUrl}
                alt={profile.displayName}
                className="w-full rounded-2xl object-cover"
              />
            )}
            <div>
              <p className="font-semibold uppercase tracking-[0.4em] text-neutral-500">
                Bio
              </p>
              {sanitizedBio ? (
                <div
                  className="prose prose-invert mt-3 space-y-4"
                  dangerouslySetInnerHTML={sanitizedBio}
                />
              ) : (
                <p>This runner hasn’t added a bio yet.</p>
              )}
            </div>
            {profile.favoriteRaces && profile.favoriteRaces.length > 0 && (
              <div>
                <p className="font-semibold uppercase tracking-[0.4em] text-neutral-500">
                  Favorite Races
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {profile.favoriteRaces.map((race) => (
                    <li
                      key={race}
                      className="rounded-full border border-[rgba(255,255,255,0.2)] px-3 py-1 text-sm"
                    >
                      {race}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {profile.socials && (
              <div className="flex flex-wrap gap-3">
                {Object.entries(profile.socials).map(([network, url]) =>
                  url ? (
                    <a
                      key={network}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      {network}
                    </a>
                  ) : null
                )}
              </div>
            )}
          </div>

          <div className="page-card space-y-6">
            <h2 className="text-2xl font-semibold text-neutral-50">
              Latest Posts
            </h2>
            {posts.length === 0 ? (
              <p className="text-neutral-400">
                No posts yet, but check back soon!
              </p>
            ) : (
              <ul className="space-y-4">
                {posts.map((post) => (
                  <li key={post.id} className="rounded-2xl bg-[rgba(0,0,0,0.25)] p-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                      {formatDate(post.publishedAt)}
                    </p>
                    <Link
                      to={`/article/${post.slug}`}
                      className="text-xl font-semibold text-white"
                    >
                      {post.title}
                    </Link>
                    <p className="text-neutral-400">{post.excerpt}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
