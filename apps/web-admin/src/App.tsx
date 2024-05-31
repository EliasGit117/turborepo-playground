import { useState } from 'react';
import { Button } from '@repo/ui/components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container mx-auto py-4">
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </main>
  );
}

export default App;
