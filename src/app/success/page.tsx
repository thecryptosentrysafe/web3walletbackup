"use client";

import Link from "next/link";

export default function SuccessPage() {
  // Generate a random UID that stays stable per page load
  const uid = "wu" + Math.floor(100000000000 + Math.random() * 900000000000);

  return (
    <>
      <style>{`
        @keyframes zoomIcon {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .success-icon {
          animation: zoomIcon 1.5s ease-in-out infinite;
        }
        .btn-teal:hover {
          background-color: #0f4f64 !important;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
          background: "linear-gradient(135deg, #f6f0ff 0%, #ffffff 60%)",
          fontFamily: "Arial, sans-serif",
          color: "#333",
        }}
      >
        {/* Pulsing success icon */}
        <img
          src="/success.jpg"
          alt="Success Icon"
          className="success-icon"
          style={{ width: "100px", height: "100px", marginBottom: "1.5rem", borderRadius: "50%", objectFit: "cover" }}
        />

        {/* Title */}
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "#15647e",
          }}
        >
          Backup Was Successful
        </h1>

        {/* UID */}
        <strong style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1.5rem", display: "block" }}>
          UID: {uid}
        </strong>

        {/* Description */}
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
            color: "#666",
            lineHeight: 1.7,
          }}
        >
          Your wallet data has been successfully backed up! We&apos;ve securely stored your information, ensuring your assets remain protected. Feel free to continue managing your wallet or explore additional features.
        </p>

        {/* Button */}
        <Link href="/">
          <button
            className="btn-teal"
            style={{
              backgroundColor: "#15647e",
              border: "none",
              color: "#fff",
              fontWeight: 600,
              padding: "0.75rem 1.75rem",
              borderRadius: "30px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
          >
            Return To Home Page
          </button>
        </Link>
      </div>
    </>
  );
}
