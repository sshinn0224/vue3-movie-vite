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
export default {
  components: {
    Logo,
  },
  setup() {
    const navigations = ref([
      {
        name: 'Search',
        href: '/',
      },
      {
        name: 'Movie',
        href: '/movie/tt4520988',
      },
      {
        name: 'About',
        href: '/about',
      },
    ])

    return {
      navigations,
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
