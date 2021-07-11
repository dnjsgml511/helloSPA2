import { useEffect, useRef } from 'react'

const Section1Left = () => {

    const hide = useRef(null);

    useEffect(() => {
        const el = hide.current;
        el.className = "show";
    }, [])

    return (
        <div id="section1-left" className="hide" ref={hide}>
            <div id="section1-caption" className="show-anime">National Board of Medical Examiners: Website Redesign</div>
            <div id="section1-title" className="show-anime">Activating a new digital experience</div>
            <div id="section1-text" className="show-anime">
                As part of our rebrand work with the National Board of Medical Examiners (NBME),
                we found that the organization struggled with a disengaged and,
                at times, frustrated customer base. This situation was only made worse by
                an outdated website that felt chaotic, unresponsive, and overly corporate.
            </div>
            <div id = "next-button" className="show-anime">
                <label>Explore case study</label>
                <div>down</div>
            </div>
        </div>
    )
}

export default Section1Left