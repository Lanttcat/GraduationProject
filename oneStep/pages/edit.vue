<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-toolbar flat>
                        <v-icon  class="app-header-icon">arrow_back</v-icon>
                        <v-toolbar-title>写攻略</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-icon  class="app-header-icon">send</v-icon>
                    </v-toolbar>
                    <v-container fluid class="pa-0 mt-2">
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-divider></v-divider>
                                <v-text-field
                                label="Subject"
                                value="输入标题"
                                single-line
                                full-width
                                hide-details
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <quill-editor ref="myTextEditor"
                                    v-model="content"
                                    :options="editorOption"
                                    @blur="onEditorBlur($event)"
                                    @focus="onEditorFocus($event)"
                                    @ready="onEditorReady($event)"
                                    style="height:100%">
                                </quill-editor>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

var toolbarOptions = [
  ["bold", "italic", "underline", "strike", "image"], // toggled buttons
  ["blockquote"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }]
  // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  // [{ 'direction': 'rtl' }],                         // text direction

  // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  // [{ 'font': [] }],
  // [{ 'align': [] }],

  // ['clean']                                         // remove formatting button
];

export default {
  data() {
    return {
      content: "<p></p>",
      editorOption: {
        modules: {
          toolbar: toolbarOptions
        }
      }
    };
  },
  mounted() {
    console.log("this is current quill instance object", this.myQuillEditor);
  },
  methods: {
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    }
  },
  components: {
    "quill-editor": quillEditor
  }
  // Omit the same parts as in the following component sample code
  // ...
};
</script>
<style lang="stylus" scoped>
@require '~@/assets/stylus/variable';

$btn-color = #fff;

#app {
    .app-view-with-header {
        top: 0;
    }
}

.container
    padding 0

.app-header-icon 
    margin: auto 0
    color: $colorFont
    width: 36px
    height: 36px
    line-height: 36px

</style>

