// =============================================================
// フラッシュカード データ テンプレート
// =============================================================
// 使い方:
//   1. このファイルをコピーして lessons/YYYY-MM-DD/ フォルダに
//      "flashcards-data.js" という名前で保存する
//   2. 変数名の YYYYMMDD を日付に合わせて変更（例: 20260423）
//   3. lesson セクションを埋める
//   4. cards 配列に review.md の内容を入れる
//   5. lessons-index.js に1行追加する
// =============================================================

// ★ 変数名の日付部分を変えること（例: LESSON_DATA_20260423）
window.LESSON_DATA_YYYYMMDD = {

  lesson: {
    id: "YYYY-MM-DD",           // 例: "2026-04-23"
    date: "YYYY-MM-DD",         // 例: "2026-04-23"
    title: "AULA X: タイトル",  // 例: "AULA 5: Comida Brasileira"
    theme: "テーマ",            // 例: "食べ物・料理"
  },

  cards: [

    // ---- 単語・表現 (category: "vocabulary") --------------------
    {
      id: "YYYY-MM-DD-vocab-001",
      category: "vocabulary",
      // subcategory: "slang"（スラング）| "expression"（複数語の表現）| "word"（単語）
      subcategory: "expression",
      front: "ポルトガル語",
      back: "日本語の意味",
      example_pt: "ポルトガル語の例文。",
      example_ja: "日本語訳。",
      notes: "補足（対義語・使い方・ニュアンスなど）",
    },

    // ---- フレーズ (category: "phrase") --------------------------
    {
      id: "YYYY-MM-DD-phrase-001",
      category: "phrase",
      subcategory: "general",   // テーマ名を自由に（"travel", "food" など）
      front: "ポルトガル語フレーズ。",
      back: "日本語訳。",
      example_pt: "",
      example_ja: "",
      notes: "使われる文脈など",
    },

    // ---- 接続詞・意見表現 (category: "connector") ---------------
    {
      id: "YYYY-MM-DD-connector-001",
      category: "connector",
      subcategory: "opinion",   // "opinion" | "contrast" | "addition" など
      front: "Na minha opinião…",
      back: "私の意見では…",
      example_pt: "Na minha opinião, …",
      example_ja: "私の意見では、…",
      notes: "意見を述べるとき",
    },

    // ---- 言い換え (category: "reformular") ----------------------
    {
      id: "YYYY-MM-DD-reformular-001",
      category: "reformular",
      subcategory: "paraphrase",
      front: "元の文（原文）",
      back: "言い換えた文",
      example_pt: "別の言い換えパターン（任意）",
      example_ja: "日本語訳（任意）",
      notes: "",
    },

  ],
};
