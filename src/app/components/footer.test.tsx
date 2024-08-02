import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './footer';

describe('Footer', () => {
  it('should render the footer component', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('should render the company name link', () => {
    render(<Footer />);
    const companyLink = screen.getByRole('link', { name: /manual/i });
    expect(companyLink).toBeInTheDocument();
    expect(companyLink).toHaveAttribute('href', 'https://manual.com/');
  });

  it('should render all product links', () => {
    render(<Footer />);
    const productLinks = ['Popular', 'Trending', 'Guided', 'Products'];
    productLinks.forEach((linkText) => {
      const linkElement = screen.getByText(linkText);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('should render all company links', () => {
    render(<Footer />);
    const companyLinks = ['Press', 'Mission', 'Strategy', 'About'];
    companyLinks.forEach((linkText) => {
      const linkElement = screen.getByText(linkText);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('should render all info links', () => {
    render(<Footer />);
    const infoLinks = ['Support', 'Customer Service', 'Get started'];
    infoLinks.forEach((linkText) => {
      const linkElement = screen.getByText(linkText);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('should render all social media icons', () => {
    render(<Footer />);
    const socialMediaLinks = [
      { name: 'Facebook page', href: '#' },
      { name: 'Google', href: '#' },
      { name: 'Twitter page', href: '#' },
    ];
    socialMediaLinks.forEach(({ name }) => {
      const iconElement = screen.getByRole('link', { name });
      expect(iconElement).toBeInTheDocument();
    });
  });

  it('should render the copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2024 Manual. All Rights Reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });
});
