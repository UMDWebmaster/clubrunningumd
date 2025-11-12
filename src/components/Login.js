import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const verify = async (event) => {
    event.preventDefault();
    setStatusMessage("Signing in…");

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await axios.post(
        "https://marylandclubrunningblogapi.vercel.app/login",
        formData
      );
      setStatusMessage(response.data?.message || "Logged in successfully.");
    } catch (error) {
      setStatusMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="page-card max-w-md text-left">
      <form className="space-y-4" onSubmit={verify}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="mt-2 w-full rounded-lg border border-[rgba(29,27,41,0.12)] bg-white px-3 py-2 text-neutral-800 shadow-sm focus:border-[#d62828] focus:outline-none focus:ring-2 focus:ring-[#f6a622]/40"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-lg border border-[rgba(29,27,41,0.12)] bg-white px-3 py-2 text-neutral-800 shadow-sm focus:border-[#d62828] focus:outline-none focus:ring-2 focus:ring-[#f6a622]/40"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-gradient-to-r from-[#f6a622] via-[#ff8fab] to-[#6a5cf6] px-4 py-2 font-semibold text-white shadow-lg transition hover:shadow-xl"
        >
          Login
        </button>
      </form>
      {statusMessage && (
        <p className="mt-4 text-sm text-neutral-600">{statusMessage}</p>
      )}
    </div>
  );
}
