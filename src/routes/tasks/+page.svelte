<script>
    export let data;

    console.log(data);

    function toggleComple(target) {
        if(target.completed_at === null) {
            target.completed_at = Date.now();
        }else{
            target.completed_at = null;
        }
        data.tasks[target.id] = target
        fetch(`https://my-json-server.typicode.com/PJZ9n/DummyTasksJsonAPI/tasks/${target.id}`,{method:"PATCH",headers:{"Content-Type": "application/json"},body:JSON.stringify(target)})
            .then((response) => response.json())
            .then((task) => data.tasks[task.id] = task)
    }

</script>

<div class="grid grid-cols-1">
    {#each data.projects as {id, name}}
        <div class="bg-orange-400 m-2 rounded-lg">
            <div class="mt-3 ml-3">
                <span class="text-2xl">{name}</span>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 m-3">
                {#each data.tasks[id] as task}
                    <div class="shadow-sm hover:shadow-2xl rounded-lg"
                         class:hover:bg-green-400={task.completed_at === null}
                         class:bg-green-300={task.completed_at === null}
                         class:hover:bg-blue-400={task.completed_at !== null}
                         class:bg-blue-300={task.completed_at !== null}>
                        <div class="m-2">{task.title}</div>
                        <div class="m-2">{task.description}</div>
                        <label class="ml-2 relative inline-flex items-center cursor-pointer" on:change={toggleComple(task)}>
                            <input type="checkbox" value="1" class="sr-only peer" checked={ task.completed_at !== null}
                                   readonly={task.completed_at !== null}>
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Completed</span>
                        </label>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>
