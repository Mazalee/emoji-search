import React from 'react'
import './EmojiResultRow.css'

function EmojiResultRow({ emoji, description }) {

    const codePointHex = emoji.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`
  return (
    <div 
        className='component-emoji-result-row copy-it'
        data-clipboard-text={description}
    >
        <img src={src} alt={description} />
        <span className='title'>{description}</span>
        <span className='info'>Click to Copy</span>
    </div>
  )
}

export default EmojiResultRow