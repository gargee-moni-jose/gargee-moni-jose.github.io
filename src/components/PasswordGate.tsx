import { useState, type FormEvent, type ReactNode } from "react";
import "./PasswordGate.css";

const STORAGE_KEY = "portfolio:hubbo-pos:access";
const PASSWORD_HASH =
  "625868f56c4fbc4c545dc428dbceaa8ecef0f217e2e2b9831058f5f0af1dd28a";

function hasSessionAccess() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === PASSWORD_HASH;
  } catch {
    return false;
  }
}

async function hashPassword(value: string) {
  const encoded = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10" />
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M12 14.5v2.5" />
    </svg>
  );
}

export function PasswordGate({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(hasSessionAccess);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  if (isUnlocked) {
    return children;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsChecking(true);

    try {
      const enteredHash = await hashPassword(password);

      if (enteredHash === PASSWORD_HASH) {
        window.sessionStorage.setItem(STORAGE_KEY, PASSWORD_HASH);
        setIsUnlocked(true);
        return;
      }

      setError("That password isn’t correct. Please try again.");
    } catch {
      setError("The password could not be checked. Please try again.");
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <section className="password-gate" aria-labelledby="password-gate-title">
      <div className="password-gate-card">
        <span className="password-gate-icon">
          <LockIcon />
        </span>
        <p className="password-gate-eyebrow">Protected case study</p>
        <h1 id="password-gate-title">Enter the password to view HUBBO POS</h1>
        <p className="password-gate-copy">
          This project contains selected client work. Enter the shared password
          to continue.
        </p>

        <form className="password-gate-form" onSubmit={handleSubmit}>
          <label htmlFor="hubbo-password">Password</label>
          <div className="password-gate-controls">
            <input
              id="hubbo-password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError("");
              }}
              aria-describedby={error ? "hubbo-password-error" : undefined}
              aria-invalid={Boolean(error)}
              autoComplete="current-password"
              autoFocus
              required
            />
            <button type="submit" disabled={isChecking}>
              {isChecking ? "Checking…" : "View project"}
            </button>
          </div>
          <p
            id="hubbo-password-error"
            className="password-gate-error"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        </form>

        <a className="password-gate-back" href="#/projects">
          <span aria-hidden="true">←</span> Back to all projects
        </a>
      </div>
    </section>
  );
}
