import Image from "next/image";

export default function Powered() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl m-8">Partners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-purple-200 rounded-xl flex flex-col p-10 items-center justify-end">
          <div className="mr-4">
            <Image src="/detectbox.png"  width={160} height={160} alt="Logo" />
          </div>
          <div>
            <h1 className="text-black text-2xl mt-8">Audit Partner</h1>
          </div>
        </div>
        <div className="bg-purple-200 rounded-xl flex flex-col p-10 items-center justify-end">
          <div className="mr-4">
            <Image src="/chainrisk.svg" width={160} height={160} alt="Logo" />
          </div>
          <div>
            <h1 className="text-black text-2xl mt-8">Risk Partner</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
