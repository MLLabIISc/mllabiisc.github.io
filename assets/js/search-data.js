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
  },{id: "nav-people",
          title: "People",
          description: "Members and alumni of the Machine Learning Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
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
          section: "News",},{id: "news-the-paper-using-inherent-structures-to-design-lean-2-layer-rbms-by-abhishek-bansal-ibm-india-abhinav-anand-iisc-and-chiranjib-bhattacharyya-iisc-has-been-accepted-at-icml-2018",
          title: 'The paper “Using Inherent Structures to design Lean 2-layer RBMs” by Abhishek Bansal...',
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
          section: "News",},{id: "news-the-paper-finding-a-latent-k-simplex-in-o-k-nnz-data-time-via-subset-smoothing-by-chiranjib-bhattacharyya-and-ravindran-kannan-published-in-soda-2020",
          title: 'The paper “Finding a latent k-simplex in O*(k·nnz(data)) time via Subset Smoothing” by...',
          description: "",
          section: "News",},{id: "news-prof-chiranjib-bhattacharyya-is-organising-the-fate-ml-workshop-on-fairness-accountability-transparency-and-ethics-in-machine-learning-in-collaboration-with-iisc-linkedin-and-microsoft-research",
          title: 'Prof. Chiranjib Bhattacharyya is organising the FATE ML workshop on Fairness, Accountability, Transparency...',
          description: "",
          section: "News",},{id: "news-the-paper-near-optimal-sample-complexity-bounds-for-learning-latent-k-polytopes-and-applications-to-ad-mixtures-by-chiranjib-bhattacharyya-and-ravindran-kannan-was-published-in-icml-2020",
          title: 'The paper “Near-optimal sample complexity bounds for learning Latent k-polytopes and applications to...',
          description: "",
          section: "News",},{id: "news-the-paper-learning-with-subquadratic-regularization-a-primal-dual-approach-by-raman-sankaran-francis-bach-and-chiranjib-bhattacharyya-was-published-in-ijcai-2020",
          title: 'The paper “Learning With Subquadratic Regularization: A Primal-Dual Approach” by Raman Sankaran, Francis...',
          description: "",
          section: "News",},{id: "news-prof-chiranjib-bhattacharyya-takes-charge-as-the-chair-of-the-csa-department",
          title: 'Prof. Chiranjib Bhattacharyya takes charge as the Chair of the CSA Department.',
          description: "",
          section: "News",},{id: "news-the-paper-dslr-dynamic-to-static-lidar-scan-reconstruction-using-adversarially-trained-autoencoder-by-p-kumar-s-sahoo-v-shah-v-kondameedi-a-jain-a-verma-c-bhattacharyya-iisc-and-v-vinay-amidc-cmi-was-published-in-aaai-2021",
          title: 'The paper “DSLR: Dynamic to Static LiDAR Scan Reconstruction Using Adversarially Trained Autoencoder”...',
          description: "",
          section: "News",},{id: "news-the-paper-rawlsian-fair-adaptation-of-deep-learning-classifiers-by-pooja-gupta-iisc-chiranjib-bhattacharyya-iisc-kulin-shah-msr-india-and-amit-deshpande-msr-india-was-published-in-aies-2021",
          title: 'The paper “Rawlsian Fair Adaptation of Deep Learning Classifiers” by Pooja Gupta (IISc),...',
          description: "",
          section: "News",},{id: "news-the-paper-can-non-humanoid-social-robots-reduce-workload-of-special-educators-an-online-and-in-premises-field-study-by-nabanita-paul-iisc-siddharth-ramesh-iisc-chiranjib-bhattacharyya-iisc-jayashree-ramesh-asha-and-priya-vijayan-asha-was-published-in-icra-2021",
          title: 'The paper “Can Non-Humanoid Social Robots Reduce Workload of Special Educators: An Online...',
          description: "",
          section: "News",},{id: "news-covid-swift-developed-by-the-ml-lab-and-niramai-has-now-been-launched-as-xraysetu",
          title: 'COVID-SWIFT, developed by the ML Lab and Niramai, has now been launched as...',
          description: "",
          section: "News",},{id: "news-the-paper-finding-k-in-latent-k-polytope-by-chiranjib-bhattacharyya-iisc-ravindran-kannan-msr-and-amit-kumar-iit-delhi-was-published-in-icml-2021",
          title: 'The paper “Finding k in Latent k-Polytope” by Chiranjib Bhattacharyya (IISc), Ravindran Kannan...',
          description: "",
          section: "News",},{id: "news-nabanita-paul-iisc-and-chiranjib-bhattacharyya-iisc-won-the-innovation-in-software-award-at-the-icsr-2021-robot-design-competition-for-the-submission-can-non-humanoid-social-robots-reduce-workload-of-special-educators",
          title: 'Nabanita Paul (IISc) and Chiranjib Bhattacharyya (IISc) won the Innovation in Software Award...',
          description: "",
          section: "News",},{id: "news-the-paper-when-to-intervene-learning-optimal-intervention-policies-for-critical-events-by-niranjan-damera-venkata-hp-and-chiranjib-bhattacharyya-iisc-was-published-in-neurips-2022",
          title: 'The paper “When to Intervene: Learning Optimal Intervention Policies for Critical Events” by...',
          description: "",
          section: "News",},{id: "news-the-paper-dfpc-data-flow-driven-pruning-of-coupled-channels-without-data-by-tanay-narshana-observe-ai-chaitanya-murti-iisc-and-chiranjib-bhattacharyya-iisc-was-published-in-iclr-2023",
          title: 'The paper “DFPC - Data Flow Driven Pruning of Coupled Channels without Data”...',
          description: "",
          section: "News",},{id: "news-the-paper-tvsprune-pruning-nondiscriminative-filters-via-total-variation-separability-of-intermediate-filters-without-fine-tuning-by-chaitanya-murti-iisc-tanay-narshana-observe-ai-and-chiranjib-bhattacharyya-iisc-was-published-in-iclr-2023",
          title: 'The paper “TVSPrune - Pruning Nondiscriminative Filters via Total Variation Separability of Intermediate...',
          description: "",
          section: "News",},{id: "news-a-paper-discussing-technical-challenges-in-diagnosing-chest-x-rays-through-mobile-phones-such-as-those-launched-in-xraysetu-is-now-available-in-nature-scientific-reports",
          title: 'A paper discussing technical challenges in diagnosing chest X-rays through mobile phones, such...',
          description: "",
          section: "News",},{id: "news-the-paper-lp-based-construction-of-dc-decompositions-for-efficient-inference-of-markov-random-fields-by-chaitanya-murti-dhruva-kashyap-and-chiranjib-bhattacharyya-was-published-in-aistats-2024",
          title: 'The paper “LP-based Construction of DC Decompositions for Efficient Inference of Markov Random...',
          description: "",
          section: "News",},{id: "news-the-paper-random-separating-hyperplane-theorem-and-learning-polytopes-by-chiranjib-bhattacharyya-iisc-ravindran-kannan-cmu-and-amit-kumar-iit-delhi-was-published-in-icalp-2024",
          title: 'The paper “Random Separating Hyperplane Theorem and Learning Polytopes” by Chiranjib Bhattacharyya (IISc),...',
          description: "",
          section: "News",},{id: "news-the-paper-decision-time-illuminating-performance-in-india-s-district-courts-by-varsha-aithala-nlsiu-anushka-sachan-nlsiu-srijoni-sen-nlsiu-himanshu-payal-iisc-and-chiranjib-bhattacharyya-iisc-was-published-in-cambridge-data-amp-amp-policy-vol-6",
          title: 'The paper “Decision time: illuminating performance in India’s district courts” by Varsha Aithala...',
          description: "",
          section: "News",},{id: "news-the-paper-discedit-model-editing-by-identifying-discriminative-components-by-chaitanya-murti-and-chiranjib-bhattacharyya-was-published-in-neurips-2024",
          title: 'The paper “DisCEdit: Model Editing by Identifying Discriminative Components” by Chaitanya Murti and...',
          description: "",
          section: "News",},{id: "news-the-paper-predicting-ground-state-properties-constant-sample-complexity-and-deep-learning-algorithms-by-marc-wanner-chalmers-laura-lewis-cambridge-chiranjib-bhattacharyya-iisc-devdatt-dubhashi-chalmers-and-alexandru-gheorghiu-chalmers-was-published-in-neurips-2024",
          title: 'The paper “Predicting Ground State Properties: Constant Sample Complexity and Deep Learning Algorithms”...',
          description: "",
          section: "News",},{id: "news-the-paper-chexwhatsapp-a-dataset-for-exploring-challenges-in-the-diagnosis-of-chest-x-rays-through-mobile-devices-by-mariamma-antony-rajiv-porana-sahil-m-lathiya-siva-teja-kakileti-and-chiranjib-bhattacharyya-was-published-in-cvpr-2025",
          title: 'The paper “CheXwhatsApp: A Dataset for Exploring Challenges in the Diagnosis of Chest...',
          description: "",
          section: "News",},{id: "news-the-paper-modhifi-identifying-high-fidelity-predictive-components-for-model-modification-by-dhruva-kashyap-chaitanya-murti-pranav-k-nayak-tanay-narshana-and-chiranjib-bhattacharyya-was-published-as-a-spotlight-at-neurips-2025",
          title: 'The paper “ModHiFi: Identifying High Fidelity Predictive Components for Model Modification” by Dhruva...',
          description: "",
          section: "News",},{id: "news-the-paper-on-optimal-steering-to-achieve-exact-fairness-by-mohit-sharma-amit-deshpande-chiranjib-bhattacharyya-and-rajiv-ratn-shah-was-published-in-neurips-2025",
          title: 'The paper “On Optimal Steering to Achieve Exact Fairness” by Mohit Sharma, Amit...',
          description: "",
          section: "News",},{id: "news-the-paper-blending-neural-control-density-functions-for-stabilization-and-safety-by-sahil-chaudhary-chaitanya-murti-and-chiranjib-bhattacharyya-was-published-in-icml-2026",
          title: 'The paper “Blending Neural Control Density Functions for Stabilization and Safety” by Sahil...',
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
