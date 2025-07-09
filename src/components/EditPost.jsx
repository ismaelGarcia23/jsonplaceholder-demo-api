import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { getPostById } from '../services/postServices'

export default function EditPost() {
  const { register, handleSubmit, reset } = useForm()
  const { postId } = useParams()

  const saveData = async (data) => {
    // lógica para actualizar
    console.log("Datos enviados:", data)
  }

  useEffect(() => {
    const fetchPostId = async () => {
      const response = await getPostById(postId)
      if (response) {
        reset(response) // precarga los valores
      }
    }

    fetchPostId()
  }, [postId, reset])

  return (
    <div className="max-w-xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-xl font-sans">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Editar Publicación</h1>

      <form onSubmit={handleSubmit(saveData)} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">ID</label>
          <input
            type="text"
            {...register("id")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Título</label>
          <input
            type="text"
            {...register("title")}
            placeholder="Editar título"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Descripción</label>
          <input
            type="text"
            {...register("body")}
            placeholder="Editar descripción"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">ID de Usuario</label>
          <input
            type="number"
            {...register("userId")}
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
