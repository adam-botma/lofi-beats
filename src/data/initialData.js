const initialData = {
  loops: {
    'loop-1': { id: 'loop-1', title: '', type:'bass', loopURL: '' },
    'loop-2': { id: 'loop-2', title: '', type:'bass', loopURL: '' },
    'loop-3': { id: 'loop-3', title: '', type:'bass', loopURL: '' },
    'loop-4': { id: 'loop-4', title: '', type: 'drum', loopURL: '' },
    'loop-5': { id: 'loop-5', title: '', type: 'drum', loopURL: '' },
    'loop-6': { id: 'loop-6', title: '', type: 'drum', loopURL: '' },
    'loop-7': { id: 'loop-7', title: '', type: 'melody', loopURL: '' },
    'loop-8': { id: 'loop-8', title: '', type: 'melody', loopURL: '' },
    'loop-9': { id: 'loop-9', title: '', type: 'melody', loopURL: '' },
    'loop-10': { id: 'loop-10', title: '', type: 'bass', loopURL: '' },
    'loop-11': { id: 'loop-11', title: '', type: 'bass', loopURL: '' },
    'loop-12': { id: 'loop-12', title: '', type: 'bass', loopURL: '' },
    'loop-13': { id: 'loop-13', title: '', type: 'drum', loopURL: '' },
    'loop-14': { id: 'loop-14', title: '', type: 'drum', loopURL: '' },
    'loop-15': { id: 'loop-15', title: '', type: 'drum', loopURL: '' },
    'loop-16': { id: 'loop-16', title: '', type: 'melody', loopURL: '' },
    'loop-17': { id: 'loop-17', title: '', type: 'melody', loopURL: '' },
    'loop-18': { id: 'loop-18', title: '', type: 'melody', loopURL: '' },
  },
  columns: {
    'column-1': { id: 'column-1', loopIds: ['loop-1', 'loop-2', 'loop-3'], },
    'column-2': { id: 'column-2', loopIds: ['loop-4', 'loop-5', 'loop-6'], },
    'column-3': { id: 'column-3', loopIds: ['loop-7', 'loop-8', 'loop-9'], },
    'column-4': { id: 'column-4', loopIds: ['loop-10', 'loop-11', 'loop-12'], },
    'column-5': { id: 'column-5', loopIds: ['loop-13', 'loop-14', 'loop-15'], },
    'column-6': { id: 'column-6', loopIds: ['loop-16', 'loop-17', 'loop-18'], },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6'],
  plugs: [
    {
      title: 'plug-1',
      hasLoop: false
    },
    {
      title: 'plug-2',
      hasLoop: false
    },
    {
      title: 'plug-3',
      hasLoop: false
    },
    {
      title: 'plug-4',
      hasLoop: false
    }
  ]
}

export default initialData;
