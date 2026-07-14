"use client";

import { useMemo, useState } from "react";

const categories = [
  "全部内容",
  "AI 工作秘书",
  "AI 办公",
  "内容生产",
  "AI 自动化",
  "数字产品",
  "效率系统",
];

const articles = [
  {
  category: "AI 工作秘书",
  title: "微信工作消息太多，我是怎么用 AI 把遗漏变成待办的",
  desc: "从靠记忆和纸笔，到用 AI 持续整理客户事项、时间节点、收付款和未完成任务。",
  href: "/knowledge/article1",
},
  {
    category: "AI 办公",
    title: "如何用 AI 整理企业申报资料？",
    desc: "从资料分类、缺失检查到任务清单，让复杂资料整理更清楚。",
    href: "#",
  },
  {
    category: "内容生产",
    title: "一条视频，如何适配多个内容平台？",
    desc: "同一个核心内容，分别适配抖音、小红书、视频号和深度文章。",
    href: "#",
  },
  {
    category: "AI 自动化",
    title: "哪些重复工作值得优先自动化？",
    desc: "优先处理高频、规则明确、容易出错的工作，提高投入产出比。",
    href: "#",
  },
  {
    category: "数字产品",
    title: "如何把工作经验做成可销售的数字产品？",
    desc: "把模板、提示词、方法和案例沉淀成可以重复交付的产品。",
    href: "#",
  },
  {
    category: "效率系统",
    title: "为什么学了很多 AI 工具，工作还是没有变轻松？",
    desc: "真正的问题往往不是工具不够，而是没有建立稳定的工作流程。",
    href: "#",
  },
];

export default function KnowledgeContent() {
  const [activeCategory, setActiveCategory] = useState("全部内容");
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredArticles = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "全部内容" ||
        article.category === activeCategory;

      const matchesSearch =
        keyword === "" ||
        article.title.toLowerCase().includes(keyword) ||
        article.desc.toLowerCase().includes(keyword) ||
        article.category.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchKeyword]);

  return (
    <>
      {/* 搜索框 */}
      <div className="mt-12 max-w-3xl">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition focus-within:border-cyan-400/40">
          <span className="text-slate-500">⌕</span>

          <input
            type="search"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
            placeholder="搜索文章、案例或关键词"
            className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />

          {searchKeyword && (
            <button
              type="button"
              onClick={() => setSearchKeyword("")}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              清除
            </button>
          )}
        </div>
      </div>

      {/* 分类 */}
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-cyan-400 bg-cyan-400 text-slate-950"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/30 hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* 文章区域 */}
      <div className="mt-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            {activeCategory === "全部内容"
              ? "全部文章"
              : activeCategory}
          </h2>

          <p className="mt-2 text-slate-400">
            当前展示 {filteredArticles.length} 篇内容
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article) => (
              <a
                key={article.title}
                href={article.href}
                className="group flex min-h-[280px] flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/35 hover:bg-cyan-400/[0.04]"
              >
                <div>
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                    {article.category}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-9 text-white">
                  {article.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-400">
                  {article.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  阅读全文
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-8 py-16 text-center">
            <h3 className="text-xl font-bold text-white">
              没有找到相关内容
            </h3>

            <p className="mt-3 text-slate-400">
              换一个关键词，或者选择其他分类。
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchKeyword("");
                setActiveCategory("全部内容");
              }}
              className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              查看全部内容
            </button>
          </div>
        )}
      </div>
    </>
  );
}