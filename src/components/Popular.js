import c6 from "../assets/images/c6.jpg"
import c7 from "../assets/images/c7.jpg"
import c5 from "../assets/images/c5.jpg"
import c1 from "../assets/images/c1.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"



function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the Best Fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={c6} alt="c6"></img>
                <h3>2025 Python Data Visualization Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c7} alt="c7"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>4999</del></p>
            </div>
            <div class="course-card">
                <img src={c5} alt="c5"></img>
                <h3>2025 Web Development Bootcamp</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c1} alt="c1"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>5999</del></p>
            </div>
            <div class="course-card">
                <img src={c7} alt="c7"></img>
                <h3>2025 Python Data Visualization Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c5} alt="c5"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>4999</del></p>
            </div>
            <div class="course-card">
                <img src={c3} alt="c3"></img>
                <h3>2025 Web Development Bootcamp</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c4} alt="c4"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>5999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Popular