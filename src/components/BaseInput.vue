<template>
    <div class="form-group">
        <label for="">{{ label }}</label>
        <input type="text" class="form-control">
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>