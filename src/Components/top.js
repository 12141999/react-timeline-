import React from 'react';

const Top = props => {
    let startLeft = props.startLeft;
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        left: startLeft,
        right: startLeft - 99
      });
      startLeft = startLeft - 100;
    }
    return (
      <div>
        {arr.map((item, id) => {
          return (
            <div key={id}> <br />
              {item.left}BC &nbsp; &nbsp; &nbsp; &nbsp;   . &nbsp; &nbsp; &nbsp;.  &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp; &nbsp;. &nbsp; &nbsp; &nbsp;. &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp;  &nbsp;  &nbsp;     {item.right}BC 
            </div>
          );
        })}
      </div>
    );
  };

export default Top;