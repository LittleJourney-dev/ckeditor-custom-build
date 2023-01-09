/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import Markdown from "@ckeditor/ckeditor5-markdown-gfm/src/markdown.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';


import "./custom.css";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Autoformat,
  AutoImage,
  Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
  ImageInsert,
  ImageResize,
  LinkImage,
  Bold,
  Essentials,
  Italic,
  Link,
  List,
  Markdown,
  Paragraph,
  Underline,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "underline",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "undo",
      "redo",
      "insertImage",
    ],
  },
  language: "en",
  image: {
		toolbar: [
			'imageTextAlternative',
			'toggleImageCaption',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
      'linkImage',
		]
	},
};

export default Editor;
