import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { createSlug } from "../blog/types";
import { fetchAllPosts, savePost, saveProfile } from "../blog/api";

const emptyDraft = {
  id: undefined,
  title: "",
  slug: "",
  excerpt: "",
  coverImage: "",
  tags: "",
  status: "draft",
  profileSlug: "",
  content: "",
};

const emptyProfile = {
  slug: "",
  displayName: "",
  team: "",
  gradYear: "",
  role: "",
  bio: "",
  photoUrl: "",
  favoriteRaces: "",
  instagram: "",
  strava: "",
  twitter: "",
};

export default function Blog() {
  const { user, loading, error, signIn, signOut } = useFirebaseAuth();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [draft, setDraft] = useState(emptyDraft);
  const [saving, setSaving] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [posts, setPosts] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [profileDraft, setProfileDraft] = useState(emptyProfile);
  const [profileStatus, setProfileStatus] = useState("");
  const [savingProfile, setSavingProfile] = useState(false);

  useEffect(() => {
    if (!user) {
      setPosts([]);
      return;
    }

    const loadPosts = async () => {
      const data = await fetchAllPosts();
      setPosts(data);
    };

    loadPosts();
  }, [user]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setStatusMessage("Signing in…");
    try {
      await signIn(loginEmail.trim(), loginPassword);
      setStatusMessage("");
    } catch (err) {
      setStatusMessage("We couldn’t sign you in. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDraft((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "title" && !slugTouched) {
        next.slug = createSlug(value);
      }
      return next;
    });
    if (name === "slug") {
      setSlugTouched(true);
    }
  };

  const handleContentChange = (value) => {
    setDraft((prev) => ({ ...prev, content: value }));
  };

  const resetDraft = () => {
    setDraft(emptyDraft);
    setSlugTouched(false);
  };

  const startEditing = (post) => {
    setDraft({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      coverImage: post.coverImage || "",
      tags: post.tags.join(", "),
      status: post.status,
      profileSlug: post.profileSlug || "",
      content: post.content,
      createdAt: post.createdAt,
      publishedAt: post.publishedAt,
    });
    setSlugTouched(true);
  };

  const handleSave = async () => {
    if (!draft.title || !draft.content) {
      setStatusMessage("Title and content are required.");
      return;
    }
    setSaving(true);
    setStatusMessage("Saving post…");
    try {
      const tags = draft.tags
        ? draft.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];
      await savePost({
        draft: {
          id: draft.id,
          title: draft.title,
          slug: draft.slug,
          excerpt: draft.excerpt,
          coverImage: draft.coverImage,
          tags,
          status: draft.status,
          content: draft.content,
          profileSlug: draft.profileSlug || undefined,
          createdAt: draft.createdAt,
          publishedAt: draft.publishedAt,
        },
        profileSlug: draft.profileSlug || undefined,
      });
      setStatusMessage("Post saved.");
      const data = await fetchAllPosts();
      setPosts(data);
      resetDraft();
    } catch (err) {
      setStatusMessage("Unable to save post. Check the console for details.");
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const previewContent = useMemo(
    () => ({ __html: DOMPurify.sanitize(draft.content || "") }),
    [draft.content]
  );

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfileDraft((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "displayName" && !prev.slug) {
        next.slug = createSlug(value);
      }
      return next;
    });
  };

  const handleProfileSave = async () => {
    if (!user) {
      setProfileStatus("You need to sign in first.");
      return;
    }
    if (!profileDraft.displayName) {
      setProfileStatus("A display name is required.");
      return;
    }
    setProfileStatus("Saving profile…");
    setSavingProfile(true);
    try {
      const favoriteRaces = profileDraft.favoriteRaces
        ? profileDraft.favoriteRaces
            .split(",")
            .map((race) => race.trim())
            .filter(Boolean)
        : [];
      await saveProfile({
        id: "",
        uid: user.uid,
        slug: profileDraft.slug || createSlug(profileDraft.displayName),
        displayName: profileDraft.displayName,
        team: profileDraft.team || undefined,
        gradYear: profileDraft.gradYear || undefined,
        role: profileDraft.role || undefined,
        bio: profileDraft.bio || undefined,
        photoUrl: profileDraft.photoUrl || undefined,
        socials: {
          instagram: profileDraft.instagram || undefined,
          strava: profileDraft.strava || undefined,
          twitter: profileDraft.twitter || undefined,
        },
        favoriteRaces,
        createdAt: null,
        updatedAt: null,
      });
      setProfileStatus("Profile saved.");
    } catch (err) {
      setProfileStatus("Unable to save profile.");
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setSavingProfile(false);
    }
  };

  return (
    <div className="page-shell">
      <div className="content-container space-y-10">
        <header className="page-header">
          <span className="page-eyebrow">Blog Studio</span>
          <h1 className="page-title">Publish Stories In-House</h1>
          <p className="page-subtitle">
            Create posts, attach them to athlete profiles, and publish directly
            from our Firebase-backed studio. Only authenticated editors can make
            updates.
          </p>
        </header>

        {!user && (
          <section className="page-section">
            <div className="page-card max-w-xl">
              <h2 className="text-xl font-semibold text-neutral-800">
                Editor Sign In
              </h2>
              <form className="mt-6 space-y-4" onSubmit={handleLogin}>
                <div>
                  <label className="form-label" htmlFor="loginEmail">
                    Email
                  </label>
                  <input
                    id="loginEmail"
                    name="loginEmail"
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(event) => setLoginEmail(event.target.value)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                  <input
                    id="loginPassword"
                    name="loginPassword"
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(event) => setLoginPassword(event.target.value)}
                    className="form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? "Signing in…" : "Sign In"}
                </button>
              </form>
              {(statusMessage || error) && (
                <p className="mt-4 text-sm text-neutral-600">
                  {statusMessage || error}
                </p>
              )}
            </div>
          </section>
        )}

        {user && (
          <>
            <section className="page-section">
              <div className="page-card space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                      Signed in as
                    </p>
                    <p className="text-lg font-semibold text-neutral-800">
                      {user.displayName || user.email}
                    </p>
                  </div>
                  <button type="button" className="btn-secondary" onClick={signOut}>
                    Sign Out
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="form-label" htmlFor="title">
                      Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      className="form-input"
                      value={draft.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="slug">
                      Slug
                    </label>
                    <input
                      id="slug"
                      name="slug"
                      className="form-input"
                      value={draft.slug}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profileSlug">
                      Profile Slug
                    </label>
                    <input
                      id="profileSlug"
                      name="profileSlug"
                      className="form-input"
                      placeholder="Optional. Links a post to /profiles/[slug]"
                      value={draft.profileSlug}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="coverImage">
                      Cover Image URL
                    </label>
                    <input
                      id="coverImage"
                      name="coverImage"
                      className="form-input"
                      value={draft.coverImage}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="excerpt">
                    Excerpt
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={3}
                    className="form-input"
                    value={draft.excerpt}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="form-label" htmlFor="tags">
                      Tags
                    </label>
                    <input
                      id="tags"
                      name="tags"
                      placeholder="Comma separated"
                      className="form-input"
                      value={draft.tags}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="status">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="form-input"
                      value={draft.status}
                      onChange={handleInputChange}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Body</label>
                  <ReactQuill value={draft.content} onChange={handleContentChange} />
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {saving ? "Saving…" : "Save Post"}
                  </button>
                  <button type="button" className="btn-secondary" onClick={resetDraft}>
                    Reset
                  </button>
                </div>
                {statusMessage && (
                  <p className="text-sm text-neutral-600">{statusMessage}</p>
                )}
              </div>
            </section>

            <section className="page-section">
              <div className="page-card space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                      Athlete Profiles
                    </p>
                    <h2 className="text-2xl font-semibold text-white">
                      Build profile pages
                    </h2>
                  </div>
                  <Link
                    className="btn-secondary"
                    to={`/profiles/${profileDraft.slug || "example-runner"}`}
                  >
                    Preview URL
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="form-label" htmlFor="profileDisplayName">
                      Display Name
                    </label>
                    <input
                      id="profileDisplayName"
                      name="displayName"
                      className="form-input"
                      value={profileDraft.displayName}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profileSlugField">
                      Profile Slug
                    </label>
                    <input
                      id="profileSlugField"
                      name="slug"
                      className="form-input"
                      value={profileDraft.slug}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profileTeam">
                      Team
                    </label>
                    <input
                      id="profileTeam"
                      name="team"
                      className="form-input"
                      value={profileDraft.team}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profileGrad">
                      Grad Year
                    </label>
                    <input
                      id="profileGrad"
                      name="gradYear"
                      className="form-input"
                      value={profileDraft.gradYear}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profileRole">
                      Role
                    </label>
                    <input
                      id="profileRole"
                      name="role"
                      className="form-input"
                      value={profileDraft.role}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profilePhoto">
                      Photo URL
                    </label>
                    <input
                      id="profilePhoto"
                      name="photoUrl"
                      className="form-input"
                      value={profileDraft.photoUrl}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="profileBio">
                    Bio (supports simple HTML)
                  </label>
                  <textarea
                    id="profileBio"
                    name="bio"
                    rows={4}
                    className="form-input"
                    value={profileDraft.bio}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="form-label" htmlFor="profileRaces">
                      Favorite Races
                    </label>
                    <input
                      id="profileRaces"
                      name="favoriteRaces"
                      placeholder="Comma separated"
                      className="form-input"
                      value={profileDraft.favoriteRaces}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profileInstagram">
                      Instagram URL
                    </label>
                    <input
                      id="profileInstagram"
                      name="instagram"
                      className="form-input"
                      value={profileDraft.instagram}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profileStrava">
                      Strava URL
                    </label>
                    <input
                      id="profileStrava"
                      name="strava"
                      className="form-input"
                      value={profileDraft.strava}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="profileTwitter">
                      Twitter/X URL
                    </label>
                    <input
                      id="profileTwitter"
                      name="twitter"
                      className="form-input"
                      value={profileDraft.twitter}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleProfileSave}
                    disabled={savingProfile}
                  >
                    {savingProfile ? "Saving…" : "Save Profile"}
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setProfileDraft(emptyProfile)}
                  >
                    Reset Profile Form
                  </button>
                </div>
                {profileStatus && (
                  <p className="text-sm text-neutral-400">{profileStatus}</p>
                )}
              </div>
            </section>

            <section className="page-section">
              <div className="page-grid two gap-6">
                <div className="page-card space-y-4">
                  <h2 className="text-lg font-semibold text-neutral-800">
                    Live Preview
                  </h2>
                  <article className="prose max-w-none">
                    <h3>{draft.title || "Post Title"}</h3>
                    <div
                      className="article-contents"
                      dangerouslySetInnerHTML={previewContent}
                    />
                  </article>
                </div>

                <div className="page-card space-y-4">
                  <h2 className="text-lg font-semibold text-neutral-800">
                    Recent Posts
                  </h2>
                  {posts.length === 0 ? (
                    <p className="text-sm text-neutral-500">
                      Drafts that you save will show up here.
                    </p>
                  ) : (
                    <ul className="divide-y divide-neutral-200">
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="flex flex-col gap-1 py-3 md:flex-row md:items-center md:justify-between"
                        >
                          <div>
                            <p className="font-semibold text-neutral-800">
                              {post.title}
                            </p>
                            <p className="text-sm text-neutral-500">
                              {post.status.toUpperCase()}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="btn-secondary"
                            onClick={() => startEditing(post)}
                          >
                            Edit
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
