import React, {useEffect, useState} from "react";

function LawTags ({tags}){
    const [tag, setTag] = useState('')
    useEffect(() => {
        if(tags){
            setTag(tags.map((obj) => <span>{obj}, </span>))
        }
    }, [tags])


    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-10 card p-0 mb-5 border-info">
                    <div className="card-header" style={{backgroundColor: "#cbf7f7"}}>
                        برچسب ها
                    </div>
                    <div className="card-body">
                        {tag}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default LawTags