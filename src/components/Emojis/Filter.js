import EmojiList from './EmojiList.json'

function Filter(searchText, maxResults) {
  return (
    EmojiList.filter(emoji => {
        if (emoji.description.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
            return true;
        }
        if (emoji.aliases.includes(searchText) || emoji.tags.includes(searchText)) {
            return true;
        }
        return false;
    })
    .slice(0, maxResults)
  )
}

export default Filter