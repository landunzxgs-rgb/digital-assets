export default function FreeResources() {
  const includes = [
    "微信工作消息整理提示词",
    "今日待办与明日跟进模板",
    "下一步动作整理框架",
    "简明使用说明",
  ];

  return (
    <section
      id="free-resources"
      className="mx-auto max-w-[1440px] px-6 pb-20 pt-10 lg:px-10 xl:px-16"
    >
      <div className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-blue-500/[0.06] p-8 shadow-2xl shadow-cyan-950/10 md:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* 左侧 */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
              FREE RESOURCE
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              免费领取 AI 工作整理模板
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              把零散工作消息快速整理成今日待办、明日跟进和清晰的下一步动作。
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                立即领取
                <span>→</span>
              </a>

              <span className="flex items-center text-sm text-slate-400">
                无需复杂设置，复制即可使用
              </span>
            </div>
          </div>

          {/* 右侧 */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/30 p-6 backdrop-blur">
            <div className="mb-5">
              <p className="text-sm font-semibold text-cyan-300">
                资源包含
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                《老板微信 AI 工作整理模板》
              </h3>
            </div>

            <div className="space-y-3">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    ✓
                  </div>

                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-400">
              适合老板、销售、行政、项目负责人和每天通过微信处理大量工作的人。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}