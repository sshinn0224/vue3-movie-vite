<template>
  <header>
    <Logo></Logo>
    <div class="nav nav-pills">
      <div
        class="nav-item"
        v-for="nav in navigations"
        :key="nav.name"
      >
        <RouterLink
          active-class="active"
          class="nav-link"
          :class="{ active: isMatch(nav.path) }"
          :to="nav.href"
        >
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
<script>
import { ref } from 'vue'
import Logo from '@/components/Logo.vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    Logo,
  },
  setup() {
    const router = useRoute()
    const navigations = ref([
      {
        name: 'Search',
        href: '/',
      },
      {
        name: 'Movie',
        href: '/movie/tt4520988',
        path: /^\/movie/,
      },
      {
        name: 'About',
        href: '/about',
      },
    ])

    const isMatch = (path) => {
      if (!path) return false
      return path.test(router.fullPath)
    }

    return {
      navigations,
      isMatch,
    }
  },
}
</script>
<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
}
</style>
