import { useState } from "react";
// import { isActiveLink } from "../../utilis/linkActiveChecker";
// import './button.css'
import { ItemMenuButton } from "./ItemMenuButton";



const menuItemList = [ 'HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT' ];


const HamburgerMenuButton = ({isOpen, setIsOpen, setTabIndex, tabIndex}) => {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [ checked, setChecked ] = useState(false);
    const [ checkedKey, setCheckedKey ] = useState(false);

    const delayCSS = (event) => { 
        setTabIndex(+event);
        setCheckedKey(!checkedKey);
        // setChecked(!checked);
        //   console.log('event --- name', +event.target.id ); 
        try {
            if(++event){
                setTimeout(() => {
                    setCheckedKey(!checkedKey);
                }, 300);
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
                {/* {menuItemList.map((item, idx ) => { 
                    return(
                    */}
                    <li  
                    // style={{ display: ((item.routePath === router.asPath) || ( item.routePath === "/home" ) && (router.asPath === "/")) ? 'none' : "" }}
                    >
                        <div class="container">

                        <button type='button' class="button"  id='0' onClick={ () => delayCSS(0)    } 
                            
                        >
                            <ItemMenuButton name='home' idx='0' className="button main-menu--item"
                                // onChange={(event) => delayCSS(event)} 
                            >
                                <label class="button__text" for='0'  id='0' > 
                                    <span className='name-text'>{ 'HOME' } </span>
                                    <input style={{   border: 'none', background: 'transparent', outline: 0 }}
                                            type="button" class="button__text" id='0' name='home'  
                                            // onclick={(event) => delayCSS(event)} 
                                    />
                                </label>
                            </ItemMenuButton>
                        </button>
                        <button type='button' class="button"  id='1' onClick={ () => delayCSS(1)    } 
                            
                        >
                            <ItemMenuButton name='home' idx='1' className="button main-menu--item"
                                // onChange={(event) => delayCSS(event)} 
                            >
                                <label class="button__text" for='1'  id='1' > 
                                    <span className='name-text'>{ 'ABOUT' } </span>
                                    <input style={{   border: 'none', background: 'transparent', outline: 0 }}
                                            type="button" class="button__text" id='1' name='about'  
                                            // onclick={(event) => delayCSS(event)} 
                                    />
                                </label>
                            </ItemMenuButton>
                        </button>
                        <button type='button' class="button"  id='2' onClick={ () => delayCSS(2)    } 
                            
                        >
                            <ItemMenuButton name='home' idx='2' className="button main-menu--item"
                                // onChange={(event) => delayCSS(event)} 
                            >
                                <label class="button__text" for='2'  id='2' > 
                                    <span className='name-text'>{ 'PORTFOLIO' } </span>
                                    <input style={{   border: 'none', background: 'transparent', outline: 0 }}
                                            type="button" class="button__text" id='2' name='portfolio'  
                                            // onclick={(event) => delayCSS(event)} 
                                    />
                                </label>
                            </ItemMenuButton>
                        </button>
                        <button type='button' class="button"  id='3' onClick={ () => delayCSS(3)    } 
                            
                        >
                            <ItemMenuButton name='home' idx='3' className="button main-menu--item"
                                // onChange={(event) => delayCSS(event)} 
                            >
                                <label class="button__text" for='3'  id='3' > 
                                    <span className='name-text'>{ 'CONTACT' } </span>
                                    <input style={{   border: 'none', background: 'transparent', outline: 0 }}
                                            type="button" class="button__text" id='3' name='contact'  
                                            // onclick={(event) => delayCSS(event)} 
                                    />
                                </label>
                            </ItemMenuButton>
                        </button>
                        </div>
                    </li>
                    
                    
                    {/* )})
                } */}
                    {/* <li>
                        <button style={{verticalAlign: 'middle' }}
                        className="button main-menu--item" value='3' type='button' 
                            onClick={ (event) =>   {
                                delayCSS(event);
                                // setTabIndex(+(event.target.value));
                            }  }
                        >
                            sdsada
                        </button>
                        </li> */}
                </ul>  
            </nav>
        </>
    );
};

export default HamburgerMenuButton;