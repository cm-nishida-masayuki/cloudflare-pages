export async function onRequest(context) {
  const task = await context.env.TODO_LIST_2.get("test");
  return new Response(task);
}
