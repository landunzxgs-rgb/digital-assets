export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/15 text-2xl font-bold text-cyan-300">
            ∞
          </div>

          <div>
            <div className="text-xl font-bold tracking-wide text-white">
              数字跃迁
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
              AI Productivity Hub
            </div>
          </div>
        </div>

        <nav className="hidden gap-10 text-sm text-slate-300 md:flex">
          <a href="/">首页</a>
          <a href="/tools">AI工具</a>
          <a href="/guides">实战教程</a>
          <a href="/resources">资源中心</a>
          <a href="/about">关于我们</a>
        </nav>

        <a
          href="#tools"
          className="rounded-xl bg-cyan-400 px-5 py-2.5 font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-300"
        >
          开始探索
        </a>
      </div>
    </header>
  );
} 