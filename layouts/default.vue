<template>
  <div data-default-layout data-scroll>
    <LayoutHeader />

    <main>
      <slot />
    </main>

    <LayoutAction />
    <LayoutNavBar />
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
[data-default-layout] {
  @apply flex flex-col justify-between min-h-(100vh 100dvh);
}
</style>
