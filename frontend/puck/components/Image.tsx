import type { ComponentConfig } from '@measured/puck';

export type ImageProps = {
  imageUrl: string;
  altText: string;
  width: 'full' | '3/4' | '1/2' | '1/3' | '1/4' | 'auto';
  aspectRatio: 'auto' | 'square' | '16/9' | '4/3' | '3/2' | '21/9';
  objectFit: 'cover' | 'contain' | 'fill' | 'none';
  alignment: 'left' | 'center' | 'right';
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl';
};

const Image: ComponentConfig<ImageProps> = {
  fields: {
    imageUrl: {
      type: 'text',
      label: 'Image URL',
    },
    altText: {
      type: 'text',
      label: 'Alt Text (for accessibility)',
    },
    width: {
      type: 'select',
      label: 'Width',
      options: [
        { label: 'Full Width', value: 'full' },
        { label: '3/4 Width', value: '3/4' },
        { label: '1/2 Width', value: '1/2' },
        { label: '1/3 Width', value: '1/3' },
        { label: '1/4 Width', value: '1/4' },
        { label: 'Auto (original size)', value: 'auto' },
      ],
    },
    aspectRatio: {
      type: 'select',
      label: 'Aspect Ratio',
      options: [
        { label: 'Auto (original)', value: 'auto' },
        { label: 'Square (1:1)', value: 'square' },
        { label: 'Widescreen (16:9)', value: '16/9' },
        { label: 'Standard (4:3)', value: '4/3' },
        { label: 'Classic (3:2)', value: '3/2' },
        { label: 'Ultra Wide (21:9)', value: '21/9' },
      ],
    },
    objectFit: {
      type: 'select',
      label: 'Image Fit',
      options: [
        { label: 'Cover (fill area)', value: 'cover' },
        { label: 'Contain (fit inside)', value: 'contain' },
        { label: 'Fill (stretch)', value: 'fill' },
        { label: 'None (original)', value: 'none' },
      ],
    },
    alignment: {
      type: 'radio',
      label: 'Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    borderRadius: {
      type: 'select',
      label: 'Border Radius',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
        { label: 'Full (circle/pill)', value: 'full' },
      ],
    },
    shadow: {
      type: 'select',
      label: 'Shadow',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
      ],
    },
  },
  defaultProps: {
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    altText: 'Placeholder image',
    width: 'full',
    aspectRatio: 'auto',
    objectFit: 'cover',
    alignment: 'center',
    borderRadius: 'md',
    shadow: 'md',
  },
  render: ({ imageUrl, altText, width, aspectRatio, objectFit, alignment, borderRadius, shadow }) => {
    const widthClasses = {
      full: 'w-full',
      '3/4': 'w-3/4',
      '1/2': 'w-1/2',
      '1/3': 'w-1/3',
      '1/4': 'w-1/4',
      auto: 'w-auto',
    };

    const alignmentClasses = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
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
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    };

    const getAspectRatioStyle = () => {
      const ratios: Record<string, string> = {
        auto: 'auto',
        square: '1 / 1',
        '16/9': '16 / 9',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '21/9': '21 / 9',
      };
      return ratios[aspectRatio] || 'auto';
    };

    // If no image URL, show placeholder
    if (!imageUrl) {
      return (
        <div className={`flex ${alignmentClasses[alignment]} p-4`}>
          <div
            className={`${widthClasses[width]} bg-gray-200 dark:bg-gray-700 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} flex items-center justify-center`}
            style={{
              aspectRatio: getAspectRatioStyle(),
              minHeight: aspectRatio === 'auto' ? '200px' : undefined,
            }}
          >
            <div className="text-center p-8">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Add an image URL
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`flex ${alignmentClasses[alignment]} p-4`}>
        <img
          src={imageUrl}
          alt={altText || 'Image'}
          className={`${widthClasses[width]} ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}`}
          style={{
            aspectRatio: getAspectRatioStyle(),
            objectFit: objectFit,
          }}
          onError={(e) => {
            // If image fails to load, show error state
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.nextElementSibling) {
              (target.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        {/* Error fallback (hidden by default) */}
        <div
          className={`${widthClasses[width]} bg-red-50 dark:bg-red-900/20 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} items-center justify-center p-8`}
          style={{
            aspectRatio: getAspectRatioStyle(),
            minHeight: aspectRatio === 'auto' ? '200px' : undefined,
            display: 'none',
          }}
        >
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              Failed to load image
            </p>
          </div>
        </div>
      </div>
    );
  },
};

export default Image;

