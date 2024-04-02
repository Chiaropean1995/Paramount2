



export default function Header() {


    return (
        <>
            <header className="main-header header-style-one">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 p-2">
                            <ul className="social-links list-unstyled d-flex mb-0">
                                <li className="me-4"><a href="https://www.facebook.com/profile.php?id=100063044389705"><i className="bi bi-facebook text-muted"></i></a></li>
                                <li className="me-4"><a href="#"><i className="bi bi-twitter text-muted"></i></a></li>
                                <li className="me-4"><a href="#"><i className="bi bi-google text-muted"></i></a></li>
                                <li><a href="#"><i className="bi bi-linkedin text-muted"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-md-6 d-flex flex-column justify-content-md-end justify-content-center align-items-center align-items-md-end">
                            <ul className="top-links list-unstyled mb-0 d-flex align-items-center">
                                <li className="me-3 border-end pe-3"><a href="#" className="text-decoration-none"><i className="bi bi-telephone text-muted"></i><span className="text-muted d-none d-md-inline"> +603-XXXX XXXX</span></a></li>
                                <li><a href="mailto:paramountvalley@live.com" className="text-decoration-none"><i className="bi bi-envelope text-muted"></i><span className="text-muted d-none d-md-inline"> paramount@live.com</span></a></li>



                            </ul>
                        </div>

                    </div>
                </div>
            </header >


        </>
    )
} 