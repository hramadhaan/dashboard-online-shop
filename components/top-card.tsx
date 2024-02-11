"use client";

interface TopCardTypes {}

const TopCardComponent: React.FC<TopCardTypes> = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-base-200 flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-neutral-800">Hanif</p>
          <p className="text-neutral-500">Ramadhan</p>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-base-200 flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-neutral-800">Hanif</p>
          <p className="text-neutral-500">Ramadhan</p>
        </div>
      </div>
      <div className="bg-base-200 justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-neutral-800">Hanif</p>
          <p className="text-neutral-500">Ramadhan</p>
        </div>
      </div>
    </div>
  );
};

export default TopCardComponent;
