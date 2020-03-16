import React from "react";
import withAuthorisation from "../components/hoc/withAuthorisation";

const Secret = () => <h1>Secret page</h1>;

export default withAuthorisation(Secret);
