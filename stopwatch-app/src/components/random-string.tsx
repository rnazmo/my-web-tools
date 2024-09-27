"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function RandomStringGenerator() {
  const [strings, setStrings] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [length, setLength] = useState(16);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecial, setUseSpecial] = useState(false);

  const generateRandomStrings = () => {
    const charset = [
      ...(useUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""),
      ...(useLowercase ? "abcdefghijklmnopqrstuvwxyz" : ""),
      ...(useNumbers ? "0123456789" : ""),
      ...(useSpecial ? "!@#$%^&*()_+{}[]|:;<>,.?/~`" : ""),
    ].join("");

    const newStrings = Array.from({ length: count }, () =>
      Array.from(
        { length },
        () => charset[Math.floor(Math.random() * charset.length)]
      ).join("")
    );
    setStrings(newStrings);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Random String Generator</h1>
      <Card>
        <CardContent className="flex flex-col items-center p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">生成数:</label>
              <Input
                type="number"
                min="1"
                max="100"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block mb-2">文字列の長さ:</label>
              <Input
                type="number"
                min="1"
                max="100"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <label className="flex items-center">
              <Checkbox
                checked={useUppercase}
                onCheckedChange={setUseUppercase}
              />
              <span className="ml-2">大文字</span>
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={useLowercase}
                onCheckedChange={setUseLowercase}
              />
              <span className="ml-2">小文字</span>
            </label>
            <label className="flex items-center">
              <Checkbox checked={useNumbers} onCheckedChange={setUseNumbers} />
              <span className="ml-2">数字</span>
            </label>
            <label className="flex items-center">
              <Checkbox checked={useSpecial} onCheckedChange={setUseSpecial} />
              <span className="ml-2">特殊文字</span>
            </label>
          </div>
          <Button onClick={generateRandomStrings} className="mb-4">
            生成
          </Button>
          <div className="w-full">
            {strings.map((str, index) => (
              <div key={index} className="mb-2">
                <Input value={str} readOnly />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
