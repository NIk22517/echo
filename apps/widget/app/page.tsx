"use client";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../packages/backend/convex/_generated/api";

export default function Page() {
  const users = useQuery(api.user.list);
  const adduser = useMutation(api.user.addUser);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World App 2</h1>
        <Button size="sm">Button</Button>
      </div>
      <div className="text-sm max-w-md w-full">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  );
}
