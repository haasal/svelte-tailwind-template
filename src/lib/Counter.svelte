<script lang="ts">
    let count = 0;

    function increment() {
        count += 1;
    }
</script>

<button
    on:click={increment}
    class="bg-light-100 hover:bg-light-200 text-slate-900 border-light-300 border p-1 w-20 m-2 rounded-md transition-colors shadow-sm font-medium"
>
    {count}
</button>
