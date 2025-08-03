export default function DevAlert() {
  if (process.env.DEV_MODE !== "true") return null;
  return (
    <div className="w-full bg-yellow-100 text-yellow-800 px-6 py-4 border-b border-yellow-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="text-sm font-medium">
          🧪 <span className="font-bold">Debug Mode</span> is enabled
        </div>
        <div className="text-xs text-yellow-700">
          Environment: <code>{process.env.DEV_MODE}</code>
        </div>
      </div>
    </div>
  );
}
