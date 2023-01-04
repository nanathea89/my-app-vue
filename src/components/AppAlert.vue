<template>
    <div :class="alertClasses" role="alert"></div>
</template>
<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "primary",
            validator: function (val) {
                return (['succes', 'info', 'warning', 'danger'].indexOf(val) !== -1)
            },
        },
    },
    computed: {
        alertClasses() {
            return ['alert', `alert-${this.type}`];
        }
    }
}
</script>