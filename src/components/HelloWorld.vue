<script setup></script>

<template>hejhejhej</template>

<style scoped></style>
export default { data() { return { data: [], filteredData: [], }; }, created() {
axios .get("experience.json") .then((response) => { this.data = response.data;
this.filterData(); }) .catch((error) => { console.error(error); }); }, methods:
{ filterData() { this.filteredData = this.data.filter((item) => item.category
=== "edu"); }, }, };
