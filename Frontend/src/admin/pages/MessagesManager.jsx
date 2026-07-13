import React, { useEffect, useMemo, useState } from "react";
import { getMessages } from "../../api/messageApi.js";
import EmptyState from "../components/EmptyState.jsx";
import Feedback from "../components/Feedback.jsx";
import { formatDate, getErrorMessage, getId } from "../utils.js";

function MessagesManager() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMessages = async () => {
      try {
        setLoading(true);
        setError("");
        const { data } = await getMessages();
        setMessages(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(getErrorMessage(err, "Could not load messages"));
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  const sortedMessages = useMemo(
    () =>
      [...messages].sort(
        (a, b) => new Date(b.created_at || b.createdAt || 0) - new Date(a.created_at || a.createdAt || 0)
      ),
    [messages]
  );

  return (
    <section className="grid gap-6">
      <div>
        <p className="admin-kicker">Messages</p>
        <h1 className="text-3xl font-black text-[#24211f] sm:text-5xl">Inbox</h1>
      </div>

      <Feedback error={error} />

      {loading ? (
        <div className="admin-card p-6 text-[#70665c]">Loading messages...</div>
      ) : sortedMessages.length === 0 ? (
        <EmptyState
          title="No messages yet"
          description="New contact form submissions will appear here."
        />
      ) : (
        <div className="grid gap-4">
          {sortedMessages.map((message) => (
            <article className="admin-card grid gap-4 p-5 sm:p-6" key={getId(message)}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-black text-[#24211f]">{message.name || "Unknown sender"}</h2>
                  <a className="break-all text-sm font-bold text-[#70665c]" href={`mailto:${message.email}`}>
                    {message.email}
                  </a>
                </div>
                <time className="text-sm font-bold text-[#70665c]">
                  {formatDate(message.created_at || message.createdAt)}
                </time>
              </div>
              <p className="break-words leading-7 text-[#62543f]">{message.message}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default MessagesManager;
