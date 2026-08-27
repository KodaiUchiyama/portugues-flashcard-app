// =============================================================
// レッスン一覧インデックス
// 新しいレッスンを追加するたびに、ここに1行追加する
// =============================================================

const LESSONS_INDEX = [

  {
    id: "2026-04-01",
    date: "2026-04-01",
    title: "AULA 3: Viagens Inteligentes e Econômicas",
    theme: "旅行・節約",
    dataVar: "LESSON_DATA_20260401",
    dataPath: "lessons/2026-04-01/flashcards-data.js",
  },

  {
    id: "2026-04-16",
    date: "2026-04-16",
    title: "AULA 4: Processo Comunicativo e Vocabulário do Trabalho",
    theme: "コミュニケーション・仕事",
    dataVar: "LESSON_DATA_20260416",
    dataPath: "lessons/2026-04-16/flashcards-data.js",
  },

  {
    id: "2026-04-23",
    date: "2026-04-23",
    title: "AULA 5: Microexpressões e Vocabulário da Casa",
    theme: "リアクション表現・家",
    dataVar: "LESSON_DATA_20260423",
    dataPath: "lessons/2026-04-23/flashcards-data.js",
  },

  {
    id: "2026-04-30",
    date: "2026-04-30",
    title: "AULA 6: Paradoxo Brasileiro — Suavização e Conectores Naturais",
    theme: "ブラジル文化・会話の自然さ",
    dataVar: "LESSON_DATA_20260430",
    dataPath: "lessons/2026-04-30/flashcards-data.js",
  },

  {
    id: "2026-05-14",
    date: "2026-05-14",
    title: "AULA 7: Suavização, Diminutivos e Conectores Vivos",
    theme: "言葉の和らげ方・縮小辞・接続詞",
    dataVar: "LESSON_DATA_20260514",
    dataPath: "lessons/2026-05-14/flashcards-data.js",
  },

  {
    id: "2026-05-21",
    date: "2026-05-21",
    title: "AULA 8: Emoção na Fala — Interjeições e Expressividade",
    theme: "感情表現・イントネーション",
    dataVar: "LESSON_DATA_20260521",
    dataPath: "lessons/2026-05-21/flashcards-data.js",
  },

  {
    id: "2026-06-03",
    date: "2026-06-03",
    title: "AULA 9: Falar Errado Não Tem Problemas — Reparação e Fluência Social",
    theme: "言い直し戦略・会話の流暢さ",
    dataVar: "LESSON_DATA_20260603",
    dataPath: "lessons/2026-06-03/flashcards-data.js",
  },

  {
    id: "2026-06-11",
    date: "2026-06-11",
    title: "AULA 10: Conversando Sobre Nossa Experiência na Disney de Tóquio",
    theme: "感情表現・旅行体験を語る",
    dataVar: "LESSON_DATA_20260611",
    dataPath: "lessons/2026-06-11/flashcards-data.js",
  },

  {
    id: "2026-06-17",
    date: "2026-06-17",
    title: "AULA 11: Disney de Tóquio — Experiências, Opiniões e Compreensão Oral",
    theme: "体験語彙・意見表現・聞き取り",
    dataVar: "LESSON_DATA_20260617",
    dataPath: "lessons/2026-06-17/flashcards-data.js",
  },

  {
    id: "2026-06-24",
    date: "2026-06-24",
    title: "AULA 12: Copa do Mundo 2026 — Vocabulário do Futebol",
    theme: "サッカー・ワールドカップ実況表現",
    dataVar: "LESSON_DATA_20260624",
    dataPath: "lessons/2026-06-24/flashcards-data.js",
  },

  {
    id: "2026-07-15",
    date: "2026-07-15",
    title: "AULA 13: Copa do Mundo — Análise Pós-jogo e Expressões Idiomáticas",
    theme: "試合後分析・サッカー慣用句・ポジション名",
    dataVar: "LESSON_DATA_20260715",
    dataPath: "lessons/2026-07-15/flashcards-data.js",
  },

  {
    id: "2026-07-22",
    date: "2026-07-22",
    title: "AULA 14: Expressando Opiniões — Concordar, Discordar e Prever",
    theme: "意見表現・同意・反論・予測",
    dataVar: "LESSON_DATA_20260722",
    dataPath: "lessons/2026-07-22/flashcards-data.js",
  },

  {
    id: "2026-07-23",
    date: "2026-07-23",
    title: "AULA 15: Sábado à Tarde com os Amigos — Churrasco e Conversa Natural",
    theme: "チュラスコ・自然な会話・挨拶",
    dataVar: "LESSON_DATA_20260723",
    dataPath: "lessons/2026-07-23/flashcards-data.js",
  },

  {
    id: "2026-07-30",
    date: "2026-07-30",
    title: "AULA 16: O Assunto Muda Sozinho — Clima e Conectores",
    theme: "話題転換・天気の会話・接続詞",
    dataVar: "LESSON_DATA_20260730",
    dataPath: "lessons/2026-07-30/flashcards-data.js",
  },

  {
    id: "2026-08-06",
    date: "2026-08-06",
    title: "AULA 17: Como é o Japão? — Falando da Vida no Japão",
    theme: "日本での生活を語る・意見を展開する",
    dataVar: "LESSON_DATA_20260806",
    dataPath: "lessons/2026-08-06/flashcards-data.js",
  },

  {
    id: "2026-08-13",
    date: "2026-08-13",
    title: "AULA 18: Como Vocês Se Conheceram? — Contando a História do Casal",
    theme: "馴れ初め・過去の出来事の整理・家族の呼称",
    dataVar: "LESSON_DATA_20260813",
    dataPath: "lessons/2026-08-13/flashcards-data.js",
  },

  {
    id: "2026-08-20",
    date: "2026-08-20",
    title: "AULA 19: O Café da Minha Esposa — Empreendedorismo e Comida Mineira",
    theme: "起業ストーリー・ミナス料理・お店の説明",
    dataVar: "LESSON_DATA_20260820",
    dataPath: "lessons/2026-08-20/flashcards-data.js",
  },

  // 次のレッスンはここに追加:

];
