<template>
    <!-- Or manually control the data synchronization（手动控制数据流）  -->
    <quill-editor ref="myTextEditor"
                      v-model="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
    </quill-editor>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike', 'image'],        // toggled buttons
    ['blockquote'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }]
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
            console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
            console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
            console.log('editor ready!', editor)
        }
    },
    components: {
            'quill-editor': quillEditor
    }
    // Omit the same parts as in the following component sample code
    // ...
};
</script>
<style lang="stylus" scoped>
    #app 
        .app-view-with-header
            top 0
</style>

