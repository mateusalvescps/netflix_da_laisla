import { profiles } from '../data/config'

export default function ProfileSelect({ onSelectProfile }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl md:text-6xl font-medium mb-12 text-white">
        Quem está assistindo?
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onSelectProfile(profile)}
            className="group flex flex-col items-center cursor-pointer"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-netflix-darkGray rounded-lg flex items-center justify-center text-6xl md:text-7xl transition-all duration-200 group-hover:ring-4 group-hover:ring-white group-hover:scale-110">
              {profile.avatar}
            </div>
            <span className="mt-4 text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors">
              {profile.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
