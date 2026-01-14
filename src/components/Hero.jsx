import { useState, useEffect } from 'react'

export default function Hero({ profileFolder }) {
  const [videoPath, setVideoPath] = useState(null)

  useEffect(() => {
    // Tentar encontrar vídeo em diferentes formatos
    const checkVideo = async () => {
      const extensions = ['mp4', 'webm', 'mov']
      const basePath = `/assets/${profileFolder}/video`
      
      for (const ext of extensions) {
        const path = `${basePath}/destaque.${ext}`
        // Em produção, o vídeo estará disponível
        setVideoPath(path)
        break
      }
    }
    
    checkVideo()
  }, [profileFolder])

  return (
    <div className="relative h-screen">
      {/* Vídeo de fundo ou placeholder */}
      {videoPath ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-netflix-black flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-gray-400 text-xl">
              Adicione um vídeo em<br />
              /public/assets/{profileFolder}/video/destaque.mp4
            </p>
          </div>
        </div>
      )}

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
      
      {/* Conteúdo sobre o vídeo */}
      <div className="absolute bottom-32 left-12 max-w-xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">
          Nosso Amor
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Uma história de amor verdadeiro, repleta de momentos inesquecíveis
        </p>
        
        {/* Botões */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded text-xl font-semibold hover:bg-opacity-80 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Assistir
          </button>
          
          <button className="flex items-center gap-2 bg-gray-500 bg-opacity-50 text-white px-8 py-3 rounded text-xl font-semibold hover:bg-opacity-40 transition">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <path strokeWidth="2" d="M12 8v8M8 12h8"/>
            </svg>
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  )
}
