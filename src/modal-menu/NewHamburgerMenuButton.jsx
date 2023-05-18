import { useState, useMemo, useEffect } from "react";
// import { isActiveLink } from "../../utilis/linkActiveChecker";
// import './button.css'
import { ItemMenuButton } from "./ItemMenuButton";
import { type } from "@testing-library/user-event/dist/type";



const menuItemList = [ 'HOME', 'ABOUT', 'PORTFOLIO',  'CONTACT' ];


const NewHamburgerMenuButton = ({  setTabIndex,   }) => {
    

    const [ checked, setChecked ] = useState(false);
    const [ checkedKey, setCheckedKey ] = useState(false);

    const delayCSS = (event) => { 

        setTabIndex(+event);
        try {
            if(++event){
                setTimeout(() => {
                    setCheckedKey(!checkedKey);
                }, 500);
                
            }
        }
        finally {  console.log(); 
        }
        
    };


    return(
        <>
        <input class="menu-icon" key={checkedKey} onClick={() => {
                    setChecked(!checked);
                    }
                } 
            value={checked} 
            type="checkbox" id="menu-icon" name="menu-icon"/>
            <label for="menu-icon"></label>

            <nav class="nav" id="stain-hamburger--nav"> 	
                <ul className="pt-5 ulMenuList">
                    { menuItemList.map((itemName, index) => {
                        // if(index === itemName) return null;
                        return(
                            <li key={`${index}_${itemName}`}  className="liMenuItem" 
                            // style={{ display: ((item.routePath === router.asPath) || ( item.routePath === "/home" ) && (router.asPath === "/")) ? 'none' : "" }}
                            // style={{ display: (!checkedKey && tabIndex === index) ? 'none' : "" }}
                            >
                            <div className="innerItemContainer" >
                                <button type='button' className="liMenuItem menu_content"  id={index} onClick={ () => delayCSS(index)    } 
                                >
                                {itemName}
                                </button>
                            </div>
                        </li>
                        )}
                    )}
                    {/* <li   className="liMenuItem" 
                    // style={{ display: ((item.routePath === router.asPath) || ( item.routePath === "/home" ) && (router.asPath === "/")) ? 'none' : "" }}
                    >
                        <div className="innerItemContainer" >
                            <button type='button' className="liMenuItem menu_content"  id='1' onClick={ () => delayCSS(1)    } 
                            >
                            {"ABOUT"}
                            </button>
                        </div>
                    </li>
                    <li   className="liMenuItem" 
                    // style={{ display: ((item.routePath === router.asPath) || ( item.routePath === "/home" ) && (router.asPath === "/")) ? 'none' : "" }}
                    >
                        <div className="innerItemContainer" >
                            <button type='button' className="liMenuItem menu_content"  id='2' onClick={ () => delayCSS(2)    } 
                            >
                            {"PORTFOLIO"}
                            </button>
                        </div>
                    </li>
                    <li   className="liMenuItem" 
                    // style={{ display: ((item.routePath === router.asPath) || ( item.routePath === "/home" ) && (router.asPath === "/")) ? 'none' : "" }}
                    >
                        <div className="innerItemContainer" >
                            <button type='button' className="liMenuItem menu_content"  id='3' onClick={ () => delayCSS(3)    } 
                            >
                            {"CONTACT"}
                            </button>
                        </div>
                    </li> */}
                </ul>  
            </nav>
        </>
    );
};

export default NewHamburgerMenuButton;