import { mutation, query } from "./_generated/server";

export const list = query(async ({ db }) => {
  return await db.query("users").collect();
});

export const addUser = mutation({
  args: {},
  handler: async ({ db }) => {
    return db.insert("users", { name: "new test" });
  },
});
