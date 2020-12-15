<template>
  <a-collapse v-model:activekey="activeKey"><a-collapse-panel key="2" header="This is panel header 2" :disabled="0">
      <p>{{ text }}</p>
    <fd-button>test1</fd-button></a-collapse-panel>
    <a-collapse-panel key="4" header="This is panel heade3r 4" :disabled="0">
      
    <fd-button>12</fd-button><fd-button>2333</fd-button><fd-button>333</fd-button><fd-button>5</fd-button><fd-button>16</fd-button></a-collapse-panel>
  </a-collapse>
</template>