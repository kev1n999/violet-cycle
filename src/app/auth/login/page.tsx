import { Particles } from "@/src/components/ui/particles";

export default function AccessKeyForm() {
  return (
    <Particles className="relative min-h-screen bg-violet-200">
      <div className="flex justify-center items-center min-h-screen">
        <form className="flex justify-center flex-col bg-violet-100 rounded-2xl p-6 md:p-12 border-solid border-2 border-violet-300">
          <div className="text-2xl">
            <h1 className="text-violet-400 font-extrabold">Access Dashboard</h1>
          </div>
          <label className="p-1">Access Key</label>
          <input
            placeholder="Your access key"
            className="h-10 px-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
          ></input>

          <div className="relative right-2 p-2 md:top-4">
            <button className="rounded-[6px] px-6 py-3 text-sm cursor-pointer bg-violet-400 text-white">
              Access Dashboard
            </button>
          </div>
        </form>
      </div>
    </Particles>
  );
}
