import React from 'react';
import Top from './top';
import Bottom from './bottom';
import './layout.css';

class Layout extends React.Component {

        render()
        {
            return (
                <div className = 'Layout'>
                    <Top startLeft={1000} /> <br />
                    <div className="Ad">1AD &nbsp; &nbsp; &nbsp; &nbsp;   . &nbsp; &nbsp; &nbsp;.  &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp; &nbsp;. &nbsp; &nbsp; &nbsp;. &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp;  &nbsp;  &nbsp; 100AD</div>
                    <Bottom startLeft={101} /><br />
                    <div>2001AD &nbsp; &nbsp; &nbsp; &nbsp;   . &nbsp; &nbsp; &nbsp;.  &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp; &nbsp;. &nbsp; &nbsp; &nbsp;. &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp;  &nbsp;  &nbsp; 2018AD</div>
                </div>
            )
        }
    }

export default Layout;