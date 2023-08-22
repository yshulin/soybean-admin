<template>
  <n-modal v-model:show="showModal" preset="card" title="新增排查方案" class="w-1200px" :on-after-enter="showMindMap">
    <div id="mindMapContainer"></div>
    <template #footer>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" @click="handleSubmit">确定</n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
// import { watch, onMounted } from 'vue';
// import { useMessage } from 'naive-ui';
import MindMap from 'simple-mind-map';
import { showModal } from '../crud';

function showMindMap() {
  // eslint-disable-next-line no-new
  new MindMap({
    el: document.getElementById('mindMapContainer'),
    data: {
      data: {
        text: '根节点'
      },
      children: []
    }
  });
}

const closeModal = () => {
  showModal.value = false;
};
async function handleSubmit() {
  // await formRef.value?.validate();
  window.$message?.success('新增成功!');
  closeModal();
}
</script>

<style scoped>
#mindMapContainer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 500px;
}
</style>
