import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'

function GptSearch() {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg"
          alt="background image"
        />
      </div>
        <GptSearchBar/>
        <GptSuggestions/>
    </div>
  )
}

export default GptSearch