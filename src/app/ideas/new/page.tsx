'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../utils/supabase/client'

export default function NewIdeaPage() {
    const supabase = createClient()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('ideas')
      .insert({ title, description, pitch_deck_url: pitchDeckUrl })
      .select();

    if (error) {
      console.error('Error creating idea:', error);
    } else {
      router.push(`/ideas/${data[0].id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Post Your Innovative Idea</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="pitchDeckUrl" className="block mb-2">Pitch Deck URL</label>
        <input
          type="url"
          id="pitchDeckUrl"
          value={pitchDeckUrl}
          onChange={(e) => setPitchDeckUrl(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Post Idea
      </button>
    </form>
  );
}