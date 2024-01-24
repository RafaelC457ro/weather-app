export function ErrorMessage({ refetch }: { refetch: () => void }) {
  return (
    <div className="flex h-full items-center justify-center">
      <span className="block px-4 py-2 text-sm text-red-500">An error occurred</span>
      <button onClick={() => refetch()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Retry
      </button>
    </div>
  );
}
