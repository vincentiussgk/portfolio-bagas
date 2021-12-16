import React from 'react'
import styles from "./Home.module.css"
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import CarouselNavbar from "../navbar/CarouselNavbar"
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
	const renderIndicator = (clickHandler, isSelected, index, label) => {
		return (
			<div className={styles.indicatorContainer}>
				{isSelected ?
					<div className={styles.filledCircle} onClick={clickHandler}>

					</div>
				:
					<div className={styles.emptyCircle} onClick={clickHandler}>

					</div>
				}
			</div>
		)
	}
  return (
    <div>
			<CarouselNavbar />
      <Carousel showThumbs={false} showStatus={false} renderIndicator={renderIndicator}>
        <div>
          <div 
            style={{ 
              backgroundImage: `url('Artboard 1.png')`, 
              height: "100vh", 
              backgroundSize: "cover",
							display: "flex",
							flexDirection: "column",
             }}
        	>
						<div style={{ display: "flex" }}>
							<div
								style={{ 
									display: "flex",
									flexDirection: "column",
									alignItems: "center"
								}}
							>
								<img src="FeelAsThoughWhite.png" className={styles.feelAsThoughImage}/>
								<button className={styles.reminisceButton}>
										Reminisce
								</button>
							</div>
						</div>
          </div>
        </div>
        <div>
          <div 
            style={{ 
              backgroundImage: `url('Artboard 1-1.png')`, 
              height: "100vh", 
              backgroundSize: "cover",
							display: "flex",
							flexDirection: "column",
             }}
        	>
						<div style={{ display: "flex" }}>
							<div
								style={{ 
									display: "flex",
									flexDirection: "column",
									alignItems: "center"
								}}
							>
								<img src="FeelAsThoughWhite.png" className={styles.feelAsThoughImage}/>
								<button className={styles.reminisceButton}>
										Reminisce
								</button>
							</div>
						</div>
          </div>
        </div>
        <div>
          <div 
            style={{ 
              backgroundImage: `url('Artboard 1-2.png')`, 
              height: "100vh", 
              backgroundSize: "cover",
							display: "flex",
							flexDirection: "column",
             }}
        	>
						<div style={{ display: "flex" }}>
							<div
								style={{ 
									display: "flex",
									flexDirection: "column",
									alignItems: "center"
								}}
							>
								<img src="FeelAsThoughWhite.png" className={styles.feelAsThoughImage}/>
								<button className={styles.reminisceButton}>
										Reminisce
								</button>
							</div>
						</div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Home