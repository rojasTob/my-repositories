import React from "react";

export default function Repositories(props: any) {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Created</th>
        </tr>
        <tbody>
          {props.list.map((repo: any) => (
            <tr>
              <td>{repo.name}</td>
              <td>{repo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}