import React from "react";
import Title from ".";

function AllTitles() {
  return (
    <div>
      <Title text="This is h1" level={1} />
      <Title text="This is h2" level={2} />
      <Title
        text="This is h3 with additional classname"
        level={3}
        className="uppercase"
      />
      <Title
        text="This is h4 with additional classname"
        level={4}
        className="underline"
      />
      <Title text="This is h5" level={5} />
      <Title text="This is h6" level={6} />
    </div>
  );
}

export default AllTitles;
