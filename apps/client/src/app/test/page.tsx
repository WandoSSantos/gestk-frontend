export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Teste Tailwind CSS
        </h1>
        <p className="text-gray-600 mb-4">
          Se você vê este texto com cores e estilos, o Tailwind está funcionando.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Botão de Teste
        </button>
      </div>
    </div>
  );
}
