import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container w-container">
        <div className="w-layout-grid grid-footer">
          <h4 className="no-margin">
            Premium xidmət sifariş etmək üçün elə indi bizimlə əlaqə saxlayın.
          </h4>
          <div className="button-inline">
            <a
              href="https://wa.link/bg23ku"
              className="button-primary-1-icon w-inline-block"
            >
              <div>Təklif Alın</div>
              <div className="button-primary-icon-wrap">
                <img
                  loading="eager"
                  src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6756c558622788afc19a5f32_arrow-icon.svg"
                  alt="Arrow Icon"
                  className="button-icon"
                />
                <img
                  loading="eager"
                  src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6756c558622788afc19a5f32_arrow-icon.svg"
                  alt="Arrow Icon"
                  className="button-hover-icon"
                />
              </div>
            </a>
            <a href="tel:055 444 16 02" className="button-primary-1 w-button">
              Zəng edin: 055 444 16 02
            </a>
          </div>
        </div>
        <div className="w-layout-grid grid-footer-item">
          <div className="footer-item">
            <a href="/" aria-label="link" className="brand w-inline-block">
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  fontFamily: 'Noto Sans, sans-serif',
                  color: '#ffffff'
                }}
              >
                Abbasoğlu təmizlik
              </div>
            </a>
            <p className="footer-description">
              Uzunmüddətli tərəfdaşlıq üçün sistemli, peşəkar və yüksək standartlara uyğun təmizlik.
            </p>
          </div>
          <div className="w-layout-grid grid-footer-items">
            <div className="footer-links">
              <a href="/" className="footer-link">
                Ana Səhifə
              </a>
              <a href="/about" className="footer-link">
                Haqqımızda
              </a>
              <a href="/services" className="footer-link">
                Xidmətlər
              </a>
              <a href="https://wa.link/bg23ku" className="footer-link">
                Əlaqə
              </a>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-detail">
              <img
                loading="eager"
                src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6756d3d03aec6fabebc152f6_call-icon.svg"
                alt="Phone Icon"
                className="footer-icon"
              />
              <a href="tel:055 444 16 02" className="footer-link">
                055 444 16 02
              </a>
            </div>
            <div className="footer-detail">
              <img
                loading="eager"
                src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6756d3d03aec6fabebc152f5_location-icon.svg"
                alt="Location Icon"
                className="footer-icon"
              />
              <div>221 Ahmad Rajabli, Baku 5075</div>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-copyright">
            Developed by{' '}
            <a
              href="https://mysitesolutions.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Mysite
            </a>
          </p>
          <div className="footer-social-inline">
            <a
              href="https://www.facebook.com/abbasoglu.t.mizlik.xidm.ti/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link w-inline-block"
            >
              <img
                loading="eager"
                src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6756d3d03aec6fabebc152f3_facebook.svg"
                alt="Facebook Icon"
                className="footer-social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/cleaning.abbasogli/reels/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link w-inline-block"
            >
              <img
                loading="eager"
                src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6756d3d03aec6fabebc152f1_instagram.svg"
                alt="Instagram Icon"
                className="footer-social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

