<template>
  <div>
    <p>heroid: {{heroid}}</p>
    <div>
      heroAttrs: 
      <p v-for="(value, key, index) in heroAttrs">
        {{key}} : {{value}}
      </p>
    </div>
  
  </div>
</template>
<script>
  export default {
    data () {
      return {
        heroid: '',
        heroAttrs: {}
      }
    },
    methods: {
    },
    components: {
    },
    created () {
      let scope = this
      this.$set(scope, 'heroid', scope.$route.query.id)
      // console.log(scope.heroid)
      // console.log(scope.$data)
      let url = 'https://ac.ingame.qq.com/php/ingame/smoba/top_hero_detail.php'
      scope.$http.jsonp(url, {
        params: {
          heroid: scope.heroid
        }
      }).then((res) => {
        // console.log(res)
        // console.log(JSON.parse(res.bodyText))
        scope.$set(scope, 'heroAttrs', JSON.parse(res.bodyText).data)
      })
    }
  }
</script>
