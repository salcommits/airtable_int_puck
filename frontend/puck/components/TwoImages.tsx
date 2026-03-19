import type { ComponentConfig } from '@measured/puck';
import type { Base } from '@airtable/blocks/interface/models';

export type TwoImagesProps = {
  layout: 'side-by-side' | 'stacked' | '60-40' | '40-60';
  gap: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  
  // Image 1
  imageUrl1: string;
  width1: 'full' | '3/4' | '1/2' | '1/3' | '1/4' | 'auto';
  aspectRatio1: 'auto' | '1:1' | '16:9' | '4:3' | '3:2' | '21:9';
  objectFit1: 'cover' | 'contain' | 'fill' | 'none';
  borderRadius1: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow1: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  altText1: string;
  
  // Image 2
  imageUrl2: string;
  width2: 'full' | '3/4' | '1/2' | '1/3' | '1/4' | 'auto';
  aspectRatio2: 'auto' | '1:1' | '16:9' | '4:3' | '3:2' | '21:9';
  objectFit2: 'cover' | 'contain' | 'fill' | 'none';
  borderRadius2: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow2: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  altText2: string;
};

export function createTwoImages(_base: Base): ComponentConfig<TwoImagesProps> {
  return {
    label: 'Two Images',
    fields: {
      layout: {
        type: 'select',
        label: 'Layout',
        options: [
          { label: 'Side by Side (50/50)', value: 'side-by-side' },
          { label: 'Stacked', value: 'stacked' },
          { label: '60/40 Split', value: '60-40' },
          { label: '40/60 Split', value: '40-60' },
        ],
      },
      gap: {
        type: 'select',
        label: 'Gap Between Images',
        options: [
          { label: 'None', value: 'none' },
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
          { label: 'Extra Large', value: 'xl' },
        ],
      },
      
      // Image 1 fields
      imageUrl1: {
        type: 'text',
        label: 'Image 1 URL',
      },
      width1: {
        type: 'select',
        label: 'Image 1 Width',
        options: [
          { label: 'Full Width', value: 'full' },
          { label: '3/4', value: '3/4' },
          { label: '1/2', value: '1/2' },
          { label: '1/3', value: '1/3' },
          { label: '1/4', value: '1/4' },
          { label: 'Auto', value: 'auto' },
        ],
      },
      aspectRatio1: {
        type: 'select',
        label: 'Image 1 Aspect Ratio',
        options: [
          { label: 'Auto', value: 'auto' },
          { label: 'Square (1:1)', value: '1:1' },
          { label: 'Widescreen (16:9)', value: '16:9' },
          { label: 'Standard (4:3)', value: '4:3' },
          { label: 'Classic (3:2)', value: '3:2' },
          { label: 'Ultra Wide (21:9)', value: '21:9' },
        ],
      },
      objectFit1: {
        type: 'select',
        label: 'Image 1 Fit',
        options: [
          { label: 'Cover', value: 'cover' },
          { label: 'Contain', value: 'contain' },
          { label: 'Fill', value: 'fill' },
          { label: 'None', value: 'none' },
        ],
      },
      borderRadius1: {
        type: 'select',
        label: 'Image 1 Border Radius',
        options: [
          { label: 'None', value: 'none' },
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
          { label: 'Extra Large', value: 'xl' },
          { label: 'Full (Circle/Pill)', value: 'full' },
        ],
      },
      shadow1: {
        type: 'select',
        label: 'Image 1 Shadow',
        options: [
          { label: 'None', value: 'none' },
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
          { label: 'Extra Large', value: 'xl' },
        ],
      },
      altText1: {
        type: 'text',
        label: 'Image 1 Alt Text',
      },
      
      // Image 2 fields
      imageUrl2: {
        type: 'text',
        label: 'Image 2 URL',
      },
      width2: {
        type: 'select',
        label: 'Image 2 Width',
        options: [
          { label: 'Full Width', value: 'full' },
          { label: '3/4', value: '3/4' },
          { label: '1/2', value: '1/2' },
          { label: '1/3', value: '1/3' },
          { label: '1/4', value: '1/4' },
          { label: 'Auto', value: 'auto' },
        ],
      },
      aspectRatio2: {
        type: 'select',
        label: 'Image 2 Aspect Ratio',
        options: [
          { label: 'Auto', value: 'auto' },
          { label: 'Square (1:1)', value: '1:1' },
          { label: 'Widescreen (16:9)', value: '16:9' },
          { label: 'Standard (4:3)', value: '4:3' },
          { label: 'Classic (3:2)', value: '3:2' },
          { label: 'Ultra Wide (21:9)', value: '21:9' },
        ],
      },
      objectFit2: {
        type: 'select',
        label: 'Image 2 Fit',
        options: [
          { label: 'Cover', value: 'cover' },
          { label: 'Contain', value: 'contain' },
          { label: 'Fill', value: 'fill' },
          { label: 'None', value: 'none' },
        ],
      },
      borderRadius2: {
        type: 'select',
        label: 'Image 2 Border Radius',
        options: [
          { label: 'None', value: 'none' },
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
          { label: 'Extra Large', value: 'xl' },
          { label: 'Full (Circle/Pill)', value: 'full' },
        ],
      },
      shadow2: {
        type: 'select',
        label: 'Image 2 Shadow',
        options: [
          { label: 'None', value: 'none' },
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
          { label: 'Extra Large', value: 'xl' },
        ],
      },
      altText2: {
        type: 'text',
        label: 'Image 2 Alt Text',
      },
    },
    defaultProps: {
      layout: 'side-by-side',
      gap: 'md',
      
      imageUrl1: '',
      width1: 'full',
      aspectRatio1: 'auto',
      objectFit1: 'cover',
      borderRadius1: 'none',
      shadow1: 'none',
      altText1: '',
      
      imageUrl2: '',
      width2: 'full',
      aspectRatio2: 'auto',
      objectFit2: 'cover',
      borderRadius2: 'none',
      shadow2: 'none',
      altText2: '',
    },
    render: (props) => {
      const {
        layout,
        gap,
        imageUrl1,
        width1,
        aspectRatio1,
        objectFit1,
        borderRadius1,
        shadow1,
        altText1,
        imageUrl2,
        width2,
        aspectRatio2,
        objectFit2,
        borderRadius2,
        shadow2,
        altText2,
      } = props;

      const widthClasses = {
        full: 'w-full',
        '3/4': 'w-3/4',
        '1/2': 'w-1/2',
        '1/3': 'w-1/3',
        '1/4': 'w-1/4',
        auto: 'w-auto',
      };

      const aspectRatioClasses = {
        auto: 'aspect-auto',
        '1:1': 'aspect-square',
        '16:9': 'aspect-video',
        '4:3': 'aspect-[4/3]',
        '3:2': 'aspect-[3/2]',
        '21:9': 'aspect-[21/9]',
      };

      const objectFitClasses = {
        cover: 'object-cover',
        contain: 'object-contain',
        fill: 'object-fill',
        none: 'object-none',
      };

      const borderRadiusClasses = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      };

      const shadowClasses = {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
      };

      const gapClasses = {
        none: 'gap-0',
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
      };

      const getLayoutClasses = () => {
        switch (layout) {
          case 'side-by-side':
            return 'grid grid-cols-1 md:grid-cols-2';
          case 'stacked':
            return 'flex flex-col';
          case '60-40':
            return 'grid grid-cols-1 md:grid-cols-[60fr_40fr]';
          case '40-60':
            return 'grid grid-cols-1 md:grid-cols-[40fr_60fr]';
          default:
            return 'grid grid-cols-1 md:grid-cols-2';
        }
      };

      const renderImage = (
        imageUrl: string,
        width: string,
        aspectRatio: string,
        objectFit: string,
        borderRadius: string,
        shadow: string,
        altText: string,
        imageNumber: number
      ) => {
        if (!imageUrl) {
          return (
            <div className="flex items-center justify-center min-h-[150px] bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
              Image {imageNumber} - Not Selected
            </div>
          );
        }

        return (
          <div className="flex items-center justify-center">
            <img
              src={imageUrl}
              alt={altText || `Image ${imageNumber}`}
              className={`${widthClasses[width as keyof typeof widthClasses]} ${aspectRatioClasses[aspectRatio as keyof typeof aspectRatioClasses]} ${objectFitClasses[objectFit as keyof typeof objectFitClasses]} ${borderRadiusClasses[borderRadius as keyof typeof borderRadiusClasses]} ${shadowClasses[shadow as keyof typeof shadowClasses]} max-w-full h-auto`}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+Load+Error';
                e.currentTarget.alt = `Image ${imageNumber} load error`;
              }}
            />
          </div>
        );
      };

      return (
        <div className={`p-4 ${getLayoutClasses()} ${gapClasses[gap]}`}>
          {renderImage(imageUrl1, width1, aspectRatio1, objectFit1, borderRadius1, shadow1, altText1, 1)}
          {renderImage(imageUrl2, width2, aspectRatio2, objectFit2, borderRadius2, shadow2, altText2, 2)}
        </div>
      );
    },
  };
}

