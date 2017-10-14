import React from 'react';

var App = props => (
    <div>
      <select className="form-control" onChange={e => props.onSelectChannel(e.target.options[e.target.selectedIndex].value)}>
        {Array.from(props.logsReducer.channels).map(c => (
            <option key={c[0]} selected={c[0] == props.logsReducer.current ? 'selected' : ''}>{c[0]}</option>
        ))}
    </select>
        {props.logsReducer.channels.get(props.logsReducer.current) &&
         <div className="log" dangerouslySetInnerHTML={{__html: props.logsReducer.channels.get(props.logsReducer.current)}}>
         </div>
        }
    </div>
);

export default App;
