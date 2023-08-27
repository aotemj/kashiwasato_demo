import { memo, useEffect, useRef } from "react"

import ShuffleText from "../ShuffleText"

type TextShuffleComProps = {
  /**
   * Text to be shuffled
   */
  text: string
  [key: string]: any
}
const TextShuffleFragment: React.FC<TextShuffleComProps> = ({ text, ...props }) => {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const element = ref?.current ? ref.current : null

    if (element) {
      const t = new ShuffleText(element)

      element.onmouseenter = function () {
        if (!t.isRunning) {
          t.start()
        }
      }

      setTimeout(() => {
        t.start()
        t.setText(text)
      }, 100)
    }
  }, [])

  return (
    <span ref={ref} {...props}>
      {text}
    </span>
  )
}

export default memo(TextShuffleFragment)
