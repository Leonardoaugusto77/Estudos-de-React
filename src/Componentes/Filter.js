export default (props) => {
    return(
        <>
            <label>Digite uma categoria</label>
            <input type='text' value={props.c} onChange={(e)=>props.setc(e.target.value)} ></input>
        </>     
    )
}