 export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-2">
      {/* 左侧 */}
      <div>
        <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          AI × Productivity × Digital Assets
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          把 AI 转化为
          <span className="block text-cyan-300">
            长期生产力
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          帮助普通人，把 AI 转化为长期生产力，
          持续积累属于自己的数字资产。
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#tools"
            className="rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            开始探索 →
          </a>

          <a
            href="#about"
            className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            了解更多
          </a>
        </div>
      </div>

      {/* 右侧 */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"></div>

        <div className="absolute h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="relative text-[320px] leading-none text-cyan-300 drop-shadow-[0_0_50px_rgba(34,211,238,0.75)]">
          ∞
        </div>
      </div>
    </section>
  );
}