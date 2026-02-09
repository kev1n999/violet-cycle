import Form from "@/src/components/dashboard/form";

export default function Dashboard() {
  return (
    <div className="flex justify-center min-h-screen min-w-screen mt-10">
      { /* Cycle Tracker */}
      <div>
        <div className="flex justify-center flex-col">
          <h1 className="text-3xl md:text-4xl font-extrabold text-violet-300">Calcule seu ciclo aqui!</h1>
          <Form />
        </div>
      </div>

      {/* Insights */}
      <div>

      </div>
    </div>
  )
}
