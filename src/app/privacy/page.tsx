export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Asset Guard Shield is a project created for testing and educational purposes.
          We respect your privacy and are committed to protecting any information you provide.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-2">
            We may collect the following information through our form:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Message content</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-2">
            The information submitted is used solely to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Respond to inquiries</li>
            <li>Test functionality of the form</li>
          </ul>
          <p className="text-gray-700 mt-2">
            We do not sell, share, or use your information for marketing purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Data Storage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Data submitted to Asset Guard Shield is not stored. Even if stored, it is not shared with third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Cookies
          </h2>
          <p className="text-gray-700">
            Asset Guard Shield does not intentionally use cookies for tracking purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Asset Guard Shield may be hosted on platforms such as Vercel, which may collect
            basic technical data (e.g., logs, IP address) for performance and security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We take reasonable steps to protect your information, but no method of
            transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Rights
          </h2>
          <p className="text-gray-700">
            You may choose not to submit any personal information through this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Changes will be posted on this page.
          </p>
        </section>
      </div>
    </main>
  );
}
