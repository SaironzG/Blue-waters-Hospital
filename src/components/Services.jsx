import tooth from"../assets/tooth.png"
import eye from"../assets/eye.png"
import blood from"../assets/bloodtest.png"
import bag from"../assets/bag.png"
import "./Services.scss"
function Services(){
    return(<>
    <div className="ServiceWrapper">
        <div className="h1">
        <h3>
        <span className="heart">💙</span> Our Services
        </h3>
        <h1>
            Our Departments
        </h1>
        </div>
        <div className="cards">
            <div className="card">
                <div className="pic " >
                    <img  src={tooth} alt="" className="tooth"/>
                </div>
                <div className="text">
<p>
    Dental Care
</p>
                </div>
            </div>
            <div className="card">
                <div className="pic">
                    <img src={eye} alt="" />
                </div>
                <div className="text">
<p>
    Eye Care
</p>
                </div>
            </div>
            <div className="card">
                <div className="pic">
                    <img src={blood} alt="" />
                </div>
                <div className="text">

<p>
Blood Test
</p>
                </div>
            </div>
            <div className="card">
                <div className="pic">
                    <img src={bag} alt="" />
                </div>
                <div className="text">
<p>
    Check Ups
</p>
                </div>
            </div>
           
        </div>
    
    </div>
    </>);
}
export default Services;