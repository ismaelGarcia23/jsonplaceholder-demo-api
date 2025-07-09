import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { getPostById } from '../services/postServices'

export default function EditPost() {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { postId } = useParams()

  const saveData = async (data) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${data.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      )

      if (!response.ok) throw new Error('Error al actualizar')

      const updatedPost = await response.json()

      alert(
        `Post actualizado:\nTítulo: ${updatedPost.title}\nDescripción: ${updatedPost.body}`
      )
    } catch (error) {
      alert('Error al actualizar el post.')
    }
  }

  useEffect(() => {
    const fetchPostId = async () => {
      const response = await getPostById(postId)
      if (response) {
        reset(response) // precarga los valores en el formulario
      }
    }

    fetchPostId()
  }, [postId, reset])

  return (
    <div className="max-w-xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-xl font-sans">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Editar Publicación
      </h1>

      <form onSubmit={handleSubmit(saveData)} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">ID</label>
          <input
            type="text"
            {...register('id')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Título</label>
          <input
            type="text"
            {...register('title', { required: 'El título es obligatorio' })}
            placeholder="Editar título"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* Mensaje de error */}
          {errors.title && (
            <p className="text-red-600 mt-1 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Descripción
          </label>
          <input
            type="text"
            {...register('body', { required: 'La descripción es obligatoria' })}
            placeholder="Editar descripción"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.body && (
            <p className="text-red-600 mt-1 text-sm">{errors.body.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            ID de Usuario
          </label>
          <input
            type="number"
            {...register('userId', {
              required: 'El ID de usuario es obligatorio',
              valueAsNumber: true,
              min: { value: 1, message: 'El ID debe ser mayor o igual a 1' },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.userId && (
            <p className="text-red-600 mt-1 text-sm">{errors.userId.message}</p>
          )}
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
