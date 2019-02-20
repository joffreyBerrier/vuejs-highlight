<template>
  <p @mouseup="getTextSelection" v-html="text"></p>
</template>

<script>
export default {
  name: "vuejs-highlight",
  props: {
    text: {
      type: String,
      required: true
    },
    style: {
      type: Object,
      required: true
    },
    rangeText: {
      type: String,
      required: false,
    },
    rangeArray: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    getTextSelection() {
      const selection = window.getSelection();
      if (selection.toString() !== "") {
        this.rangeText = selection.toString();
        this.rangeArray.push(selection.toString());
        const range = selection.getRangeAt(0);
        const newNode = document.createElement("span");
        newNode.setAttribute("style", this.style);
        range.surroundContents(newNode);
        window.getSelection().removeAllRanges();
      }
    }
  }
};
</script>

<style lang="scss">
</style>