import { useState } from "react";
// import { isActiveLink } from "../../utilis/linkActiveChecker";
// import './button.css'
import { ItemMenuButton } from "./ItemMenuButton";



const menuItemList = [ 'HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT' ];


const NewHamburgerMenuButton = ({isOpen, setIsOpen, setTabIndex, tabIndex}) => {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [ checked, setChecked ] = useState(false);
    const [ checkedKey, setCheckedKey ] = useState(false);

    const delayCSS = (event) => { 
        setTabIndex(+event);
        // setCheckedKey(!checkedKey);
        // setChecked(!checked);
        //   console.log('event --- name', +event.target.id ); 
        try {
            if(++event){
                setTimeout(() => {
                    setCheckedKey(!checkedKey);
                }, 500);
            }
        }
        finally {  console.log('posłoe'); }
        
    };


    return(
        <>
        <input class="menu-icon" key={checkedKey} onClick={() => {
                    // setIsOpen(!isOpen);
                    setChecked(!checked);
                    }
                } 
            value={checked} 
            type="checkbox" id="menu-icon" name="menu-icon"/>
            <label for="menu-icon"></label>

            <nav class="nav" id="stain-hamburger--nav"> 	
                <ul className="pt-5 ulMenuList">
                    <li   className="liMenuItem" 
                    // style={{ display: ((item.routePath === router.asPath) || ( item.routePath === "/home" ) && (router.asPath === "/")) ? 'none' : "" }}
                    >
                        <div className="innerItemContainer" >
                            <button type='button' className="liMenuItem menu_content"  id='0' onClick={ () => delayCSS(0)    } 
                            >
                            {"HOME"}
                            </button>
                        </div>
                    </li>
                    <li   className="liMenuItem" 
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
                    </li>
                </ul>  
            </nav>
        </>
    );
};

export default NewHamburgerMenuButton;