"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Form() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <form className="flex flex-col gap-2">
      <label>Primeiro dia da última menstrução:</label>
      <input type="date" className="rounded-lg border-violet-400"></input>

      <label>Duração do ciclo (dias):</label>
      <input type="number" min="21" max="35" className="rounded-lg  border-violet-400" required></input>

      <label>Duração da menstruação:</label>
      <input type="number" min="2" max="8" className="rounded-lg  border-violet-400"></input>

      <button type="submit" className="rounded-lg bg-violet-400 mx-auto mt-5 p-3 w-full md:min-w-lg text-white cursor-pointer transition-colors duration-300 hover:bg-violet-500">Calcular</button>
    </form>
  )
}
