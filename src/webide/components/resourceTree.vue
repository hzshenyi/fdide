<template>
  test
</template>

<style scoped>

</style>
<script>
import {ref} from 'vue'
export default {
    setup(){
        let activeName = ref("a");
        return {
            activeName
        }
    }
}
</script>