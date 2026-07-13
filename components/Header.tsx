 "use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "首页", href: "/" },
    { label: "解决方案", href: "#solutions" },
    { label: "知识库", href: "/knowledge" },
    { label: "数字产品", href: "/products" },
    { label: "关于", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-[1520px] items-center justify-between px-5 lg:px-8 xl:px-10">
        {/* 品牌 */}
        <a href="/" className="flex shrink-0 items-center gap-4">
          <div className="flex h-13 w-13 items-center justify-center rounded-full bg-cyan-400/15 text-3xl font-bold text-cyan-300">
            ∞
          </div>

          <div>
            <div className="text-2xl font-bold tracking-wide text-white">
              效率派
            </div>

            <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">
              AI Productivity Hub
            </div>
          </div>
        </a>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-14 text-base font-medium text-slate-300 lg:flex xl:gap-16">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 桌面按钮 */}
        <a
          href="#free-resources"
          className="hidden rounded-xl bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 lg:inline-flex"
        >
          免费资源
        </a>

        {/* 移动端菜单按钮 */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="打开导航菜单"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="border-t border-white/5 bg-[#050816]/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-lg text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#free-resources"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-xl bg-cyan-400 px-4 py-3 text-center text-lg font-semibold text-slate-950"
            >
              免费资源
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}