/* eslint-disable @next/next/no-img-element */
export default function Loading() {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50`}
    >
      {/* Replace 'logo.png' with the path to your logo image */}
      <img src="/logo.png" alt="Logo" className="w-52 h-auto animate-bounce" />
    </div>
  );
}
