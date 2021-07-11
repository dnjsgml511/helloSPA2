
import Section1Left from '../section1/Section1Left'
import Section1Right from '../section1/Section1Right'

import '../../scss/section1/section1.scss';

const Section1Component = () => {

    return (
        <section id="section1">
            <Section1Left />
            <Section1Right />
        </section>
    )
}

export default Section1Component