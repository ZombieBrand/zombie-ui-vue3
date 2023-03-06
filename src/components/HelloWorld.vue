<script setup lang="ts">
import ZButton from "../button/Button";
import IconAccountBox from "~icons/mdi/account-box";
</script>

<template>
  <IconAccountBox></IconAccountBox>
  <div style="margin-bottom: 10px">
    <ZButton type="default">default</ZButton>
    <ZButton type="primary">primary</ZButton>
    <ZButton type="success">success</ZButton>
    <ZButton type="warning">waring</ZButton>
    <ZButton type="error">error</ZButton>
  </div>
  <div style="margin-bottom: 10px">
    <ZButton type="default" size="small">default</ZButton>
    <ZButton type="success" size="medium">success</ZButton>
    <ZButton type="warning" size="large">waring</ZButton>
  </div>
  <div>
    <ZButton type="default" round>
      <template #icon>
        <IconAccountBox></IconAccountBox>
      </template>
    </ZButton>
    <ZButton type="success" round icon="mdi:magnify"> </ZButton>
    <ZButton type="primary" round icon="material-symbols:edit"> </ZButton>
  </div>
</template>

<style lang="scss" scoped></style>
