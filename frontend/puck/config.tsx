import type { Config, ComponentConfig } from '@measured/puck';
import type { Base } from '@airtable/blocks/interface/models';
import type React from 'react';
import Hero from './components/Hero';
import Columns from './components/Columns';
import Text from './components/Text';
import Image from './components/Image';
import { createTwoImages } from './components/TwoImages';
import { createNumber } from './components/Number';

export function createConfig(base: Base): Config {
  const MissingComponent: ComponentConfig<{ originalType?: string }> = {
    label: 'Missing component',
    fields: {},
    render: ({ originalType }) => (
      <div className="p-4 border border-dashed border-red-300 text-sm text-red-700 bg-red-50 rounded-md">
        Missing component: {originalType || 'Unknown'}
      </div>
    ),
  };

  return {
    components: {
      Hero: Hero as any,
      Columns: Columns as any,
      Text: Text as any,
      Image: Image as any,
      TwoImages: createTwoImages(base) as any,
      Number: createNumber(base) as any,
      MissingComponent: MissingComponent as any,
    },
    categories: {
      layout: {
        components: ['Columns'],
        title: 'Layout',
      },
      freeform: {
        components: ['Hero', 'Text', 'Image', 'TwoImages'],
        title: 'Freeform Components',
      },
      dynamic: {
        components: ['Number'],
        title: 'Dynamic Components',
      },
    },
    root: {
      fields: {
        title: {
          type: 'text',
          label: 'Page Title',
        },
        colors: {
          type: 'custom',
          label: 'Colors',
          render: ({ value, onChange }) => {
            const colors = value || {
              color1: '#1d4ed8',
              color2: '#059669',
              color3: '#dc2626',
              color4: '#d97706',
              color5: '#7c3aed',
              color6: '#0891b2',
              color7: '#db2777',
              color8: '#65a30d',
            };

            const ColorPicker = ({ colorKey, colorValue }: { colorKey: string; colorValue: string }) => (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: '0 0 auto' }}>
                <input
                  type="color"
                  value={colorValue}
                  onChange={(e) => onChange({ ...colors, [colorKey]: e.target.value })}
                  style={{
                    width: '70px',
                    height: '70px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    padding: '0',
                    backgroundColor: colorValue,
                  }}
                />
                <input
                  type="text"
                  value={colorValue}
                  onChange={(e) => onChange({ ...colors, [colorKey]: e.target.value })}
                  placeholder="#000000"
                  style={{
                    width: '70px',
                    padding: '4px 6px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    border: '1px solid #e5e7eb',
                    borderRadius: '4px',
                    textAlign: 'center',
                  }}
                />
              </div>
            );

            return (
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#374151',
                }}>
                  Colors
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '8px 0',
                }}>
                  <ColorPicker colorKey="color1" colorValue={colors.color1} />
                  <ColorPicker colorKey="color2" colorValue={colors.color2} />
                  <ColorPicker colorKey="color3" colorValue={colors.color3} />
                  <ColorPicker colorKey="color4" colorValue={colors.color4} />
                  <ColorPicker colorKey="color5" colorValue={colors.color5} />
                  <ColorPicker colorKey="color6" colorValue={colors.color6} />
                  <ColorPicker colorKey="color7" colorValue={colors.color7} />
                  <ColorPicker colorKey="color8" colorValue={colors.color8} />
                </div>
              </div>
            );
          },
        },
        backgroundColor: {
          type: 'select',
          label: 'Background Colour',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Color 1', value: 'color1' },
            { label: 'Color 2', value: 'color2' },
            { label: 'Color 3', value: 'color3' },
            { label: 'Color 4', value: 'color4' },
            { label: 'Color 5', value: 'color5' },
            { label: 'Color 6', value: 'color6' },
            { label: 'Color 7', value: 'color7' },
            { label: 'Color 8', value: 'color8' },
          ],
        },
      },
      defaultProps: {
        title: 'My Page',
        colors: {
          color1: '#1d4ed8',
          color2: '#059669',
          color3: '#dc2626',
          color4: '#d97706',
          color5: '#7c3aed',
          color6: '#0891b2',
          color7: '#db2777',
          color8: '#65a30d',
        },
        backgroundColor: 'white',
      },
      render: ({ children, colors }) => {
        // Inject colors as CSS custom properties so all components can access them
        const style = {
          '--color-1': colors?.color1 || '#1d4ed8',
          '--color-2': colors?.color2 || '#059669',
          '--color-3': colors?.color3 || '#dc2626',
          '--color-4': colors?.color4 || '#d97706',
          '--color-5': colors?.color5 || '#7c3aed',
          '--color-6': colors?.color6 || '#0891b2',
          '--color-7': colors?.color7 || '#db2777',
          '--color-8': colors?.color8 || '#65a30d',
        } as React.CSSProperties;

        return (
          <div style={style}>
            {children}
          </div>
        );
      },
    },
  };
}
