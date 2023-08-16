import React from "react";

function Table({ postsData }) {
  const locationCounts = {};

  postsData.forEach((post) => {
    locationCounts[post.location] = (locationCounts[post.location] || 0) + 1;
  });

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(locationCounts).map((location) => (
            <tr key={location}>
              <td>{location}</td>
              <td>{locationCounts[location]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;