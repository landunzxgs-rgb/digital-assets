 export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景光效 */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[130px]" />

      <div className="relative mx-auto flex min-h-[450px] max-w-[1440px] items-center justify-center px-6 py-14 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-2 text-sm font-medium text-cyan-300">
            AI实践 · 工作方法 · 数字产品
          </div>

         <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
             把 AI 用到真实工作中
        </h1>

        <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-slate-300 md:text-lg">
           效率派分享真实案例、实用方法和数字产品，
           帮助普通人和企业把 AI 转化为持续提升效率的方法。
        </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              查看解决方案
              <span>→</span>
            </a>

             
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-sm text-slate-400">
            <span>解决真实问题</span>
            <span className="text-cyan-400/50">·</span>
            <span>提升工作效率</span>
            <span className="text-cyan-400/50">·</span>
            <span>沉淀数字资产</span>
          </div>
        </div>
      </div>
    </section>
  );
}