import "./header.css"
import cover from '../assets/uzco.jpg'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Express</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={cover} alt="Another here" />
        </div>
    )
}
