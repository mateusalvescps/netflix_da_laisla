import { useState } from 'react'
import ProfileSelect from './pages/ProfileSelect'
import Browse from './pages/Browse'
import './index.css'

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null)

  return (
    <div className="min-h-screen bg-netflix-black">
      {!selectedProfile ? (
        <ProfileSelect onSelectProfile={setSelectedProfile} />
      ) : (
        <Browse profile={selectedProfile} onBack={() => setSelectedProfile(null)} />
      )}
    </div>
  )
}

export default App
