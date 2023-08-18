import { wait } from "@/data";
import React from "react";

const Viewcount = async ({ count }) => {
    await wait(2000);
    return <h3>Total Post Count: {count}</h3>;
};

export default Viewcount;
