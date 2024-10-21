import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

export default function UUIDGenerator() {
  const [uuids, setUUIDs] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const generateUUIDs = () => {
    const newUUIDs = Array.from({ length: count }, () => uuidv4());
    setUUIDs(newUUIDs);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">UUID v4 Generator</h1>
      <Card>
        <CardContent className="flex flex-col items-center p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="w-20"
            />
            <Button onClick={generateUUIDs}>Generate!</Button>
          </div>
          <div className="w-full">
            {uuids.map((uuid, index) => (
              <div key={index} className="mb-2">
                <Input value={uuid} readOnly />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
