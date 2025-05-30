function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, useCallback } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { EditorWrapper } from "./tinymce-editor.styled.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface

const TinyMCE = props => {
  const editorRef = useRef(null);
  const {
    onChange,
    value,
    options = {}
  } = props;
  const {
    plugins = null,
    toolbar = null,
    init = null,
    contentStyle = null,
    height = null,
    ...otherProps
  } = options;
  const handleUpdate = useCallback(newValue => {
    onChange(newValue);
  }, []);
  const handleInit = (evt, editor) => {
    editorRef.current = editor;
  };
  const defaultPlugins = ['image', 'code', 'table', 'link', 'media', 'codesample'];
  const defaultToolbar = ['undo redo formatselect bold italic backolor alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat link image'];
  const defaultInit = {
    height: height !== null ? height : 500,
    menubar: true,
    plugins: plugins !== null ? plugins : defaultPlugins,
    toolbar: toolbar !== null ? toolbar : defaultToolbar,
    file_picker_types: 'file image media',
    file_picker_callback(cb, value, meta) {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');

      /*
        Note: In modern browsers input[type="file"] is functional without
        even adding it to the DOM, but that might not be the case in some older
        or quirky browsers like IE, so you might want to add it to the DOM
        just in case, and visually hide it. And do not forget do remove it
        once you do not need it anymore.
      */

      input.onchange = function fpOnChange(e) {
        // eslint-disable-next-line react/no-this-in-sfc
        const file = e.target?.files?.[0];
        const reader = new FileReader();
        reader.onload = function fpOnLoad() {
          /*
            Note: Now we need to register the blob in TinyMCEs image blob
            registry. In the next release this part hopefully won't be
            necessary, as we are looking to handle it internally.
          */
          const id = `blobid${new Date().getTime()}`;
          const {
            blobCache
          } = window.tinymce?.activeEditor?.editorUpload ?? {};
          const base64 = reader.result?.split?.(',')?.[1];
          const blobInfo = blobCache.create(id, file, base64);
          blobCache.add(blobInfo);

          /* call the callback and populate the Title field with the file name */
          cb(blobInfo.blobUri(), {
            title: file.name
          });
        };
        reader.readAsDataURL(file);
      };
      input.click();
    },
    content_style: contentStyle !== null ? contentStyle : 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  };
  return /*#__PURE__*/React.createElement(EditorWrapper, null, /*#__PURE__*/React.createElement(Editor, _extends({
    tinymceScriptSrc: "https://cdn.jsdelivr.net/npm/tinymce@6.8.2/tinymce.min.js",
    onInit: handleInit,
    onEditorChange: handleUpdate,
    value: value,
    init: init !== null ? init : defaultInit
  }, otherProps)));
};
export { TinyMCE };
export default TinyMCE;