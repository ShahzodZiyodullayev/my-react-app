import { Flipper, Flipped } from "react-flip-toolkit";
import { useState } from "react";
import "./nimadir.css";

const listData = [...Array(4).keys()];
const createCardFlipId = (index) => `listItem-${index}`;

const ListItem = ({ index, onClick }) => {
  return (
    <Flipped flipId={createCardFlipId(index)}>
      <div className="listItem" onClick={() => onClick(index)}>
        <Flipped flipId={`avatar-${index}`}>
          <div className="avatar" />
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index }) => {
  return (
    <Flipped flipId={`avatar-${index}`}>
      <div className="avatar avatarExpanded" />
    </Flipped>
  );
};

const Nimadir = () => {
  const [focused, setFocused] = useState(null);
  const onClicks = (index) =>
    setFocused((prev) => (prev === index ? null : index));

  return (
    <Flipper
      flipKey={focused}
      className="staggered-list-content"
      spring="gentle"
    >
      <ul className="list">
        {listData.map((index) => {
          return (
            <li key={index}>
              <ListItem index={index} key={index} onClick={onClicks} />
            </li>
          );
        })}
      </ul>
      <ExpandedListItem index={focused} onClick={onClicks} />
    </Flipper>
  );
};

export default Nimadir;
