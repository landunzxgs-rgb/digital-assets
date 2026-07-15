import Header from "../../components/Header";

export default function DigitalProductsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />

      <section className="mx-auto max-w-[1000px] px-6 py-32 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
          DIGITAL PRODUCTS
        </p>

        <h1 className="mt-6 text-5xl font-bold">
          AI 数字产品
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          效率派正在整理真实工作场景中的 AI 模板、工作流程和数字产品，
          帮助更多人把经验转化为可以长期使用的生产力工具。
        </p>

        <div className="mx-auto mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left">
          <h2 className="text-xl font-semibold">
            即将上线
          </h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• AI 工作整理模板</li>
            <li>• AI 办公效率工具</li>
            <li>• 实用工作流程包</li>
            <li>• 可复用数字资产</li>
          </ul>
        </div>
      </section>
    </main>
  );
}