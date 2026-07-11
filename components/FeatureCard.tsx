type FeatureCardProps = {
  title: string;
  desc: string;
};

export default function FeatureCard({ title, desc }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-white/[0.07]">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{desc}</p>
    </div>
  );
}