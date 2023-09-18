<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <DocumentWrapper v-bind="{ title: doc.title, date: doc.date }">
          <ContentRenderer :value="doc" />
        </DocumentWrapper>
      </template>

      <template #empty>
        <h1>Document is empty</h1>
      </template>

      <template #not-found>
        <NotFoundPost />
      </template>
    </ContentDoc>
  </div>
</template>
