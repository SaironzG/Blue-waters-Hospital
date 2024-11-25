function Doc(props){
    return(
        <div className="CardWrapper">
            <div className="cardcontainer">

          
        <div className="cards3">
                        <div className="pic">
                            <img src={props.Profile} alt="" />
                        </div>
                        <div className="text">
                            <h1>
                                {props.DocName}
                            </h1>
                            <h3>
                                {props.DocJob}
                            </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur <br/>adipisicing elit. Magni, eaque! Lorem ipsum <br/>dolor, sit amet consectetur adipisicing.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    </div>
        </div>
    );
}
export default Doc;