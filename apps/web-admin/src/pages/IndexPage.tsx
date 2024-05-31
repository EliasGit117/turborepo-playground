import { Button } from '@ui/components/ui/button.tsx';
import { Link } from 'react-router-dom';

const IndexPage = () => {

  return (
    <main className="container mx-auto p-4 space-y-2">
      <h1>Index Page</h1>
      <div className="flex gap-2">
        <Button asChild>
          <Link to="/sign-in">Sign In</Link>
        </Button>
        <Button asChild>
          <Link to="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </main>
  );
};

export default IndexPage;
