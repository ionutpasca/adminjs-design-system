import React from 'react';
import { DROPZONE_DEFAULT_TRANSLATIONS, DropZone } from "./index.js";
export const Default = {
  render: ({
    multiple,
    maxSize,
    mimeTypes,
    uploadLimitIn,
    placeholder,
    acceptedSize,
    acceptedType,
    unsupportedSize,
    unsupportedType
  }) => /*#__PURE__*/React.createElement(DropZone, {
    multiple: multiple,
    validate: {
      maxSize,
      mimeTypes
    },
    uploadLimitIn: uploadLimitIn,
    translations: {
      placeholder,
      acceptedSize,
      acceptedType,
      unsupportedSize,
      unsupportedType
    }
  })
};
const meta = {
  title: 'DesignSystem/Molecules/DropZone',
  component: DropZone,
  args: {
    multiple: false,
    validate: {
      maxSize: 10240000,
      mimeTypes: ['application/pdf', 'image/png']
    },
    uploadLimitIn: 'MB',
    placeholder: DROPZONE_DEFAULT_TRANSLATIONS.placeholder,
    acceptedSize: DROPZONE_DEFAULT_TRANSLATIONS.acceptedSize,
    acceptedType: DROPZONE_DEFAULT_TRANSLATIONS.acceptedType,
    unsupportedSize: DROPZONE_DEFAULT_TRANSLATIONS.unsupportedSize,
    unsupportedType: DROPZONE_DEFAULT_TRANSLATIONS.unsupportedType
  },
  argTypes: {
    multiple: {
      description: 'If drop zone should handle multiple uploads',
      control: {
        type: 'boolean'
      }
    },
    maxSize: {
      name: 'validate.maxSize',
      description: 'Maximum size of the uploaded file in bytes. If not defined - all files are allowed',
      control: {
        type: 'number'
      }
    },
    mimeTypes: {
      name: 'validate.mimeTypes',
      description: 'Allowed file types',
      control: {
        type: 'object'
      }
    },
    uploadLimitIn: {
      description: 'Upload limit display',
      options: ['B', 'KB', 'MB', 'GB', 'TB'],
      control: {
        type: 'select'
      }
    },
    placeholder: {
      name: 'translations.placeholder',
      description: 'Translated placeholder',
      control: {
        type: 'text'
      }
    },
    acceptedSize: {
      name: 'translations.acceptedSize',
      description: 'Translated accepted size label',
      control: {
        type: 'text'
      }
    },
    acceptedType: {
      name: 'translations.acceptedType',
      description: 'Translated accepted type label',
      control: {
        type: 'text'
      }
    },
    unsupportedSize: {
      name: 'translations.unsupportedSize',
      description: 'Translated validation error for unsupported size',
      control: {
        type: 'text'
      }
    },
    unsupportedType: {
      name: 'translations.unsupportedType',
      description: 'Translated validation error for unsupported type',
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;