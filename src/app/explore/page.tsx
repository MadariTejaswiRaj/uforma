// app/explore/page.tsx
import { createClient } from '../utils/supabase/client'

export default async function ExplorePage() {
  // Fetch data from Supabase
  const supabase = createClient()
  const { data: ideas, error } = await supabase.from('ideas').select('*')
  
  

  // Log data to the console (only visible on the server side)
  console.log("ideas:", ideas);

  // Handle error case
  if (error) {
    console.error('Error fetching ideas:', error);
    return <div>Error loading ideas.</div>;
  }

  // Return JSX
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Explore Innovative Ideas</h1>
      <pre>{JSON.stringify(ideas, null, 2)}</pre> {/* Display data as JSON for debugging */}
    </div>
  );
}
