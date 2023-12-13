let option1 = "About";
let option2= "Contact";
let option3= "advertise";


let NavbarHTML =
`
<nav>
        <div class="nav-left">
            <a href="Home.html" class="Special-a">
            <img src="Images/logo.jpeg" alt="" class="logo">
            <b>Artistry Unleashed</b>
            </a>
        </div>
        <div class="nav-right">
            <ul class="nav-ul">
                <li>
                    <a href="${option1}.html" class="li-link">
                        ${option1}
                    </a>
                </li>
                <li>
                    <a href="${option2}.html" class="li-link">
                       ${option2}
                    </a>
                </li>
                <li>
                    <a href="${option3}.html" class="li-link">
                        Advertise on AU
                    </a>
                </li>
                <li>
                    <a href="#" class="li-link">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="#" class="li-link">
                        Products
                    </a>
                </li>
                <li class="Buy">
                    <a href="#" class="li-link">
                        Get Paintings
                    </a>

                </li>
            </ul>
        </div>
    </nav>
`
document.getElementsByTagName('header')[0].innerHTML= NavbarHTML;