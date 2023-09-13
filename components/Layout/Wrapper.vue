<template>
  <div class="page-layout" data-scroll>
    <LayoutHeader />

    <main>
      <slot />
    </main>

    <LayoutAction />
    <LayoutNavBar />
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  @apply flex flex-col justify-start min-h-(100vh 100dvh);
}
</style>
