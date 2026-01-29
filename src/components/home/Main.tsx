import example from "../../assets/home/menstrual_example.png";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function Main() {
  return (
    <div className="grid grid-cols-2 place-content-center items-center gap-14">
      <div className="flex justify-center pt-10">
        <img src={example.src} alt="" className="rounded-full h-120" />
      </div>

      <div className="flex justify-center flex-col gap-3.5">
        <h1
          className={`${poppinsFont.variable} text-violet-500 font-extrabold text-6xl relative left-20`}
        >
          Violet Cycle
        </h1>
        <p className="text-violet-300 text-3xl">
          A simple app to get your menstrual cycle
        </p>

        <div className="relative left-[25%]">
          <button className="bg-violet-600 w-50 h-12 rounded-3xl text-white cursor-pointer transition-all duration-200 hover:bg-violet-500">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
}
