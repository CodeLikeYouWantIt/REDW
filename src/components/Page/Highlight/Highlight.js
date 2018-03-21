import React, {Component} from 'react'
import './Highlight.css'
import '../../style.css'



class Highlight extends Component {
    render(){
        return(
            <div class="highlight col-full ">
                <img src={require('../../../images/Pages/About/SHUSideshot2.jpg')} />
                <h1>The Mission</h1>
                    <p>
                        Our ministry is founded on the Great Commission found
                        in <span>Matthew 28:19-20</span>.
    
                        We believe God called us to move the hearts of those in spiritual crisis
                        into freedom through Spirit led worship, prayer, and teaching. 
                    </p>
                {/* <img src={require('../../../images/Pages/About/SHUSideshot.jpg')} />               */}
            </div>
        )
    }
}





export default Highlight