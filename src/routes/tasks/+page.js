export const load = (async ({fetch }) => {
    const response = await fetch(`https://my-json-server.typicode.com/PJZ9n/DummyTasksJsonAPI/projects`);
    const projects = await response.json();
    let tasks = {};
    for (const project of projects) {
        const response2 = await fetch(`https://my-json-server.typicode.com/PJZ9n/DummyTasksJsonAPI/tasks?project_id=${project.id}`);
        tasks[project.id] = await response2.json();
    }
    return {projects,tasks}
});