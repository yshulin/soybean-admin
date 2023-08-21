<template>
  <n-modal v-model:show="showModal" preset="card" title="新增排查方案" class="w-1200px">
    <div ref="mindMapContainer ">新增排查方案</div>
    <template #footer>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" @click="handleSubmit">确定</n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import { useMessage } from 'naive-ui';
import { showModal } from '../crud';

// const message = useMessage();
// const showModal = ref(false);

// function cancelCallback() {
//   message.success('Cancel');
// }
// function submitCallback() {
//   message.success('Submit');
// }

// function showAddModal() {
//   showModal.value = true;
// }
const closeModal = () => {
  showModal.value = false;
};
async function handleSubmit() {
  // await formRef.value?.validate();
  window.$message?.success('新增成功!');
  closeModal();
}
</script>

<!-- <script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMessage } from 'naive-ui';

export default defineComponent({
  setup() {
    const message = useMessage();
    const showModal = ref(false);

    function showAddModal() {
      showModal.value = true;
    }

    return {
      showModal,
      showAddModal,
      cancelCallback() {
        message.success('Cancel');
      },
      submitCallback() {
        message.success('Submit');
      }
    };
  }
});
</script> -->

<!-- <script lang="ts">
import { defineComponent, ref } from 'vue';
const title = ref('新增排查方案');
const modalVisible = ref(false);

export default defineComponent({
  setup() {
    function ShowAddModal() {
      modalVisible.value = true;
      // eslint-disable-next-line no-alert
      alert('fdasfd');
    }

    return {
      title,
      modalVisible,
      ShowAddModal
    };
  }
});
</script> -->

<!-- <script setup lang="ts">
import { ref } from 'vue';
const title = ref('新增排查方案');
// const modalVisible = ref(false);

// function ShowAddModal() {
//   modalVisible.value = true;
// }
</script> -->

<style scoped></style>
