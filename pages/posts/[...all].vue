<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <DocumentWrapper v-bind="{ title: doc.title, date: doc.date }">
          <ContentRenderer :value="doc" />
        </DocumentWrapper>
      </template>

      <template #empty>
        <!-- Document is empty -->
        <NotFoundPost />
      </template>

      <template #not-found>
        <NotFoundPost />
      </template>
    </ContentDoc>
  </div>
</template>
