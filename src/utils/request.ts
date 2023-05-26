import config from '~/config'

const apiURL = 'https://api.openai.com/v1/chat/completions'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${config.apikey}`,
}

export const sendRequest = async (message: string) => {
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
  }

  const response = await fetch(apiURL, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })
  const data = await response.json()

  return data.choices[0].message.content
}
