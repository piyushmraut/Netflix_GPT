import { BG_URL } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'

function GptSearch() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="background image"
          className="w-full h-full object-cover"
        />
      </div>
      <GptSearchBar/>
      <GptSuggestions/>
    </div>
  )
}

export default GptSearch