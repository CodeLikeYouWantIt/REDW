import React, {Component} from 'react'
import { SocialIcon } from 'react-social-icons';
import '../style.css'
import './Footer.css'

class Footer extends Component {
    render (){
        return(
                <div class="footer">
                    <SocialIcon url="https://www.instagram.com/excelklcc/" color="black"/>
                    <SocialIcon url="https://www.facebook.com/" color="black"/>
                    <SocialIcon url="mailto:redworshipministry@gmail.com" color="black"/>
                    <p id="copyright">&copy;  REDWorship 2018  </p>
                    <p>1455 Naugatuck Ave. Milford, CT 06461</p>
                </div>
        )
    }
}

export default Footer