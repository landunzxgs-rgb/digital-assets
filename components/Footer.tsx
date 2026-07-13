 export default function Footer() {
  const links = [
    { label: "解决方案", href: "#solutions" },
    { label: "知识库", href: "/knowledge" },
    { label: "数字产品", href: "/products" },
    { label: "关于", href: "/about" },
  ];

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10 xl:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* 品牌 */}
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-2xl font-bold text-cyan-300">
                ∞
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  效率派
                </h3>

                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  AI Productivity Hub
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-lg leading-7 text-slate-400">
              分享真实案例、实用方法和数字产品，
              帮助普通人和企业把 AI 用到真实工作中。
            </p>
          </div>

          {/* 导航 */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-slate-400">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="my-10 h-px w-full bg-white/5" />

        <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>把 AI 用到真实工作中</span>
          <span>© 2026 效率派</span>
        </div>
      </div>
    </footer>
  );
}