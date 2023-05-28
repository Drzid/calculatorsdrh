import React from "react";

const Form = ({state, updateValues}) => {
    const {jmlGaji, jmlHari, absen} = state;
    const percentages = [5, 10, 15, 20, 25];
return(

    <div className="input-container">
<div className="input-group">
<label htmlFor="jmlGaji">Jumlah Gaji</label>
<input 
    onChange={(e) => {
    updateValues({
        jmlGaji:e.target.value,
    });
}}
value={jmlGaji}
type="number" 
id="jmlGaji"
/>
</div>

<div className="input-group">
<label htmlFor="jmlHari">Jumlah Hari Dalam 1 Bulan</label>
<input 
    onChange={(e) => {
    updateValues({
        jmlHari:e.target.value,
    });
}}
value={jmlHari}
type="number" 
id="jmlHari"
/>
</div>

<div className="input-group">
<label htmlFor="absen">Hadir berapa hari</label>
<input 
    onChange={(e) => {
    updateValues({
        absen:e.target.value,
    });
}}
value={absen}
type="number" 
id="absen"
/>
</div>
</div>
);
};

export default Form;