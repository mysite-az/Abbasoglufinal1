import React from 'react';

function Services() {
  return (
    <>
      <section className="service-hero-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid-service-hero">
            <div className="service-hero-title-wrap">
              <h1 className="service-hero-title">Ekspert təmizlik həlləri</h1>
              <p className="service-hero-description">
                Biz sizin unikal ehtiyaclarınıza uyğunlaşdırılmış ən yüksək səviyyəli təmizlik xidmətləri təqdim
                etməkdən qürur duyuruq.
              </p>
            </div>
            <div className="service-hero-image-wrap">
              <img
                width="495"
                loading="eager"
                alt="Service Image"
                src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/67591346b4d718be00989131_service-image.avif"
                className="service-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="service-one-section section-spacing">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid-service-one">
            <div className="service-one-item">
              <div>
                <div className="service-one-image-wrap">
                  <img
                    loading="eager"
                    alt="Service Image"
                    src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6757cfffc7e5ff9daae7bf57_service-image-01.avif"
                    className="service-one-image"
                  />
                </div>
                <div className="service-one-info">
                  <h2 className="service-one-title">Ofis və Biznes mərkəzi</h2>
                  <p className="service-one-description">
                    Sabit və yüksək səviyyəli xidmət. Müqaviləli xidmət və keyfiyyət hesabatı.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-one-item">
              <div>
                <div className="service-one-image-wrap">
                  <img
                    loading="eager"
                    alt="Service Image"
                    src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6757cfffc7e5ff9daae7bf4b_service-image-02.avif"
                    className="service-one-image"
                  />
                </div>
                <div className="service-one-info">
                  <div>
                    <h3 className="service-one-title">Fasad və Şüşə</h3>
                    <p className="service-one-description">
                      Binaların fasad və şüşələrinin peşəkar yuyulması. Sənaye alpinistləri.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-one-item">
              <div>
                <div className="service-one-image-wrap">
                  <img
                    loading="eager"
                    alt="Service Image"
                    src="https://cdn.prod.website-files.com/6756b988bb35f025028d3f34/6757cfffc7e5ff9daae7bf53_service-image-04.avif"
                    className="service-one-image"
                  />
                </div>
                <div className="service-one-info">
                  <h5 className="service-one-title">Təmir Sonrası Təmizlik</h5>
                  <p className="service-one-description">
                    Tikinti və təmirdən sonra toz və çirklərin xüsusi texnika və vasitələrlə təmizlənməsi.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-one-item">
              <div>
                <div className="service-one-image-wrap" />
                <div className="service-one-info">
                  <h5 className="service-one-title">Dezinfeksiya</h5>
                  <p className="service-one-description">
                    Məkanların virus və bakteriyalardan tam təmizlənməsi. Peşəkar dezinfeksiya xidməti.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-one-item">
              <div>
                <div className="service-one-image-wrap" />
                <div className="service-one-info">
                  <h5 className="service-one-title">Yanğından sonra təmizlik</h5>
                  <p className="service-one-description">
                    Yanğın sonrası his, his qoxusu və çirklərin xüsusi texnologiya ilə təmizlənməsi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

