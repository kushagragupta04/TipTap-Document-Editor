"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { ImagePlus } from "tiptap-image-plus";
import { editorContent } from "@/lib/editor-content";
import {
  Toolbar,
  ToolbarRef
} from "./editor/toolbar";
import { useRef } from "react";
import { PaginationPlus, PAGE_SIZES } from "tiptap-pagination-plus";
import { TableKitPlus } from "tiptap-table-plus";

const TiptapEditor = ({ onlyEditor }: { onlyEditor: boolean }) => {
  const toolbarRef = useRef<ToolbarRef | null>(null);
  const editor = useEditor({
    extensions: [
      StarterKit,
      // Underline,
      TextStyle,
      Color,
      // ListItem,
      TableKitPlus,
      ImagePlus.configure({
        inline: false,
        containerStyle: {
          background:
            "linear-gradient(90deg,rgba(30, 88, 117, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
          padding: "25px",
          borderRadius: "10px",
        },
      }),
      PaginationPlus.configure({
        pageGap: 0,
        pageBreakBackground: "transparent",
        footerRight: "",
        footerLeft: "",
        headerLeft: "",
        headerRight: "",
        contentMarginTop: 0,
        contentMarginBottom: 0,
        ...PAGE_SIZES.A4,
        marginTop: 96,
        marginBottom: 96,
        marginLeft: 96,
        marginRight: 96,
        customFooter: {},
        customHeader: {},
        customPage: {},
        onHeaderClick: (params) => {
          toolbarRef.current?.onHeaderClick(params);
        },
        onFooterClick: (params) => {
          toolbarRef.current?.onFooterClick(params);
        },
      }),
    ],
    // content: editorContentLong,
    content: editorContent,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px]",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getJSON());
    },
  });

  if (!editor) {
    return null;
  }


  return (
    <div className="">
      <Toolbar
        onlyEditor={onlyEditor}
        optionsList={[
          "undo",
          "redo",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "heading",
          "list",
          "image",
          "table",
          "duplicate-table",
          "blockquote",
          "print",
          "page-size",
          "header-footer",
        ]}
        editor={editor}
        ref={toolbarRef}
      />
      <div className="overflow-x-auto relative" id="printableArea">
        <EditorContent editor={editor} id="editor" className="w-full mb-5 mt-2 editor-container" />
      </div>
    </div>
  );
};

export default TiptapEditor;
