import React,{useState} from 'react'
import "./_categoriesBar.scss"

const keywords = [
    "all",
    "React js",
    "Movie",
    "Music",
    "Angular",
    "Mern",
    "Python",
    "Django",
    "Programming",
    "Computer Science",
    "AI",
    "Machine Learning",
    "Coding",
    "Programming",
    "Java"

]

function CategoriesBar() {
    const [activeElement, setActiveElement] = useState("all")
    const handleClick = (value) => {
        setActiveElement(value)
    }
    return (
        <div className="CategoriesBar">
            {
                
                keywords.map((value, index) => 
                <span
                    onClick={()=> handleClick(value)}
                    key={index}
                    className={activeElement===value ? "active" : " "}>
                        
                    {value}
                </span>
                )
            }
        </div>
    )
}

export default CategoriesBar
