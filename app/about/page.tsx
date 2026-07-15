import Header from "../../components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />

      <section className="mx-auto max-w-[1000px] px-6 py-32 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
          ABOUT EFFICIENCY
        </p>

        <h1 className="mt-6 text-5xl font-bold">
          关于效率派
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          效率派关注 AI 如何进入真实工作场景。
          我们记录实践案例、整理工作方法，并探索如何把 AI
          转化为长期可积累的生产力。
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left">
          <h2 className="text-xl font-semibold">
            我们关注的问题
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            很多人并不是不会使用 AI，
            而是不知道如何把 AI 融入每天真实的工作流程。
            效率派希望通过案例、工具和方法，
            帮助更多人找到适合自己的 AI 工作方式。
          </p>
        </div>
      </section>
    </main>
  );
}