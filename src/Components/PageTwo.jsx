import React from 'react'
import { myContext } from '../App'
import Table from 'react-bootstrap/Table';

const PageTwo = ({ value, ...props }) => (

    <div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>TrackPlan Test</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Director</td>
                    <td>Mark</td>
                    <td>Cochrane</td>
                </tr>

            </tbody>
        </Table>

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
