import type { Metadata } from "next";
import Header from "../../components/Header";
import KnowledgeContent from "../../components/KnowledgeContent";

export const metadata: Metadata = {
  title: "知识库",
  description:
    "效率派知识库，沉淀真实案例、实用方法和可执行的 AI 工作经验。",
};

export default function KnowledgePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />

      <section className="mx-auto max-w-[1440px] px-6 pb-24 pt-16 lg:px-10 xl:px-16">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            KNOWLEDGE BASE
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
            效率派知识库
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
            这里沉淀真实案例、实用方法和可执行的 AI 工作经验。
            不追求数量，只保留真正值得长期阅读的内容。
          </p>
        </div>

        <KnowledgeContent />
      </section>
    </main>
  );
} 