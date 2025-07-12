import { BG_URL } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'

function GptSearch() {
  return (
    <div>
        <div className="fixed -z-10">
        <img
        src={BG_URL}
          alt="background image"
        />
      </div>
        <GptSearchBar/>
        <GptSuggestions/>
    </div>
  )
}

export default GptSearch