"use client";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="card bg-base-300 shadow-md">
        <div className="card-body">
          <div className="flex items-center flex-col">
            <h1 className="text-5xl font-bold">404</h1>
            <h4 className="text-md mt-2 text-gray-500">
              Halaman yang Anda cari tidak ditemukan.
            </h4>
            <button
              onClick={(event) => {
                event.preventDefault();
                router.push("/dashboard/overview");
              }}
              className="mt-4 btn btn-primary btn-md"
            >
              Kembali ke Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
