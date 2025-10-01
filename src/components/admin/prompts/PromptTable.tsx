import React from "react";
import {PromptResponse} from "@/app/admin/prompts/types";

const PromptTable: React.FC<PromptResponse> = ({prompts}) => {
  return (
      <table>
        <thead>
        <tr>
          <th>Author</th>
          <th>Persona Name</th>
          <th>Public?</th>
        </tr>
        </thead>
        <tbody>
        {prompts.map((prompt, index) => (
            <tr key={index}>
              <td>{prompt.author}</td>
              <td>{prompt.personaName}</td>
              <td>{prompt.isPublic ? 'Yes' : 'No'}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
}

export default PromptTable;