import './StudyAbroad.css';

// images and icons
import image1 from '../../../assets/Home/images/blue-cardImage1.png';
import image2 from '../../../assets/Home/images/blue-cardImage2.png';
import image3 from '../../../assets/Home/images/blue-cardImage3.png';
import image4 from '../../../assets/Home/images/circle-image.png';
import dashedLine from '../../../assets/Home/images/dashed-line.png';

const StudyAbroad = () => {
    return (
        <article id='study-abroad'>
            <div className="text-content">
                <h2 className='mb-4'>Study Abroad</h2>
                <p className='mb-8 leading-7'>Can we take this offline we need to think big start small and <br /> scale fast to energize our clients or the last person we talked <br /> to said this would be ready nor get buy-in. Wiggle room ensure <br /> to follow requirements when developing solutions or high <br /> touch client so individual get six alpha pups in here for a focus <br /> group.</p>
                <a href='#learn-more' className="learn-more">Learn More</a>
            </div>
            <div className="images-gallery">
                <div className="dashed-line">
                    <img src={ dashedLine } alt="" />
                </div>
                <div className="hanger-card hanger-card-one">
                    <div style={ { transform: 'translate(5px,5px)' } }>
                        <img src={ image4 } alt="" />
                    </div>
                    <div style={ { margin: '10px 10px 20px 10px' } }>
                        <h4>James Sam</h4>
                        <p>studying at the university of London</p>
                    </div>
                </div>
                <div className="imageOne">
                    <img src={ image1 } alt="" />
                </div>
                <div className="imageTwo">
                    <img src={ image2 } alt="" />
                </div>
                <div className="imageThree">
                    <img src={ image3 } alt="" />
                </div>
                <div className="hanger-card hanger-card-two">
                    <div style={ { transform: 'translate(5px,5px)' } }>
                        <img src={ image4 } alt="" />
                    </div>
                    <div style={ { margin: '10px 10px 20px 10px' } }>
                        <h4>James Sam</h4>
                        <p>studying at the university of London</p>
                    </div>
                </div>
            </div>

        </article>

    );
};

export default StudyAbroad;
