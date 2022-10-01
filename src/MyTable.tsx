import React from "react";

type Props = {};

export const MyTable = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Foo</th>
          <th>Bar</th>
          <th>Baz</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 5 }).map((x, i) => (
          <tr key={i}>
            <td>Foo Foo{i}</td>
            <td>Bar Bar{i}</td>
            <td>Baz Baz{i}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
