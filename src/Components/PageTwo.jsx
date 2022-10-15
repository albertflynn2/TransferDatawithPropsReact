import React from 'react'
import { myContext } from '../App'


const PageTwo = ({ value, ...props }) => (

    <div>

        <h1>Page Two</h1>

        <span class="word-text">
            {value.word || ""}
        </span>

    </div>
);

const PageTwoContainer = props => (
    <myContext.Consumer>
        {value => (
            <PageTwo {...props} value={value} />
        )}
    </myContext.Consumer>
);

export default PageTwoContainer;


{/* */ }