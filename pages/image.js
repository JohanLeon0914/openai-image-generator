
import { useState } from 'react';
import Configuration from 'openai';
import OpenAIApi from 'openai';

function MyApp({ text }) {
  const [inputText, setInputText] = useState(text || '');
  const [imageUrl, setImageUrl] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const api = new OpenAIApi(new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      }));

      const response = await api.post({
        endpoint: '/v1/images/generations',
        data: {
          model: 'image-alpha-001',
          prompt: inputText,
        },
      });

      setImageUrl(response.data.data.url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={event => setInputText(event.target.value)}
        />
        <button type="submit">Generate Image</button>
      </form>
      {imageUrl && <img src={imageUrl} />}
    </div>
  );
}

export default MyApp;