import React, { useRef } from "react"
import AnimatedTitle from "./AnimatedTitle"
import gsap from "gsap"
import Button from "./Button"

const Story = () => {
  const frameRef = useRef("null")

  const handleMouseLeave = (e) => {
    const element = frameRef.current

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 500,
      ease: "power1.inOut",
    })
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e

    const element = frameRef.current

    if (!element) return

    const rect = element.getBoundingClientRect()

    const x = clientX - rect.left
    const y = clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    })
  }
  return (
    <section id="section" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The multiversal ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="Entrance"
                  className="object-contain"
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex flex-col h-full w-fit items-center md:items-start">
            <p className="mt-10 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and boundless pillars. Discover
              its secret and shape your fate amidst infinite opportunities.
            </p>
            <Button
              id="realm-button"
              title="Discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
