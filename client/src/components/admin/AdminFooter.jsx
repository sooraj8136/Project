import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';

function AdminFooter() {

    const { darkMode } = useSelector((state)=> state.mode)   
    console.log(darkMode)


    return (
        <footer className="main-footer">   
            <div className="container">
                <section className="footer py-4">
                    <div className="row text-center text-md-start">
                        <div className="col-md-3 mb-4">
                            <h6 className={darkMode ? "text-black" : "text-white footer-title"}>Shop</h6>
                            <ul className="list list-unstyled">
                                <li>
                                    <a href="/ladies-page" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Ladies
                                    </a>
                                </li>
                                <li>
                                    <a href="/men-page" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Men
                                    </a>
                                </li>
                                <li>
                                    <a href="/kids-page" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Kids
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Magazine
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Admin Help
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-4">
                            <h6 className={darkMode ? "text-black" : "text-white footer-title footer-text footer-title"}>Corporate Info</h6>
                            <ul className="list list-unstyled">
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text footer-text"}>
                                        Career at H&M
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text footer-text"}>
                                        Sustainability H&M Group
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text footer-text"}>
                                        Press
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text footer-text"}>
                                        Investor relations
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text footer-text"}>
                                        Corporate governance
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className={darkMode ? "text-black" : "text-white footer-title footer-text footer-text"}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-4">
                            <h6 className={darkMode ? "text-black" : "text-white footer-title footer-text footer-title"}>Help</h6>
                            <ul className="list list-unstyled">
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Customer Service
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        About H&M group
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Find a store
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Legal & privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={darkMode ? "text-black" : "text-white footer-title footer-text"}>
                                        Secure shopping
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-4">
                            <p className={darkMode ? "text-black" : "text-white"}>
                                Sign up now and be the first to know about exclusive offers,
                                <br /> latest fashion news & style tips!
                            </p>
                            <a href="/read-more" className={darkMode ? "text-black" : "text-white read-more-text"}>
                                Read More
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="logo">
                        <div  >
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="pinterest-logo"
                                height="24">
                                <title id="pinterest-logo">Pinterest</title>
                                <path
                                    d="M3 12.0004c0 3.6849 2.2165 6.8512 5.387 8.2428-.0255-.6283-.0042-1.3826.157-2.0666.1726-.7306 1.1577-4.904 1.1577-4.904s-.2872-.5743-.2872-1.4244c0-1.3335.7732-2.3292 1.7354-2.3292.819 0 1.2142.6152 1.2142 1.3507 0 .8231-.5245 2.0544-.7945 3.1941-.2258.9547.4787 1.7336 1.4204 1.7336 1.7051 0 2.8538-2.1902 2.8538-4.7853 0-1.9726-1.3287-3.4485-3.7448-3.4485-2.7303 0-4.4313 2.0355-4.4313 4.31 0 .7838.2316 1.3368.5932 1.7647.167.1972.1898.2757.1293.5016-.0426.166-.1416.5645-.1833.7224-.0597.2282-.2446.3092-.45.2258-1.2575-.5138-1.8434-1.8907-1.8434-3.4387 0-2.5567 2.156-5.6223 6.4326-5.6223 3.4355 0 5.697 2.4864 5.697 5.156 0 3.5303-1.9628 6.168-4.8559 6.168-.9712 0-1.8859-.5253-2.1985-1.1217 0 0-.5228 2.0732-.6332 2.4733-.1907.6946-.5646 1.3875-.9058 1.9283A8.9895 8.9895 0 0 0 12 21c4.9705 0 9-4.0294 9-8.9996C21 7.0302 16.9705 3 12 3c-4.9704 0-9 4.0302-9 9.0004Z"
                                    fill="#222"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="youtube-logo"
                                height="24"
                            >
                                <title id="youtube-logo">YouTube</title>
                                <path
                                    d="M20.6883 7.9079c-.2201-.905-1.0031-1.572-1.9457-1.6721C16.5106 6 14.2516 5.9993 12.0025 6c-2.2492-.0008-4.5082 0-6.7402.2357-.9426.1-1.7256.767-1.9457 1.672C3.0033 9.1969 3 10.6029 3 11.9296c0 1.3267 0 2.7334.3125 4.0216.221.905 1.0031 1.5728 1.9457 1.6721 2.232.2357 4.491.2364 6.7402.2357 2.2491.0007 4.5081 0 6.7401-.2357.9426-.0993 1.7256-.7671 1.9457-1.6721.3133-1.2882.3158-2.6949.3158-4.0216 0-1.3267.0016-2.7327-.3117-4.0216Zm-10.3819 6.5364V9.6185l4.6571 2.4125-4.6571 2.4133Z M20.6883 7.9079c-.2201-.905-1.0031-1.572-1.9457-1.6721C16.5106 6 14.2516 5.9993 12.0025 6c-2.2492-.0008-4.5082 0-6.7402.2357-.9426.1-1.7256.767-1.9457 1.672C3.0033 9.1969 3 10.6029 3 11.9296c0 1.3267 0 2.7334.3125 4.0216.221.905 1.0031 1.5728 1.9457 1.6721 2.232.2357 4.491.2364 6.7402.2357 2.2491.0007 4.5081 0 6.7401-.2357.9426-.0993 1.7256-.7671 1.9457-1.6721.3133-1.2882.3158-2.6949.3158-4.0216 0-1.3267.0016-2.7327-.3117-4.0216Zm-10.3819 6.5364V9.6185l4.6571 2.4125-4.6571 2.4133Z"
                                    fill="#222"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="spotify-logo"
                                height="24"
                            >
                                <title id="spotify-logo">Spotify</title>
                                <path
                                    fill="#222"
                                    d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm3.369 13.167c-.358-.196-.73-.404-1.093-.551-1.954-.795-4.015-.842-6.046-.466-.286.053-.84.217-1.095.126a.556.556 0 0 1-.12-.983c.147-.1.405-.122.536-.152 2.77-.631 5.697-.461 8.198.957.176.1.294.193.355.278.345.482-.203 1.081-.735.79Zm.858-2.435c-2.682-1.555-6.016-1.825-8.986-1.01-.816.223-1.217-1.078-.356-1.348a11.47 11.47 0 0 1 2.495-.466c2.596-.21 5.195.29 7.473 1.573.975.548.261 1.765-.627 1.25Zm1.668-2.658c-.387.073-.588-.126-.907-.287-2.134-1.077-4.485-1.372-6.854-1.332-1.033.018-2.062.16-3.084.425-.256.067-.44.092-.554.077-.499-.067-.8-.57-.678-1.06.096-.38.41-.534.794-.637.763-.204 1.57-.345 2.423-.423 3.01-.273 6.398.141 9.07 1.644.718.404.624 1.436-.21 1.593Z"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="instagram-logo"
                                height="24"
                            >
                                <title id="instagram-logo">Instagram</title>
                                <path
                                    d="M16.8196 8.27581C17.4161 8.27581 17.8996 7.79226 17.8996 7.19579C17.8996 6.59931 17.4161 6.1158 16.8196 6.1158C16.2231 6.1158 15.7396 6.59931 15.7396 7.19579C15.7396 7.79226 16.2231 8.27581 16.8196 8.27581Z"
                                    fill="#222222"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    d="M12.0154 7.37838C9.46291 7.37838 7.39373 9.44757 7.39373 12C7.39373 14.5525 9.46291 16.6217 12.0154 16.6217C14.5678 16.6217 16.637 14.5525 16.637 12C16.637 9.44757 14.5678 7.37838 12.0154 7.37838ZM9.01535 12C9.01535 13.6569 10.3585 15 12.0154 15C13.6722 15 15.0154 13.6569 15.0154 12C15.0154 10.3432 13.6722 9 12.0154 9C10.3585 9 9.01535 10.3432 9.01535 12Z"
                                    fill="#222222"
                                ></path>
                                <path
                                    d="M12.0154 3C9.57109 3 9.26464 3.01036 8.30469 3.05416C7.34671 3.09789 6.69251 3.25001 6.12 3.47251C5.52817 3.70251 5.02627 4.01025 4.52593 4.51058C4.02559 5.01092 3.71785 5.51283 3.48785 6.10466C3.26535 6.67716 3.11323 7.33137 3.06951 8.28935C3.02571 9.24926 3.01538 9.55575 3.01538 12C3.01538 14.4443 3.02571 14.7508 3.06951 15.7107C3.11323 16.6687 3.26535 17.3229 3.48785 17.8954C3.71785 18.4872 4.02559 18.9891 4.52593 19.4895C5.02627 19.9898 5.52817 20.2975 6.12 20.5275C6.69251 20.75 7.34671 20.9021 8.30469 20.9459C9.26464 20.9897 9.57109 21 12.0154 21C14.4596 21 14.7661 20.9897 15.726 20.9459C16.684 20.9021 17.3382 20.75 17.9107 20.5275C18.5026 20.2975 19.0045 19.9898 19.5048 19.4895C20.0051 18.9891 20.3129 18.4872 20.5429 17.8954C20.7654 17.3229 20.9175 16.6687 20.9612 15.7107C21.005 14.7508 21.0154 14.4443 21.0154 12C21.0154 9.55575 21.005 9.24926 20.9612 8.28935C20.9175 7.33137 20.7654 6.67716 20.5429 6.10466C20.3129 5.51283 20.0051 5.01092 19.5048 4.51058C19.0045 4.01025 18.5026 3.70251 17.9107 3.47251C17.3382 3.25001 16.684 3.09789 15.726 3.05416C14.7661 3.01036 14.4596 3 12.0154 3ZM12.0154 4.62165C14.4185 4.62165 14.7031 4.6308 15.6521 4.6741C16.5296 4.71415 17.0062 4.86077 17.3233 4.98398C17.7434 5.14725 18.0432 5.34231 18.3582 5.65723C18.6731 5.97215 18.8681 6.272 19.0314 6.69206C19.1546 7.00923 19.3012 7.48577 19.3413 8.36323C19.3846 9.31228 19.3937 9.5969 19.3937 12C19.3937 14.4031 19.3846 14.6878 19.3413 15.6368C19.3012 16.5143 19.1546 16.9908 19.0314 17.308C18.8681 17.728 18.6731 18.0279 18.3582 18.3428C18.0432 18.6577 17.7434 18.8528 17.3233 19.016C17.0062 19.1393 16.5296 19.2859 15.6521 19.3259C14.7032 19.3692 14.4186 19.3784 12.0154 19.3784C9.61211 19.3784 9.32748 19.3692 8.37861 19.3259C7.50112 19.2859 7.02457 19.1393 6.70744 19.016C6.28734 18.8528 5.9875 18.6577 5.67258 18.3428C5.35766 18.0279 5.16259 17.728 4.99936 17.308C4.87611 16.9908 4.72949 16.5143 4.68944 15.6368C4.64615 14.6878 4.637 14.4031 4.637 12C4.637 9.5969 4.64615 9.31228 4.68944 8.36326C4.72949 7.48577 4.87611 7.00923 4.99936 6.69206C5.16259 6.272 5.35766 5.97215 5.67258 5.65723C5.9875 5.34231 6.28734 5.14725 6.70744 4.98398C7.02457 4.86077 7.50112 4.71415 8.37857 4.6741C9.32762 4.6308 9.61225 4.62165 12.0154 4.62165Z"
                                    fill="#222222"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="facebook-logo"
                                height="24"
                            >
                                <title id="facebook-logo">Facebook</title>
                                <path
                                    d="M3.9936 3C3.4446 3 3 3.4446 3 3.9936V20.0064C3 20.5545 3.4446 21 3.9936 21H12.6147V14.0295H10.2684V11.3124H12.6147V9.309C12.6147 6.9843 14.034 5.718 16.1085 5.718C17.1021 5.718 17.9553 5.7927 18.2046 5.8251V8.2551L16.7664 8.256C15.6378 8.256 15.42 8.7915 15.42 9.5781V11.3124H18.1101L17.7591 14.0295H15.42V21H20.0064C20.5554 21 21 20.5545 21 20.0064V3.9936C21 3.4446 20.5554 3 20.0064 3H3.9936Z"
                                    fill="#222222"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="footer-final-text-1">
                        <p className={darkMode ? "text-black" : "text-white "}>
                            The content of this site is copyright-protected and is the
                            property of H & M Hennes & Mauritz AB.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"
                            width="35px"
                            className="footer-img rounded mx-auto d-block "
                            alt="Responsive image"
                        />
                    </div>
                    <div className="footer-final-text-2">
                        <h5 className={darkMode ? "text-black" : "text-white "}>INDIA | Rs.</h5>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default AdminFooter