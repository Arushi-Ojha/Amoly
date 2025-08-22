import Navbar from "./Navbar";
import Allthree from "../assets/photo1.png";
import Jungle from "../assets/jungle.mp4";
import img2 from "../assets/photo2.png"
import img1 from "../assets/Body Wash.webp";
import img3 from "../assets/shampoo.webp";
import img4 from "../assets/Conditioner.webp";
import Shampoo from "../assets/shampoo-removebg-preview.png";
import Conditioner from "../assets/Conditioner-removebg-preview.png";
import BodyWash from "../assets/Body_Wash-removebg-preview.png";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function LandingPage() {
    const products = [
        {
            image: Shampoo,
            title: "Shampoo – Nourishing & Gentle",
            description: "“Cleanses hair naturally with bamboo extracts & essential oils. ",
            price: "₹499",
        },
        {
            image: BodyWash,
            title: "Body Wash- Hydrating and fresh",
            description: "Cleanses and moisturizes skin with natural plant extracts.",
            price: "₹499",
        },
        {
            image: Conditioner,
            title: "Conditioner- Soft and Smooth",
            description: "Deeply nourishes and detangles hair without harsh chemicals.",
            price: "₹499",
        },
    ];
    const [animate, setAnimate] = useState(false);
    const [show, setShow] = useState(false);

    const images = [img1, img2, img3, img4];
    // Ref and visibility for scroll-triggered section
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const imageContainerRef = useRef();
    const [inView, setInView] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        countryCode: "+91",
        phone: "",
        title: "",
        email: "",
        message: ""
    });

    const countryCodes = ["+91", "+1", "+44", "+61", "+81"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Query submitted successfully!");
        setFormData({
            firstName: "",
            lastName: "",
            countryCode: "+91",
            phone: "",
            title: "",
            email: "",
            message: ""
        });
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        if (imageContainerRef.current) observer.observe(imageContainerRef.current);

        return () => observer.disconnect();
    }, []);

    // Scroll observer for slide-in section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    // Animation for blur-box on load
    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, []);

    // Typing text on first section
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Navbar />

            {/* Video background */}
            <div className="video-container">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src={Jungle} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* First blur box section */}
            <div className={`blur-box ${animate ? "animate" : ""}`}>
                <div className="typing-container">
                    {show && (
                        <p className="typing-text">
                            Effective skincare & haircare made with nature, backed by
                            science.Eco-friendly. Affordable. For everyone.
                        </p>
                    )}
                </div>
            </div>

            {/* Second scroll-triggered section */}
            <div ref={containerRef} className="slide-container">
                <img
                    src={Allthree}
                    alt="Eco-Friendly Product"
                    className={`slide-image ${visible ? "slide-in-left" : ""}`}
                />
                <p className={`slide-text ${visible ? "slide-in-right" : ""}`}>
                    Switch to eco-friendly beauty! Shop our Aluminium bottle range today.
                </p>
            </div>
            <div className="shop-now-marquee">
                <div className="scrolling-text">
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                    <span className="shop-item">Shop Now</span>
                </div>
            </div>
            <div className="image-container" ref={imageContainerRef}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`circle-image ${inView ? "animate" : ""}`}
                        style={{ animationDelay: `${index * 0.3}s` }}
                    >
                        <img src={img} alt={`img-${index}`} />
                    </div>
                ))}
            </div>
            <div className="carousel-container">
                <button className="nav-btn left" onClick={prevSlide}>
                    &#60;
                </button>
                <div className="carousel-image">
                    <img src={products[currentIndex].image} alt={products[currentIndex].title} />
                </div>
                <div className="carousel-card">

                    <div className="carousel-content">
                        <h2>{products[currentIndex].title}</h2>
                        <p>{products[currentIndex].description}</p>
                        <p>{products[currentIndex].price}</p>
                        <button className="add-cart-btn">Add to Cart</button>
                    </div>
                </div>

                <button className="nav-btn right" onClick={nextSlide}>
                    &#62;
                </button>
            </div>
            <section>
                <div className="query-form-container">
                    <form className="query-form" onSubmit={handleSubmit}>
                        <h2>Any Queries? We are here.</h2>
                        <div className="form-row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                required
                            >
                                {countryCodes.map((code) => (
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>

                    <footer className="query-footer">
                        <p>© 2025 Amoly</p>
                        <div className="social-icons">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
