
function LandingNavigationBar(props) {
    return(
        <div className="nav-bar">
        <h1 className="app-name"><a href="/">BareSKN</a></h1>
        
        <div className="navbar-right">
            <span onClick={props.toogleSearchTab}>
                <img src={require("../icons/search.png")} alt="Search" srcSet="" className="navbar-icon"/>
            </span>
            <span className="cart-icon-container" aria-label="cart">
                <img id= "cart" src={require("../icons/shopping-cart.png")} alt="cart" className="navbar-icon" srcSet=""/>
                <span id="cart-no">100</span>
            </span>
            {props.isSideBarOpen ?
                <div className="navbar-icon" onClick={props.toogleSideBar}>
                    <div className="navbar-line-1" style={{animationName:'navbarline1_open'}}></div>
                    <div className="navbar-line-2" style={{display:'none'}}></div>
                    <div className="navbar-line-3" style={{animationName:'navbarline3_open'}}></div>
                </div>
                :
                <div className="navbar-icon" onClick={props.toogleSideBar}>
                    <div className="navbar-line-1" ></div>
                    <div className="navbar-line-2"></div>
                    <div className="navbar-line-3" ></div>
                </div>
            }
        </div>
        
        </div>
    )
}

export default LandingNavigationBar;