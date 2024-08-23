export default{
    name: 'kamustaReply',
    title: 'Kamusta Reply',
    type: 'document',
    fields: [
        {
        name: 'reply_content',
        title: 'User Reply Contains',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Keywords to trigger the bot reply',
        },
        {
        name: 'bot_reply_message',
        title: 'Reply Message',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Bot Message to reply with',
        }
    ],
}

