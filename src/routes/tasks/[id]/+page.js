export const load = (async ({fetch,params }) => {
    const response = await fetch(`https://my-json-server.typicode.com/PJZ9n/DummyTasksJsonAPI/tasks/${params.id}`);
    const task = await response.json();
    return{
        task
    }
});