import Form from "@/components/Form";
import Result from "@/components/Result";
import { useState } from "react";

export default function Home(){
const [state, setState] = useState({
  jmlGaji: 0,
  jmlHari:0,
  absen:0,
});

const updateValues = (newState) => {
  setState({
    ...state,
    ...newState,
  });
};

return (
<div className="container">
<h1>Gaji Calculator</h1>

<div className="wrapper">
<Form state={state} updateValues={updateValues}/>
<Result state={state}/>
</div>

</div>
);
}

