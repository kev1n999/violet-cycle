import Form from "@/src/components/dashboard/form";

export default function Dashboard() {
  return (
    <div className="flex justify-center min-h-screen min-w-screen mt-10">
      <div className="grid grid-cols-2">
        { /* Cycle Tracker */}
        <div>
          <h1 className="text-4xl font-extrabold text-violet-300">Calcule seu ciclo aqui!</h1>

          <Form />
        </div>

        {/* Insights */}
        <div>

        </div>
      </div>
    </div>
  )
}
