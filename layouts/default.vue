<template>
  <div data-default-layout>
    <TheHeader />

    <main>
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
[data-default-layout] {
  @apply flex flex-col justify-between min-h-screen;
}
</style>
