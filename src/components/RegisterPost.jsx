import React from 'react'
import { useForm } from 'react-hook-form'
import { createPost } from '../services/postServices';

export default function RegisterPost() {
  const { register, handleSubmit, reset } = useForm();

  const saveData = async (data_post) => {
    const response = await createPost(data_post)
    alert(`Registro exitoso con el título: ${response.title} y descripción: ${response.body}`)
    reset()
  }

  return (
    <div className="max-w-xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-xl font-sans">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registrar Nuevo Post</h2>

      <form onSubmit={handleSubmit(saveData)} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Título</label>
          <input
            type="text"
            {...register("title")}
            placeholder="Ingrese el título"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Descripción</label>
          <input
            type="text"
            {...register("body")}
            placeholder="Ingrese la descripción"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">ID de Usuario</label>
          <input
            type="number"
            {...register("userId")}
            placeholder="Ingrese el ID del usuario"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Guardar Datos"
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer"
          />
        </div>
      </form>
    </div>
  )
}
