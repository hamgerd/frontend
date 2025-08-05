export default function DevAlert() {
  if (process.env.DEV_MODE !== "true") return null;
  return (
    <div className="w-full border-b border-yellow-300 bg-yellow-100 px-6 py-4 text-yellow-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
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
