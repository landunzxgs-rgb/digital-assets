export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-2xl text-cyan-300">
            ∞
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">
              数字跃迁
            </h3>
            <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
              AI Productivity Hub
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-2xl leading-7 text-slate-400">
          帮助普通人，把 AI 转化为长期生产力，
          持续积累属于自己的数字资产。
        </p>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/5" />

        {/* Bottom */}
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>Build Once · Benefit Long</span>
          <span>© 2026 Project ONE</span>
        </div>

      </div>
    </footer>
  );
} 