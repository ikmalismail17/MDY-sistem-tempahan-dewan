const Footer = () => {
    let currentYear = new Date().getFullYear();

    return (
        <>
        <footer className="footer footer-center p-4 bg-base-100 text-base-content">
            <aside>
                <p>Copyright © {currentYear} Majlis Daerah Yan</p>
            </aside>
        </footer>
        </>
    );
}

export default Footer;