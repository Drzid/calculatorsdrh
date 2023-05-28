import React from "react";

const Result = ({state}) => {
    const {jmlGaji, jmlHari, absen} = state;
    const totalGaji = Number((jmlGaji / jmlHari)*absen).toFixed(2);
return(

<div className="tip-result">
    
<div>
<p className="label">Gaji yang didapat</p>{" "}
<p className="result">{`Rp. ${Number(totalGaji).toFixed(2)}`}</p>
</div>

</div>

);
};

export default Result;