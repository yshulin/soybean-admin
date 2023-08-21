<template>
  <div class="h-full">
    <fs-crud ref="crudRef" v-bind="crudBinding"></fs-crud>
    <AddModal v-model:show="showModal"></AddModal>
  </div>
</template>

<script setup lang="ts">
// import { defineComponent, onMounted } from 'vue';
// import { useFs } from '@fast-crud/fast-crud';
// import createCrudOptions from './crud';

// export default defineComponent({
//   name: 'ComponentCrud',
//   setup() {
//     const { crudRef, crudBinding, crudExpose } = useFs({ createCrudOptions });

//     // 页面打开后获取列表数据
//     onMounted(() => {
//       crudExpose.doRefresh();
//     });

//     return {
//       crudBinding,
//       crudRef
//     };
//   }
// });

import { onMounted } from 'vue';
import { useFs } from '@fast-crud/fast-crud';
import createCrudOptions, { showModal } from './crud';
import AddModal from './components/add-modal.vue';

// function showAddModal() {
//   showModal = true;
// }
// const closeModal = () => {
//   showModal = false;
// };
// async function handleSubmit() {
//   // await formRef.value?.validate();
//   window.$message?.success('新增成功!');
//   closeModal();
// }

const { crudRef, crudBinding, crudExpose } = useFs({ createCrudOptions });
// 页面打开后获取列表数据
onMounted(() => {
  crudExpose.doRefresh();
});
</script>

<style scoped></style>
