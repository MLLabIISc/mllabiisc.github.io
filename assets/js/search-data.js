// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research and applied projects from the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Members and alumni of the Machine Learning Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-news",
              title: "News",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "dropdown-awards-amp-press",
              title: "Awards &amp; Press",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/awards/";
              },
            },{id: "dropdown-gallery",
              title: "Gallery",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/gallery/";
              },
            },{id: "dropdown-opportunities",
              title: "Opportunities",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/opportunities/";
              },
            },{id: "news-prof-chiranjib-bhattacharyya-co-chairs-a-special-task-group-on-machine-intelligence-set-up-by-the-karnataka-knowledge-commission",
          title: 'Prof. Chiranjib Bhattacharyya co-chairs a special task group on machine intelligence set up...',
          description: "",
          section: "News",},{id: "news-abhishek-bansal-received-the-computer-society-of-india-bangalore-medal-for-best-m-tech-student-2017-he-was-advised-by-prof-chiranjib-bhattacharyya",
          title: 'Abhishek Bansal received the Computer Society of India Bangalore Medal for Best M.Tech...',
          description: "",
          section: "News",},{id: "news-shikhar-vashishth-advised-by-prof-partha-talukdar-and-prof-chiranjib-bhattacharyya-is-awarded-the-google-phd-fellowship",
          title: 'Shikhar Vashishth, advised by Prof. Partha Talukdar and Prof. Chiranjib Bhattacharyya, is awarded...',
          description: "",
          section: "News",},{id: "news-a-joint-workshop-by-iisc-microsoft-research-and-the-university-of-pennsylvania-on-programming-languages-formal-methods-and-cyber-physical-systems-will-be-held-on-january-10-2019-in-the-department-of-csa",
          title: 'A joint workshop by IISc, Microsoft Research, and the University of Pennsylvania on...',
          description: "",
          section: "News",},{id: "news-prof-chiranjib-bhattacharyya-is-collaborating-with-tata-motors-in-the-domain-of-artificial-intelligence-and-computer-vision",
          title: 'Prof. Chiranjib Bhattacharyya is collaborating with Tata Motors in the domain of artificial...',
          description: "",
          section: "News",},{id: "news-pooja-ravi-kulkarni-is-selected-for-the-computer-society-of-india-bangalore-medal-for-best-m-tech-student-2018-she-was-advised-by-prof-chiranjib-bhattacharyya",
          title: 'Pooja Ravi Kulkarni is selected for the Computer Society of India Bangalore Medal...',
          description: "",
          section: "News",},{id: "news-prof-chiranjib-bhattacharyya-is-organising-deep-tech-entrepreneurship-an-ongoing-effort-to-bring-together-alumni-faculty-and-students-of-iisc-with-the-broader-entrepreneurial-ecosystem-of-deep-technology-companies",
          title: 'Prof. Chiranjib Bhattacharyya is organising Deep Tech Entrepreneurship, an ongoing effort to bring...',
          description: "",
          section: "News",},{id: "news-prof-chiranjib-bhattacharyya-is-organising-the-fate-ml-workshop-on-fairness-accountability-transparency-and-ethics-in-machine-learning-in-collaboration-with-iisc-linkedin-and-microsoft-research",
          title: 'Prof. Chiranjib Bhattacharyya is organising the FATE ML workshop on Fairness, Accountability, Transparency...',
          description: "",
          section: "News",},{id: "news-prof-chiranjib-bhattacharyya-takes-charge-as-the-chair-of-the-csa-department",
          title: 'Prof. Chiranjib Bhattacharyya takes charge as the Chair of the CSA Department.',
          description: "",
          section: "News",},{id: "news-covid-swift-developed-by-the-ml-lab-and-niramai-has-now-been-launched-as-xraysetu",
          title: 'COVID-SWIFT, developed by the ML Lab and Niramai, has now been launched as...',
          description: "",
          section: "News",},{id: "news-nabanita-paul-iisc-and-chiranjib-bhattacharyya-iisc-won-the-innovation-in-software-award-at-the-icsr-2021-robot-design-competition-for-the-submission-can-non-humanoid-social-robots-reduce-workload-of-special-educators",
          title: 'Nabanita Paul (IISc) and Chiranjib Bhattacharyya (IISc) won the Innovation in Software Award...',
          description: "",
          section: "News",},{id: "projects-covid-swift-now-known-as-xraysetu",
          title: 'COVID-SWIFT (Now Known as XraySetu)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_covid-swift/";
            },},{id: "projects-covid-19-projects-from-csa-iisc",
          title: 'COVID-19 Projects from CSA, IISc',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_covid19/";
            },},{id: "projects-teaching-assistance-through-social-robotics-for-children-with-autism",
          title: 'Teaching Assistance through Social Robotics for Children with Autism',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_social-robotics/";
            },},{id: "projects-dslr-dynamic-to-static-lidar-scan-reconstruction-using-adversarially-trained-autoencoder",
          title: 'DSLR: Dynamic to Static LiDAR Scan Reconstruction Using Adversarially Trained Autoencoder',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_dslr/";
            },},{id: "projects-slam-on-lidar-based-autonomous-vehicles",
          title: 'SLAM on LiDAR-Based Autonomous Vehicles',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_lidar-slam/";
            },},{id: "projects-ml-based-prediction-of-cognitive-impairment-by-understanding-brain-interactions-in-collaboration-with-the-centre-for-brain-research",
          title: 'ML-Based Prediction of Cognitive Impairment by Understanding Brain Interactions, in Collaboration with the...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_cognitive-impairment/";
            },},{id: "projects-overlapping-community-detection",
          title: 'Overlapping Community Detection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_community-detection/";
            },},{id: "projects-program-synthesis-meets-machine-learning",
          title: 'Program Synthesis Meets Machine Learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_program-synthesis/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
