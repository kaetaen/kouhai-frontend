function Footer () {

    return (
        <footer className="page-footer font-small text-light bg-success">
            <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Rubens dos Santos •
            <a href="github.com/kaetaen" target={'_blank'}> github.com/kaetaen</a>
            </div>
        </footer>
    )
}

export default Footer