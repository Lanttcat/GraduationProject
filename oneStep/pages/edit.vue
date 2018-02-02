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

export default {
    data() {
        return {
            content: "<p>example content</p>",
            editorOption: {
                /* quill options */
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