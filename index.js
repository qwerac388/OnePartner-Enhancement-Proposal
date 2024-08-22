document.addEventListener("DOMContentLoaded", function () {
  const featuresCarousel = document.querySelector(
    "#app-features .carousel-inner"
  );
  const proposalCarousel = document.querySelector("#proposal .carousel-inner");
  const carousels = document.querySelectorAll(".carousel");
  let currentIndexFeatures = 0;
  let currentIndexProposal = 0;

  const proposals = [
    {
      title: "1. 開發簡體中文界面",
      details: [
        "在現有的繁體中文基礎上，增加簡體中文界面",
        "實現無縫切換語言功能，方便不同背景的業務人員使用",
      ],
    },
    {
      title: "2. 加入AI輔助回答常見問題",
      details: [
        "優化知識庫搜索功能，加入AI輔助回答常見問題",
        "建立一個建議書生成工具，加入個人化推薦功能",
      ],
    },
    {
      title: "3. 支援客戶遠程簽署文件",
      details: [
        "開發移動簽署功能，支持客戶遠程簽署文件",
        "增設視頻會議工具，方便業務人員與客戶進行在線諮詢",
      ],
    },
    {
      title: "4. 增設智能提醒系統",
      details: [
        "增設智能提醒系統，於手機建立提示，自動提醒業務人員跟進繳費、補充資料和滿期保單",
        "擴展現有的新單進度、保單查詢和通知書查詢功能",
      ],
    },
    {
      title: "5. 整合社交功能",
      details: [
        "開發內部社交平台，促進業務人員之間的交流和經驗分享",
        "配合社交媒體分享功能，方便代理人拓展業務網絡",
      ],
    },

    {
      title: "6. 自定義的業績儀表板",
      details: [
        "設計可自定義的業績儀表板，展示關鍵績效指標",
        "開發預測分析工具，幫助業務人員識別銷售機會",
      ],
    },
  ];

  // Populate proposal carousel
  proposals.forEach((proposal) => {
    const div = document.createElement("div");
    div.className = "proposal-item";
    div.innerHTML = `
              <h3>${proposal.title}</h3>
              <ul>
                  ${proposal.details
                    .map((detail) => `<li>${detail}</li>`)
                    .join("")}
              </ul>
          `;
    proposalCarousel.appendChild(div);
  });

  function updateCarousel(carousel, index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  carousels.forEach((carousel) => {
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");
    const inner = carousel.querySelector(".carousel-inner");
    const items = inner.children;
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "carousel-dots";
    carousel.appendChild(dotsContainer);
    let currentIndex = 0;

    // Create dots
    for (let i = 0; i < items.length; i++) {
      const dot = document.createElement("div");
      dot.className = "carousel-dot";
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll(".carousel-dot");

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel(inner, currentIndex);
      updateDots();
    }

    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      goToSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length;
      goToSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
    });
  });

  // Image modal functionality
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("expandedImg");
  const closeBtn = document.getElementsByClassName("close")[0];

  document.querySelectorAll(".expandable").forEach((img) => {
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
