export default function Home() {
  const faqs = [
    {
      q: "How does thumbnail A/B testing work?",
      a: "Connect your YouTube channel via the Analytics API. Upload multiple thumbnail variants for any video and we track real CTR, view duration, and engagement data to surface the winner automatically."
    },
    {
      q: "Do I need technical knowledge to use this?",
      a: "No. The setup wizard walks you through connecting your YouTube account in under two minutes. After that, uploading thumbnails and reading results is fully point-and-click."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your dashboard at any time with no questions asked. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          YouTube Creators
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track which thumbnails{" "}
          <span className="text-[#58a6ff]">actually</span> perform best
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload multiple thumbnail variants and let real YouTube Analytics data — CTR, view duration, engagement — pick the winner for you.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Testing Thumbnails — $11/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for free trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "📊", title: "Real CTR Data", desc: "Pulled directly from YouTube Analytics API" },
          { icon: "⏱", title: "View Duration", desc: "See which thumbnail attracts viewers who stay" },
          { icon: "🏆", title: "Auto Winner", desc: "System flags the best performer automatically" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-sm text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited thumbnail variants",
              "YouTube Analytics API integration",
              "CTR, duration & engagement tracking",
              "Automatic winner detection",
              "Email reports & alerts"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} ThumbnailTest. All rights reserved.
      </footer>
    </main>
  );
}
