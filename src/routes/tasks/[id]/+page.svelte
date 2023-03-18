<script>
    export let data
    const task = data.task;
</script>

<div>
    <h1>{task.title}</h1>
    <h3>{task.description}</h3>
    <p>{task.created_at}</p>

</div>