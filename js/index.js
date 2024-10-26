const DEFAULT_SIZE = 12;
const scripts = {
  byw漫畫下載:
    "https://greasyfork.org/en/scripts/512076-byw%E6%BC%AB%E7%95%AB%E4%B8%8B%E8%BC%89",
  "Dynasty Scans Batch Downloader":
    "https://greasyfork.org/en/scripts/513624-dynasty-scans-batch-downloader",
};
const size = Object.keys(scripts).length;
const diff = DEFAULT_SIZE - size;
const empty_html = `<div class="grid-item empty">Empty</div>`;
for (let key in scripts) {
  $(".grid-container").append(
    `<div class="grid-item"><span>${key}</span></div>`,
  );
  $(`.grid-container span:contains(${key})`).click(() => {
    location.href = scripts[key];
  });
}
$(".grid-container").append(empty_html.repeat(diff));
