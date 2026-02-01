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
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-0">
      <div className="flex justify-center py-10">
        <img
          src={example.src}
          alt=""
          className="h-64 md:h-96 lg:h-[32rem] rounded-full"
        />
      </div>

      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1
          className={`${poppinsFont.variable} text-violet-500 font-extrabold text-4xl md:text-6xl`}
        >
          Violet Cycle
        </h1>

        <p className="text-violet-300 text-lg md:text-2xl max-w-xl md:relative left-10">
          A simple app to get your menstrual cycle
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="cursor-pointer bg-violet-600 w-40 md:w-50 h-12 rounded-[10px] text-white transition-colors hover:bg-violet-500">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
}
