import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { RowDeleteTableComponent } from './row-delete-table.component';
import { MatCommonModule } from '@angular/material/core';

const meta: Meta<RowDeleteTableComponent> = {
    component: RowDeleteTableComponent,
    title: 'RowDeleteTableComponent',
    decorators: [
      moduleMetadata({
          imports: [ MatCommonModule, RowDeleteTableComponent]
      }),
      componentWrapperDecorator(story => `<div style="padding: 4em; background-color: #000;">${story}</div>`),
    ]
  };
  
  export default meta;
  
  type Story = StoryObj<RowDeleteTableComponent>;
  const styles = [  
    'https://fonts.googleapis.com/icon?family=Material+Icons',  
    'node_modules/@angular/material/prebuilt-themes/indigo-pink.css',  
  ];  
  

  export const Primary: Story = {
    args: {
      //displayedColumns: ['size', 'cover'] as Array<string>,
      dataSource: [
        { id: 1, size: 'full', cover: 'none'},
        { id: 1, size: 'full', cover: 'none'}
      ]
    },
  };