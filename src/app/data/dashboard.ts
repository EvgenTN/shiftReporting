export const dashboard: any[] = [
  {
    gridster: {
      x: 1,
      y: 1,
      cols: 4,
      rows: 1,
    },
    element: {
      label: 'Label 1',
      componentKey: 'label',
      name: 'string',
      key: 'label1',
      isRequired: false,
    }
  },

  {
    gridster: {
      x: 1,
      y: 2,
      cols: 4,
      rows: 1,
    },
    element: {
      componentKey: 'dropdown',
      name: 'dropdown',
      key: 'dropdown1',
      isRequired: true,
      options: [
        { key: 'test4', value: 'test 4' },
        { key: 'test5', value: 'test 5' },
        { key: 'test6', value: 'test 6' }
      ],
    }
  },

  {
    gridster: {
      x: 1,
      y: 3,
      cols: 4,
      rows: 1,
    },
    element: { componentKey: 'input' }
  },
  {
    gridster: {
      x: 5,
      y: 1,
      cols: 1,
      rows: 1,
    },
    element: { componentKey: 'checkbox' }
  },
  {
    gridster: {
      x: 5,
      y: 2,
      cols: 1,
      rows: 1,
    },
    element: { componentKey: 'checkbox' }
  },
  {
    gridster: {
      x: 1,
      y: 4,
      cols: 4,
      rows: 2,
    },
    element: { componentKey: 'textarea' }
  },
];
