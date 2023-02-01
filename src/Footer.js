import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

const Footer = ({ className = null }) => (
    <footer className={`footer footer-center p-4 ${className}`}>
        <div>
            <p>Made with <HeartIcon className="inline h-6 w-6 text-secondary" /> by Savanah Steigen</p>
        </div>
    </footer>
);

export default Footer;