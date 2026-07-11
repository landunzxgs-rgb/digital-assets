export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-10 md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">
            持续更新，陪你一起跃迁
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            我们会持续整理真实可用的 AI 工具、自动化方案和数字产品实践。
          </p>
        </div>

        <a
          href="#tools"
          className="mt-8 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 md:mt-0"
        >
          开始探索 →
        </a>
      </div>
    </section>
  );
}