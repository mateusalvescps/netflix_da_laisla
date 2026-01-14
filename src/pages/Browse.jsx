import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import { galleries } from '../data/config'

export default function Browse({ profile, onBack }) {
  const [profileGalleries, setProfileGalleries] = useState([])

  useEffect(() => {
    // Carregar galerias do perfil selecionado
    const loadGalleries = async () => {
      const galleriesConfig = galleries[profile.folder] || []
      const loadedGalleries = []

      for (const gallery of galleriesConfig) {
        try {
          // Tentar carregar imagens da galeria
          const images = await loadImagesFromFolder(profile.folder, gallery.folder)
          if (images.length > 0) {
            loadedGalleries.push({
              ...gallery,
              images
            })
          }
        } catch (error) {
          console.warn(`Galeria ${gallery.folder} não encontrada`)
        }
      }

      setProfileGalleries(loadedGalleries)
    }

    loadGalleries()
  }, [profile])

  // Função para carregar imagens de uma pasta
  const loadImagesFromFolder = async (profileFolder, galleryFolder) => {
    const images = []
    const basePath = `/assets/${profileFolder}/${galleryFolder}`
    
    // Tentar carregar até 20 imagens (ajuste conforme necessário)
    for (let i = 1; i <= 20; i++) {
      const extensions = ['jpg', 'jpeg', 'png', 'webp']
      let imageFound = false
      
      for (const ext of extensions) {
        try {
          const imagePath = `${basePath}/foto${i}.${ext}`
          // Verificar se a imagem existe (isso funcionará em produção)
          images.push(imagePath)
          imageFound = true
          break
        } catch {
          continue
        }
      }
      
      if (!imageFound && i > 3) {
        // Se não encontrou imagem e já passou das 3 primeiras, para
        break
      }
    }
    
    return images
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Header com botão de voltar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-8">
            <h1 className="text-netflix-red text-3xl font-bold">JAPAFLIX</h1>
            <button
              onClick={onBack}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Trocar Perfil
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white">{profile.avatar} {profile.name}</span>
          </div>
        </div>
      </header>

      {/* Vídeo em destaque */}
      <Hero profileFolder={profile.folder} />

      {/* Galerias (Rows) */}
      <div className="relative z-10 -mt-32 space-y-12 pb-20">
        {profileGalleries.map((gallery) => (
          <Row
            key={gallery.id}
            title={gallery.title}
            images={gallery.images}
          />
        ))}
        
        {profileGalleries.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              Adicione suas fotos em /public/assets/{profile.folder}/
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
