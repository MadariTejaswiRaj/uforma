import Link from 'next/link';
import LikeButton from './LikeButton';

export default function IdeaCard({ idea }) {
  console.log('Idea card data:', idea);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{idea.title}</h2>
        <p className="text-gray-600 mb-4">{idea.description.substring(0, 150)}...</p>
        <div className="flex items-center justify-between">
          <Link href={`/explore/${idea.id}`} className="text-blue-500 hover:underline">
            View Details
          </Link>
          <LikeButton ideaId={idea.id} initialLikes={idea.like_count} />
        </div>
      </div>
      <div className="bg-gray-100 px-6 py-4">
        <div className="flex items-center">
          <img src={idea.users.avatar_url} alt={idea.users.full_name} className="w-10 h-10 rounded-full mr-4" />
          <span className="font-medium">{idea.users.full_name}</span>
        </div>
      </div>
    </div>
  );
}