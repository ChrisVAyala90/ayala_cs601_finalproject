import React, { useState, useEffect } from 'react';
import './KanbanBoard.css';

const initialColumns = () => ({
  backlog: {
    name: 'Backlog',
    items: []
  },
  pretrial: {
    name: 'Pretrial',
    items: []
  },
  inTrial: {
    name: 'In-trial',
    items: []
  },
  postTrial: {
    name: 'Post-trial',
    items: []
  },
  closed: {
    name: 'Closed',
    items: []
  }
});

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      fetch('${process.env.PUBLIC_URL}/data/activeCases.json')
        .then(response => response.json())
        .then(data => {
          const updatedColumns = initialColumns();
          data.forEach(item => {
            updatedColumns.backlog.items.push({ ...item, status: 'backlog' });
          });
          setColumns(updatedColumns);
          setDataLoaded(true);
        });
    }
  }, [dataLoaded]);

  const onDragStart = (e, item, source) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
    e.dataTransfer.setData('source', source);
  };

  const onDrop = (e, dest) => {
    const item = JSON.parse(e.dataTransfer.getData('item'));
    const source = e.dataTransfer.getData('source');

    if (source !== dest) {
      const sourceColumn = columns[source];
      const destColumn = columns[dest];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const index = sourceItems.findIndex(i => i.id === item.id);

      if (index !== -1) {
        sourceItems.splice(index, 1);
        destItems.push({ ...item, status: dest });

        setColumns({
          ...columns,
          [source]: {
            ...sourceColumn,
            items: sourceItems
          },
          [dest]: {
            ...destColumn,
            items: destItems
          }
        });
      }
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="kanban-board">
      {Object.entries(columns).map(([columnId, column]) => (
        <div
          className="kanban-column"
          key={columnId}
          onDrop={(e) => onDrop(e, columnId)}
          onDragOver={onDragOver}
        >
          <h2>{column.name}</h2>
          <div className="kanban-droppable">
            {column.items.map((item) => (
              <div
                key={`${columnId}-${item.id}`} // Ensuring unique keys
                className="kanban-item"
                draggable
                onDragStart={(e) => onDragStart(e, item, columnId)}
              >
                <p><strong>Case Number:</strong> {item.caseNumber}</p>
                <p><strong>Title:</strong> {item.name}</p>
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Status:</strong> {item.status}</p>
                <p><strong>Date:</strong> {item.date}</p>
                <p><strong>Attorney:</strong> {item.attorney}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
