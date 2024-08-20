export default {
  name: 'keywords',
  title: 'GIF Sender based on Keywords',
  type: 'document',
  fields: [
    {
      name: 'message_keywords',
      title: 'Discord Message Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords to trigger the GIF',
    },
    {
      name: 'gif_search_phrase',
      title: 'GIF Search Phrase',
      type: 'string',
      description: 'Phrase to search for GIFs',
    }
  ],
}
