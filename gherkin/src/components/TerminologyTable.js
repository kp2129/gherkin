import React from 'react';
import TerminologyRow from './TerminologyRow';

function TerminologyTable() {
  return (
    <div className="table-gherkin">
      <table>
        <thead>
          <tr>
            <th>Angļu valoda</th>
            <th>Latviešu valodā</th>
          </tr>
        </thead>
        <tbody>
          <TerminologyRow term="feature" translation="Funkcionālā iezīme" />
          <TerminologyRow term="background" translation="Konteksts" />
          <TerminologyRow term="scenario" translation="Scenārijs" />
          <TerminologyRow term="scenarioOutline" translation="Scenārijs pēc parauga" />
          <TerminologyRow term="examples" translation="Piemēri" />
          <TerminologyRow term="given" translation="Kad" />
          <TerminologyRow term="when" translation="Ja" />
          <TerminologyRow term="then" translation="Tad" />
          <TerminologyRow term="and" translation="Un" />
          <TerminologyRow term="but" translation="Bet" />
          <TerminologyRow term="rule" translation="Rule" colspan={2} />
        </tbody>
        
      </table>
    </div>
  );
}

export default TerminologyTable;
