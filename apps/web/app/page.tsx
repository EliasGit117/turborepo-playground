import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import { Button } from "@repo/ui/button";


export default function Page() {
  return (
    <main className="container mx-auto py-4">

      <Button appName="web">
        Click me!
      </Button>

    </main>
  );
}
