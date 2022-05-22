import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Cards from './cards'

const Board = props =>{

    
  return(
     <DndProvider backend={HTML5Backend}>

     </DndProvider>
  );  
};

export default Board;