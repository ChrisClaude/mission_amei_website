import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>&copy; 2019-2020 Mission AMEI &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
                </p>
            </footer>
        );
    }
}

export default Footer;