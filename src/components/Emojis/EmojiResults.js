import ClipboardJS from 'clipboard'
import React, { useEffect } from 'react'
import EmojiResultRow from './EmojiResultRow'


function EmojiResults({ emojiData }) {

    useEffect(() => {
        var clipboard = new ClipboardJS('.copy-it')
    }, [])
  return (
    <div className='component-emoji-results'>
        {
            emojiData.map((emoji) => (
                <EmojiResultRow
                    key={emoji.description}
                    emoji={emoji.emoji}
                    description={emoji.description}
                />
            ))
        }
    </div>
  )
}

export default EmojiResults