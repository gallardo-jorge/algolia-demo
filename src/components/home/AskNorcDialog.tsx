import { Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type AskNorcDialogProps = {
  initialPrompt?: string
  showSuggestions?: boolean
  onAsk?: (prompt: string) => void | Promise<void>
}

const suggestions = [
  'How is AI changing the way public agencies deliver services?',
  'What are best practices for responsible AI procurement in government?',
  'Has NORC published findings on trust in AI-generated information?',
  'What guidelines support transparent AI use in public decision-making?',
  'What does NORC research say about measuring AI impact over time?',
]

export function AskNorcDialog({
  initialPrompt = '',
  showSuggestions = false,
  onAsk,
}: AskNorcDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [prompt, setPrompt] = useState(initialPrompt)
  const [isAsking, setIsAsking] = useState(false)
  const [suggestionsOpen, setSuggestionsOpen] = useState(false)

  useEffect(() => {
    setPrompt(initialPrompt)
  }, [initialPrompt])

  const executeAsk = async (nextPrompt = prompt) => {
    const trimmedPrompt = nextPrompt.trim()
    if (!trimmedPrompt || isAsking) {
      return
    }

    setPrompt(trimmedPrompt)
    setIsAsking(true)

    try {
      await onAsk?.(trimmedPrompt)
    } finally {
      window.setTimeout(() => {
        setIsAsking(false)
      }, 150)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion)
    inputRef.current?.focus()
  }

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/90 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-900/95">
      {showSuggestions ? (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${suggestionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="border-b border-neutral-800 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
              AskNORC Suggestions
            </p>
            <ul className="mt-3 space-y-2">
              {suggestions.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(item)}
                    className="group flex w-full items-start gap-2 text-left text-sm text-neutral-300 transition-colors hover:text-orange-300"
                  >
                    <Search className="mt-0.5 h-3.5 w-3.5 text-neutral-500 transition-colors group-hover:text-orange-400" />
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="mt-3 text-xs font-medium text-sky-400 transition-colors hover:text-sky-300">
              View More
            </button>
          </div>
        </div>
      ) : null}

      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2 rounded-full bg-white p-1.5">
          <input
            ref={inputRef}
            type="text"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onFocus={showSuggestions ? () => setSuggestionsOpen(true) : undefined}
            onClick={showSuggestions ? () => setSuggestionsOpen(true) : undefined}
            placeholder="What can we help you with?"
            className="w-full bg-transparent px-3 py-2 text-sm text-neutral-500 outline-none"
            aria-label="AskNORC question"
          />
          <button
            type="button"
            onClick={() => void executeAsk()}
            disabled={isAsking || !prompt.trim()}
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isAsking ? 'Asking...' : 'Ask'}
          </button>
        </div>
      </div>
    </div>
  )
}
