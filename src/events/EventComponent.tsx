import { ChangeEvent, DragEvent } from 'react';

const EventComponent: React.FC = () => {
  const onChange = (event: ChangeEvent) => {
    console.log(event);
  };
  const onDragStart = (event: DragEvent) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
