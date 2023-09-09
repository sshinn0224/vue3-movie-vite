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
    <div
      @click="toAbout"
      class="user"
    >
      <img
        :src="image"
        :alt="name"
      />
    </div>
  </header>
</template>
<script>
import { ref, computed } from 'vue'
import Logo from '@/components/Logo.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    Logo,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const image = ref(
      computed(() => {
        return store.state.about.image
      })
    )
    const name = ref(
      computed(() => {
        return store.state.about.name
      })
    )

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

    const toAbout = () => {
      console.log(router)
      router.push('/about')
    }

    return {
      navigations,
      isMatch,
      image,
      name,
      toAbout,
    }
  },
}
</script>
<style lang="scss" scoped>
@import './src/scss/main';
header {
  position: relative;
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50px;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: 0.4s;
    &:hover {
      background-color: darken($gray-200, 10%);
    }
    img {
      width: 100%;
    }
  }
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>
