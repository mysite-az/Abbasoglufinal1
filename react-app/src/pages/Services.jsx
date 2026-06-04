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
                    src="images/service-general.jpg"
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
                    src="images/service-fasad.jpg"
                    className="service-one-image"
                  />
                </div>
                <div className="service-one-info">
                  <div>
                    <h3 className="service-one-title">Fasad və Şüşə</h3>
                    <p className="service-one-description">
                      Binaların fasad və şüşələrinin peşəkar yuyulması.
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
                    src="images/service-office.jpg"
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
                <div className="service-one-image-wrap">
                  <img
                    loading="eager"
                    alt="Service Image"
                    src="images/service-sofa.jpg"
                    className="service-one-image"
                  />
                </div>
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
                <div className="service-one-image-wrap">
                  <img
                    loading="eager"
                    alt="Service Image"
                    src="images/service-fire.jpg"
                    className="service-one-image"
                  />
                </div>
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


      {/* faq-section */}
      <section className="faq-section section-spacing" style={{ opacity: 1 }}>
        <div className="w-layout-blockcontainer container-medium w-container">
          <div className="section-title text-center">
            <h2>Tez-tez verilən suallar</h2>
          </div>
          <div className="faq-wrap last">
            <div className="accordion-item">
              <div className="accordion-heading">
                <h3 className="accordion-title">Hansı xidmətləri təklif edirsiniz?</h3>
              </div>
              <div className="accordion-content-wrapper">
                <p className="accordion-content">Biz yaşayış sahələrinin təmizliyi, ticarət və ofis mərkəzləri, xalça yuyulması, pəncərə təmizliyi və dərindən təmizlik daxil olmaqla geniş bir təmizlik xidmətləri spektrini təklif edirik.</p>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-heading">
                <h4 className="accordion-title">Təmizlik xidmətini necə sifariş etməliyəm?</h4>
              </div>
              <div className="accordion-content-wrapper">
                <p className="accordion-content">Xidmət sifariş etmək çox asandır! Sizin üçün uyğun vaxtı onlayn şəkildə veb saytımızdan, zəng edərək və ya e-poçt vasitəsilə planlaşdıra bilərsiniz.</p>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-heading">
                <h5 className="accordion-title">Ləğv siyasətiniz nədən ibarətdir?</h5>
              </div>
              <div className="accordion-content-wrapper">
                <p className="accordion-content">Planların dəyişə biləcəyini anlayırıq. Əgər görüşünüzü ləğv etməli və ya vaxtını dəyişməli olarsınızsa, xahiş edirik ki, ən azı 24 saat əvvəldən bizimlə əlaqə saxlayasınız.</p>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-heading">
                <h6 className="accordion-title">Hər ziyarət üçün eyni təmizlik komandasını istəyə bilərəmmi?</h6>
              </div>
              <div className="accordion-content-wrapper">
                <p className="accordion-content">Müştərilərimiz üçün davamlılığı təmin etməyə çalışırıq. Əgər hər təmizlikdə eyni təlimli komandanın olmasını üstün tutursunuzsa, lütfən bildirin.</p>
              </div>
            </div>
            <div className="accordion-item last">
              <div className="accordion-heading">
                <h6 className="accordion-title">Təmizlik zamanı evdə (obyektdə) olmağım mütləqdirmi?</h6>
              </div>
              <div className="accordion-content-wrapper">
                <p className="accordion-content">Bu sizdən asılıdır! Siz təmizlik zamanı obyektdə ola da bilərsiniz, ya da təhlükəsizlik və etibarlılıqla prosesi bizə həvalə edə bilərsiniz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

