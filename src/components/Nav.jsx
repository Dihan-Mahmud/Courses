

function Nav({data,category,setCategory,saved,setSaved}) {

    let unique = ['All'];
    data.forEach((element) => {
        if (!unique.includes(element.category)) {
            unique.push(element.category);
        }
    });

    function btnHandler(arg){
        // console.log(arg);
        setCategory(arg)
    }
    
    return(
        <div className="nav">
            {unique.map((e,idx) => {
                return <button onClick={() => btnHandler(e)} className="btn" key={idx}>{e}</button>
            })}
        </div>
    )
}

export default Nav;