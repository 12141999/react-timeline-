import React from 'react';

const Bottom = props => {
    let startLeft = props.startLeft;
    let arr = [];
    for (let i = 0; i < 19; i++) {
      arr.push({
        left: startLeft,
        right: startLeft + 99
      });
      startLeft = startLeft + 100;
    }
    return (
      <div>
        {arr.map((item, id) => {
          return (
            <div key={id}> <br />
              {item.left}AD&nbsp; &nbsp; &nbsp; &nbsp;   . &nbsp; &nbsp; &nbsp;.  &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp; &nbsp;. &nbsp; &nbsp; &nbsp;. &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp;  &nbsp;  &nbsp;   {item.right}AD
            </div>
          );
        })}
      </div>
    );
  };

export default Bottom;