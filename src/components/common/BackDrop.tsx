const BackDrop: React.FC<{onClick: () => void}> = (props) => {
  return <div className="backdrop" onClick={props.onClick}> </div>;
};

export default BackDrop;
