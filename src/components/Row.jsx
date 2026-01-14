import { useState, useRef } from 'react'

export default function Row({ title, images }) {
  const rowRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    const container = rowRef.current
    if (!container) return

    const scrollAmount = container.offsetWidth * 0.8
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    })

    // Atualizar visibilidade das setas
    setTimeout(() => {
      setShowLeftArrow(container.scrollLeft > 0)
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.offsetWidth - 10
      )
    }, 300)
  }

  if (!images || images.length === 0) return null

  return (
    <div className="px-12 group relative">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      
      {/* Seta esquerda */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-4 h-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
      )}

      {/* Seta direita */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-4 h-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      )}

      {/* Container das imagens */}
      <div
        ref={rowRef}
        className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-36 md:w-80 md:h-44 group/item cursor-pointer transition-all duration-300 hover:scale-110 hover:z-30"
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover rounded"
              onError={(e) => {
                // Fallback para imagem não encontrada
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="176"%3E%3Crect width="320" height="176" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-size="20"%3EFoto ' + (index + 1) + '%3C/text%3E%3C/svg%3E'
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
