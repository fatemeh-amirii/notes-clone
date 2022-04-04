import React, { useEffect, useState } from "react";

import "./NoteEditor.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/fa";

const NoteEditor = ( {getNoteFromEditor} ) => {
  const [editor, setEditor] = useState();


  //send data from editor to parent component(Note.js)
 const sendNote=()=>{
    getNoteFromEditor(editor)
 }
useEffect(()=>{
  sendNote()
},[editor])

  return (
    <div className="editor " >
      <CKEditor className="cke_rtl"
        editor={ClassicEditor}
        data=""
        config={{
          language: {
            ui: "en",
            content: "en",
          },

          fontFamily: {
            options: [
              "IRANSans",
              "Ubuntu, Arial, sans-serif",
              "Ubuntu Mono, Courier New, Courier, monospace",
            ],
            supportAllValues: true,
          },
          fontSize: {
            fontSize: {
              options: [9, 11, 13, "default", 17, 19, 21],
            },
          },

          typing: {
            transformations: {
              remove: [
                // Do not use the transformations from the
                // 'symbols' and 'quotes' groups.
                "symbols",
                "quotes",

                // As well as the following transformations.
                "arrowLeft",
                "arrowRight",
              ],

              extra: [
                // Add some custom transformations – e.g. for emojis.
                { from: ":)", to: "🙂" },
                { from: ":+1:", to: "👍" },
                { from: ":tada:", to: "🎉" },

                // You can also define patterns using regular expressions.
                // Note: The pattern must end with `$` and all its fragments must be wrapped
                // with capturing groups.
                // The following rule replaces ` "foo"` with ` «foo»`.
                {
                  from: /(^|\s)(")([^"]*)(")$/,
                  to: [null, "«", null, "»"],
                },

                // Finally, you can define `to` as a callback.
                // This (naive) rule will auto-capitalize the first word after a period.
                {
                  from: /(\. )([a-z])$/,
                  to: (matches) => [null, matches[1].toUpperCase()],
                },
              ],
            },
          },
          toolbar: {
            items: [
              "heading",
              "|",
              "fontFamily",
              "fontsize",
              "|",
              "alignment",
              "|",
              "fontColor",
              "fontBackgroundColor",
              "|",
              "bold",
              "italic",
              "strikethrough",
              "underline",
              "subscript",
              "superscript",
              "|",
              "link",
              "|",
              "outdent",
              "indent",
              "|",
              "bulletedList",
              "numberedList",
              "todoList",
              "|",
              "code",
              "codeBlock",
              "|",
              "insertTable",
              "|",
              "blockQuote",
              "|",
              "undo",
              "redo",
              "Highlight",
            ],
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditor(data);
        //  console.log( { event, editor, data } );
        }}
      />
    </div>
  );
};
export default NoteEditor;
