<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
export default {
    name: 'app',
    components: {},
    created() {
      if(localStorage.eleToken){
          // 解析token
          const decoded = jwt_decode(localStorage.eleToken);
          // token存储到vuex中
          this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded));
          this.$store.dispatch('setUser', decoded);

      }
    },
    methods:{    
        isEmpty (value) {
            return (
                value === undefined ||
                value === null ||
                (typeof value === "Object" && Object.key(value).length === 0) ||
                (typeof value === "String" && Object.trim().length === 0)
            );
        },
    },
}; 
</script>

<style>
html,
body,
#app {
  width:100%;
  height: 100%;
}
</style>
