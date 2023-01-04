<template >
    <div class="alert " :class="typeAlert" role="alert" v-if="openAlert">
        {{ alertMessage }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
            @click="hideAlert()"></button>
        <button v-show="!openAlert">Show</button>
    </div>
</template>
<script>
export default {
    props: ['alertMessage', 'tipe', 'posisi'],
    data() {
        return {
            openAlert: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.openAlert = false
        }, 3000)
    },
    methods: {
        hideAlert() {
            this.openAlert = false
        }
    },
    computed: {
        typeAlert() {
            return [`alert-${this.tipe}`, `alert-${this.posisi}`]
        }
    }

};
</script>
<style >
.alert-bl {
    position: fixed;
    bottom: 10px;
    left: 30px;
}

.alert-tl {
    position: fixed;
    top: 10px;
    left: 30px;
}
</style>
