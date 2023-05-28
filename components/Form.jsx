import React from "react";

const Form = ({state, updateValues}) => {
    const {billAmount, tipPercentage, noOfPerson, jmlGaji, jmlHari, absen} = state;
    const percentages = [5, 10, 15, 20, 25];
return(

    <div className="input-container">
<div className="input-group">

<label htmlFor="billAmount">Bill Amount</label>
<input 
    onChange={(e) => {
    updateValues({
        billAmount:e.target.value,
    });
}}
value={billAmount}
type="number" 
id="billAmount"
/>
</div>

<p>Tip Percentage</p>
<div className="percentage-list">
{percentages.map((p) =>{
    return (
    <div 
    className={`percentage-list__box ${
        tipPercentage == p ? "active" : ""
    }`}
    onClick={() => {
        updateValues({ tipPercentage: p });        
    }}
    key={p}
    >{`${p}%`}</div>
    );
})}

<input 
    className = "custom-tip-input"
    onChange={(e) => {
    updateValues({
        tipPercentage:
    e.target.value < 0
    ? 0
    : e.target.value > 100
    ? 100
    : e.target.value,
});
}}
value={tipPercentage}
max={100} 
min={0} 
type={"number"} 
placeholder="custom" 
/>
</div>

<div className="input-group">
<label htmlFor="noOfPerson">No Of Person</label>
<input 
    onChange={(e) => {
    updateValues({
        noOfPerson:e.target.value,
    });
}}
value={noOfPerson}
type="number" 
id="noOfPErson"
/>
</div>

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