import React from "react";
import "./Diff.css";

const Diff = () => {
  return (
    <div className="table-container">
      <h2>Props vs State</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th className="one">Props</th>
            <th className="two">State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Who passes it?</td>
            <td>Parent component</td>
            <td>Inside the component itself</td>
          </tr>
          <tr>
            <td>Can it change?</td>
            <td>No (read-only)</td>
            <td>Yes (can change)</td>
          </tr>
          <tr>
            <td>Used for</td>
            <td>Sending data to child</td>
            <td>Managing internal data</td>
          </tr>
          <tr>
            <td>Controlled by</td>
            <td>Parent</td>
            <td>Component itself</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Diff;