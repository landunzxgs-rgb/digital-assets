 export default function Hero() {
  const workflow = [
    { icon: "💬", title: "工作消息", text: "零散信息不断进入" },
    { icon: "✦", title: "AI 整理", text: "识别重点与截止时间" },
    { icon: "✓", title: "今日待办", text: "生成清晰行动清单" },
    { icon: "↗", title: "高效完成", text: "减少遗漏和重复劳动" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* 背景光效 */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 xl:px-16">
        {/* 左侧文案 */}
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            真实案例 · 实用工具 · 数字产品
          </div>

          <h1 className="text-5xl font-bold leading-[1.12] tracking-tight text-white md:text-6xl xl:text-7xl">
            把 AI 真正变成
            <span className="mt-2 block text-cyan-300">
              你的生产力
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            帮助普通人和企业，把 AI 真正用到每天的工作中，
            减少重复劳动，解决实际问题。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#free-resources"
              className="rounded-xl bg-cyan-400 px-7 py-3.5 text-center font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              免费开始
            </a>

            <a
              href="#solutions"
              className="rounded-xl border border-white/20 bg-white/[0.03] px-7 py-3.5 text-center font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              浏览解决方案
            </a>
          </div>
        </div>

        {/* 右侧：Infinity + AI工作流 */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-300">
                  AI 工作流
                </p>
                <h2 className="mt-1 text-xl font-semibold text-white">
                  从混乱信息到清晰行动
                </h2>
              </div>

              <div className="text-6xl leading-none text-cyan-300 drop-shadow-[0_0_24px_rgba(34,211,238,0.75)]">
                ∞
              </div>
            </div>

            <div className="space-y-3">
              {workflow.map((item, index) => (
                <div key={item.title}>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.text}
                      </p>
                    </div>

                    <div className="ml-auto h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                  </div>

                  {index < workflow.length - 1 && (
                    <div className="ml-[37px] h-3 w-px bg-gradient-to-b from-cyan-400/70 to-cyan-400/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center text-xs text-slate-500 md:flex">
        <span>继续探索</span>
        <span className="mt-1 animate-bounce text-cyan-300">↓</span>
      </div>
    </section>
  );
}