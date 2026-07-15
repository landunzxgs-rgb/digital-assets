 type FeatureCardProps = {
  title: string;
  desc: string;
};

export default function FeatureCard({ title, desc }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-cyan-400/40 hover:bg-white/[0.06]">
      <h2 className="text-lg font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        {desc}
      </p>
    </div>
  );
}