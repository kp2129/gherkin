import React from 'react';

function TerminologyRow({ term, translation, colspan }) {
  return (
    <tr>
      <td>{term}</td>
      <td >{translation}</td>
    </tr>
  );
}

export default TerminologyRow;
