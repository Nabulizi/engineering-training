import React from "react";
import ListItem from "./listitem";

export default function List(props) {
  const data = {
    jirasObject: [
      {
        icon: "bi bi-check-circle-fill",
        title: "Conditional equality check",
        link: "https://totalwine.atlassian.net/browse/DIG-71865",
      },
      {
        icon: "bi bi-check-circle-fill",
        title: "Object Methods, and using 'this'",
        link: "https://totalwine.atlassian.net/browse/DIG-71886",
      },
      {
        icon: "bi bi-check-circle-fill",
        title: "JavaScript Classes using 'this'",
        link: "https://totalwine.atlassian.net/browse/DIG-71939",
      },
    ],
  };

  return (
    <ul className="group">
      {data.jirasObject.map((properties, index) => (
        <ListItem
          key={index}
          link={properties.link}
          title={properties.title}
          icon={properties.icon}
        />
      ))}
    </ul>
  );
}
