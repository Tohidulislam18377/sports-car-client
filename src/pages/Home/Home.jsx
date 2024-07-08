import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import img1 from '../../assets/images/banner/Image-01.jpg'
import img2 from '../../assets/images/banner/Image-02.jpg'
import img3 from '../../assets/images/banner/Image-03.jpg'
import img4 from '../../assets/images/banner/Image-04.jpg'
import img5 from '../../assets/images/banner/Image-05.jpg'
import img6 from '../../assets/images/banner/Image-06.jpg'
import img7 from '../../assets/images/cars/sports_car_crafted_with_pre_0.webp'
import img8 from '../../assets/images/cars/sports_car_rendered_in_exquisite_1 (1).webp'
import img9 from '../../assets/images/cars/sports_car_rendered_in_exquisite_2 (1).webp'
import img10 from '../../assets/images/cars/sports_car_rendered_in_stunn_0 (1).webp'


const Home = () => {
    return (
        <div className="ml-5 mr-5">
            <div className="carousel w-full mb-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#1f1e1e] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Unleash <br /> the Beast <br /> Within</h2>
                            <p className='mb-3'>Experience the ultimate fusion of raw power and sophisticated engineering. Sports cars bring a new level of excitement with their roaring engines and lightning-fast acceleration.</p>
                            <button className="hover:bg-red-400 p-2 rounded bg-red-600 mr-4">Discover Fast</button>
                            <Link to={'/blogs'}><button className=" p-2 rounded hover:bg-red-400 bg-red-600 mr-4">Blog Red</button></Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 flex transform justify-end bottom-5">
                        <a href="#slide6" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img6}
                        className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#1f1e1e] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Pure <br /> Adrenaline<br /> Pure You.</h2>
                            <p className='mb-3'>Sports cars are masterpieces of design and engineering, built to deliver an unparalleled driving experience. Every curve and contour is meticulously sculpted to reduce drag and enhance performance. </p>
                            <button className="hover:bg-red-400 p-2 rounded bg-red-600 mr-4">Discover Fast</button>
                            <Link to={'/blogs'}><button className=" p-2 rounded hover:bg-red-400 bg-red-600 mr-4">Blog Red</button></Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-2 flex -translate-y-1/2 justify-end">
                        <a href="#slide1" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#1f1e1e] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Feel the <br />Thrill of <br /> the Road.</h2>
                            <p className='mb-3'>Elevate your driving to new heights with a sports car that embodies the pinnacle of automotive performance. These vehicles are engineered with precision and passion, featuring high-performance engines.</p>
                            <button className="hover:bg-red-400 p-2 rounded bg-red-600 mr-4">Discover Fast</button>
                            <Link to={'/blogs'}><button className=" p-2 rounded hover:bg-red-400 bg-red-600 mr-4">Blog Red</button></Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-1 flex -translate-y-1/2 justify-end">
                        <a href="#slide2" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#1f1e1e] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Pure <br /> Adrenaline <br />Pure Power.</h2>
                            <p className='mb-3'>Step into a sports car and enter a world where innovation meets exhilaration. These vehicles are at the forefront of automotive technology, incorporating the latest advancements to enhance performance and safety. </p>
                            <button className="hover:bg-red-400 p-2 rounded bg-red-600 mr-4">Discover Fast</button>
                            <Link to={'/blogs'}><button className=" p-2 rounded hover:bg-red-400 bg-red-600 mr-4">Blog Red</button></Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-1 flex -translate-y-1/2 justify-end">
                        <a href="#slide3" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img
                        src={img5}
                        className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#1f1e1e] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Elegance <br /> Meets <br /> Raw Power</h2>
                            <p className='mb-3'>Theres nothing quite like the thrill of driving a sports car. With their powerful engines, precise handling, and stunning designs, sports cars offer a driving experience that is second to none. Feel the rush of acceleration.</p>
                            <button className="hover:bg-red-400 p-2 rounded bg-red-600 mr-4">Discover Fast</button>
                            <Link to={'/blogs'}><button className=" p-2 rounded hover:bg-red-400 bg-red-600 mr-4">Blog Red</button></Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-1 flex -translate-y-1/2 justify-end">
                        <a href="#slide4" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#1f1e1e] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Master <br /> the Road <br /> with Style</h2>
                            <p className='mb-3'>Sports cars redefine performance, offering a driving experience that is both thrilling and refined. With their powerful engines, advanced suspension systems.</p>
                            <button className="hover:bg-red-400 p-2 rounded bg-red-600 mr-4">Discover Fast</button>
                            <Link to={'/blogs'}><button className=" p-2 rounded hover:bg-red-400 bg-red-600 mr-4">Blog Red</button></Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-1 flex -translate-y-1/2 justify-end">
                        <a href="#slide5" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Marquee>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
                    <div>
                        <img className='rounded h-48 ml-3' src={img7} alt="" />
                        <p className='text-1xl text-center text-black'>Feel pure power</p>
                    </div>
                    <div>
                        <img className='rounded h-48 ml-2' src={img8} alt="" />
                        <p className='text-1xl text-center text-black'>Elegance in motion</p>
                    </div>
                    <div>
                        <img className='rounded h-48' src={img9} alt="" />
                        <p className='text-1xl text-center text-black'>Control the ride</p>
                    </div>
                    <div>
                        <img className='rounded h-48' src={img10} alt="" />
                        <p className='text-1xl text-center text-black'>Ultimate craftsmanship</p>
                    </div>
                </div>
            </Marquee>

        </div>
    );
};

export default Home;