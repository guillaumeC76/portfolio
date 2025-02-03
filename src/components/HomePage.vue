<template>
  <div class="home">
    <div class="top_block">
      <header>
        <div class="anchor_link">
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="social_link">
          <a href="https://urlr.me/sXHqvx" target="_blank"
            ><img
              class="linkedin"
              src="@/assets/img/Pictos/LinkedIn.svg"
              alt="Picto LinkedIn"
          /></a>
          <a href="https://urlr.me/PURNsF" target="_blank"
            ><img src="@/assets/img/Pictos/Behance.svg" alt="Picto LinkedIn"
          /></a>
          <a href="mailto:ophelie.dossantos12@gmail.com"
            ><img src="@/assets/img/Pictos/Mail.svg" alt="Picto LinkedIn"
          /></a>
        </div>
      </header>

      <div class="presentation" id="apropos">
        <img
          class="img_ophelie"
          src="@/assets/img/photo_header.png"
          alt="Portrait de Ophélie Dos Santos"
        />

        <div class="text_presentation">
          <div class="filter_presentation">
            <p>Direction artistique</p>
            <p>Stratégie digitale</p>
            <p>UX/UI design</p>
          </div>

          <h2>Enchantée,</h2>
          <h1>Ophélie</h1>
          <h3>* Votre future atout communication</h3>

          <p>
            J’aide les entreprises à se faire remarquer en créant des stratégies
            de communication qui leur ressemblent. Du brainstorming à la
            livraison, je suis là pour tout gérer, avec toujours deux mots
            d’ordre : faire bien et faire beau.
            <br />
            <br />
            En ce moment, je cherche de nouvelles aventures, que ce soit
            <b>en freelance</b> ou <b>en CDI.</b> Alors si vous avez un projet
            ou une mission qui mérite un coup de boost, faites-moi signe !
          </p>

          <a class="cta" href="https://ophelie.colombel.net/img/CV.pdf" target="_blank"
            >Jetez un œil à mon CV
            <img src="@/assets/img/Pictos/fleche.svg" alt="Icone de flèche"
          /></a>
        </div>
      </div>
    </div>

    <div class="last_projects" id="projets">
      <h4>Mes derniers projets</h4>

      <div class="project peinture_et_nuances">
        <div class="project_text">
          <div class="text_without_footer">
            <h5>Peinture & Nuances</h5>

            <p>
              Pour l'entreprise Peinture & Nuances, qui souhaitait moderniser
              son image après une refonte de son identité graphique, j'ai
              contribué à la refonte de leur site web en réalisant les missions
              suivantes :
            </p>

            <ul>
              <li>Conception UX/UI</li>
              <li>Rédaction web</li>
              <li>Réalisation de posts réseaux sociaux</li>
            </ul>

            <a class="cta" target="_blank" href="https://peinture-nuances.com/"
              >Voir le site web
              <img src="@/assets/img/Pictos/fleche.svg" alt="Icone de flèche" />
            </a>
          </div>

          <p>
            Date : 2024
            <br />
            Projet réalisé au sein de l’agence Indusrank
          </p>
        </div>

        <div class="project_image">
          <img
            data-aos="flip-left"
            class="img1"
            src="@/assets/img/peinture_et_nuances/mockup_iphone.png"
            alt="Image d'illustration pour peinture & nuances"
          />
          <img
            data-aos="flip-up"
            class="img2"
            src="@/assets/img/peinture_et_nuances/mockup_posts_instagram.png"
            alt="Image d'illustration pour peinture & nuances"
          />
          <img
            data-aos="flip-right"
            class="img3"
            src="@/assets/img/peinture_et_nuances/mockup_tablette.png"
            alt="Image d'illustration pour peinture & nuances"
          />
          <img
            data-aos="fade-right"
            class="img4"
            src="@/assets/img/peinture_et_nuances/post_instagram.png"
            alt="Image d'illustration pour peinture & nuances"
          />
          <img
            data-aos="fade-left"
            class="img5"
            src="@/assets/img/peinture_et_nuances/page_qui_sommes_nous.png"
            alt="Image d'illustration pour peinture & nuances"
          />
        </div>

        <Swiper
      class="swiper-container"
      :slides-per-view="1"
      :loop="true"
      :space-between="10"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      navigation
      :pagination="{ clickable: true }"
      style="display: none;"
    >
      <SwiperSlide>
        <div class="slide-content">
          <img
            src="@/assets/img/peinture_et_nuances/mockup_iphone.png"
            alt="Image 1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-content">
          <img
            src="@/assets/img/peinture_et_nuances/mockup_posts_instagram.png"
            alt="Image 2"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-content">
          <img
            src="@/assets/img/peinture_et_nuances/mockup_tablette.png"
            alt="Image 3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-content">
          <img
            src="@/assets/img/peinture_et_nuances/post_instagram.png"
            alt="Image 3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide-content">
          <img
            src="@/assets/img/peinture_et_nuances/page_qui_sommes_nous.png"
            alt="Image 3"
          />
        </div>
      </SwiperSlide>
    </Swiper>
      </div>

      <div class="project indusrank">
        <div class="project_text">
          <div class="text_without_footer">
            <h5>Indusrank</h5>

            <p>
              Pour l'entreprise Indusrank, qui souhaitait apporter une dimension
              plus moderne à son site web, j'ai réalisé une refonte complète en
              prenant en charge les missions suivantes :
            </p>

            <ul>
              <li>Conception UX/UI</li>
              <li>Rédaction web</li>
              <li>Réalisation de posts réseaux sociaux</li>
              <li>Mise à jour de la charte graphique</li>
            </ul>
          </div>

          <p>
            Date : 2024
            <br />
            Projet réalisé au sein de l’agence Indusrank
          </p>
        </div>

        <div class="project_image">
          <div class="img_part_1">
            <img
              data-aos="flip-left"
              class="img1"
              src="@/assets/img/Indusrank/palette_de_couleurs.png"
              alt="Image d'illustration pour Indusrank"
            />
            <img
              data-aos="flip-up"
              class="img2"
              src="@/assets/img/Indusrank/exemple_post_linkedin.png"
              alt="Image d'illustration pour Indusrank"
            />
            <img
              data-aos="fade-right"
              class="img3"
              src="@/assets/img/Indusrank/mockup_ordinateur.png"
              alt="Image d'illustration pour Indusrank"
            />
          </div>

          <div class="img_part_2">
            <img
              data-aos="flip-right"
              class="img4"
              src="@/assets/img/Indusrank/mockup_accueil.png"
              alt="Image d'illustration pour Indusrank"
            />
            <img
              data-aos="fade-left"
              class="img5"
              src="@/assets/img/Indusrank/Composants.png"
              alt="Image d'illustration pour Indusrank"
            />
          </div>
        </div>

        <Swiper
          class="swiper-container"
          :slides-per-view="1"
          :loop="true"
          :space-between="10"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          navigation
          style="display: none"
        >
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Indusrank/mockup_accueil.png"
                alt="Image 3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Indusrank/palette_de_couleurs.png"
                alt="Image 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Indusrank/exemple_post_linkedin.png"
                alt="Image 2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Indusrank/mockup_ordinateur.png"
                alt="Image 3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img src="@/assets/img/Indusrank/Composants.png" alt="Image 3" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="project salt">
        <div class="project_text">
          <div class="text_without_footer">
            <h5>Salt</h5>

            <p>
              Pour la création de leur application, la marque Salt souhaitait
              une identité graphique forte et reconnaissable, parfaitement
              adaptée à leur produit et à leur cible. J'ai contribué à ce projet
              en réalisant les missions suivantes :
            </p>

            <ul>
              <li>Création du logo</li>
              <li>Développement d'une identité graphique</li>
              <li>Conception UX/UI</li>
              <li>Rédaction web</li>
            </ul>
          </div>

          <p>
            Date : 2023
            <br />
            Projet réalisé au sein de l’IES Business School
          </p>
        </div>

        <div class="project_image">
          <div class="duo_image">
            <img
              data-aos="flip-left"
              class="img1"
              src="@/assets/img/Salt/mockup_affiche.png"
              alt="Image d'illustration pour Salt"
            />
            <img
              data-aos="flip-left"
              class="img1"
              src="@/assets/img/Salt/Logo.png"
              alt="Image d'illustration pour Salt"
            />
          </div>

          <img
            data-aos="flip-up"
            class="img2"
            src="@/assets/img/Salt/pop_up_tarif.png"
            alt="Image d'illustration pour Salt"
          />
          <img
            data-aos="flip-right"
            class="img3"
            src="@/assets/img/Salt/page_accueil.png"
            alt="Image d'illustration pour Salt"
          />
          <img
            data-aos="fade-right"
            class="img4"
            src="@/assets/img/Salt/mockup_ordinateur.png"
            alt="Image d'illustration pour Salt"
          />
          <img
            data-aos="fade-left"
            class="img5"
            src="@/assets/img/Salt/illustration_notification.png"
            alt="Image d'illustration pour Salt"
          />
        </div>

        <Swiper
          class="swiper-container"
          :slides-per-view="1"
          :loop="true"
          :space-between="10"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          navigation
          style="display: none"
        >
          <SwiperSlide>
            <div class="slide-content">
              <img src="@/assets/img/Salt/page_accueil.png" alt="Image 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img src="@/assets/img/Salt/mockup_affiche.png" alt="Image 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img src="@/assets/img/Salt/Logo.png" alt="Image 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img src="@/assets/img/Salt/pop_up_tarif.png" alt="Image 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Salt/mockup_ordinateur.png"
                alt="Image 3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Salt/illustration_notification.png"
                alt="Image 3"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="project arboricat">
        <div class="project_text">
          <div class="text_without_footer">
            <h5>Arboricat</h5>

            <p>
              Pour le site e-commerce Arboricat, qui souhaitait refondre son
              site web après avoir redéfini sa stratégie, j'ai participé au
              projet en réalisant les missions suivantes :
            </p>

            <ul>
              <li>Conception UX/UI</li>
              <li>Rédaction web</li>
              <li>Réalisation de posts réseaux sociaux</li>
            </ul>
          </div>

          <p>
            Date : 2024
            <br />
            Projet réalisé au sein de l’agence Indusrank
          </p>
        </div>

        <div class="project_image">
          <div class="img_part_1">
            <img
              data-aos="flip-left"
              class="img1"
              src="@/assets/img/Arboricat/mockup_tablette.png"
              alt="Image d'illustration pour Arboricat"
            />
            <img
              data-aos="fade-right"
              class="img2"
              src="@/assets/img/Arboricat/mockup_instagram.png"
              alt="Image d'illustration pour Arboricat"
            />
          </div>

          <div class="img_part_2">
            <img
              data-aos="flip-right"
              class="img3"
              src="@/assets/img/Arboricat/palette_de_couleurs.png"
              alt="Image d'illustration pour Arboricat"
            />
            <img
              data-aos="fade-left"
              class="img4"
              src="@/assets/img/Arboricat/mockup_ordinateur.png"
              alt="Image d'illustration pour Arboricat"
            />
          </div>
        </div>

        <Swiper
          class="swiper-container"
          :slides-per-view="1"
          :loop="true"
          :space-between="10"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          navigation
          style="display: none"
        >
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Arboricat/mockup_ordinateur.png"
                alt="Image 3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Arboricat/mockup_tablette.png"
                alt="Image 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Arboricat/mockup_instagram.png"
                alt="Image 2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="@/assets/img/Arboricat/palette_de_couleurs.png"
                alt="Image 3"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="pre_footer">
        <div class="phrase_pre_footer">
          <h6>
            Alors, <br />
            on travaille <span>ensemble</span> ?
          </h6>
        </div>
      </div>

      <footer id="contact">
        <a href="tel:+33673402457"
          ><img
            src="@/assets/img/Pictos/telephone_footer.png"
            alt="Picto téléphone"
          />06 73 40 24 57</a
        >
        <a href="mailto:ophelie.dossantos12@gmail.com" target="_blank"
          ><img
            src="@/assets/img/Pictos/mail_footer.png"
            alt="Picto mail"
          />ophelie.dossantos12@gmail.com</a
        >
        <a href="https://urlr.me/sXHqvx" target="_blank"
          ><img
            src="@/assets/img/Pictos/linkedin_footer.png"
            alt="Picto linkedin"
          />https://urlr.me/sXHqvx</a
        >
        <a href="https://urlr.me/PURNsF" target="_blank"
          ><img
            src="@/assets/img/Pictos/behance_footer.png"
            alt="Picto béhance"
          />https://urlr.me/PURNsF</a
        >
      </footer>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
