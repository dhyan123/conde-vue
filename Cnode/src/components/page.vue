<template>
    <Page :total="100" @on-change="change"></Page>
</template>

<script>
    export default {
        methods:{
              change: function (page) {
              this.$store.dispatch('getListAction', {
                pageNum: page
            })
        }
        }
    }
</script>